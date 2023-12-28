const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'microcmsPosts') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' });
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`, // スラッグを"/posts/記事ID"として設定
    });
  }
};

const PAGES_PER_GROUP = 5; // 1グループに表示するページ数

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // GraphQLのクエリを定義
  const queryResult = await graphql(`
    {
      allMicrocmsCategory {
        edges {
          node {
            id
            categoryId
            name
          }
        }
      }
      allMicrocmsPosts {
        edges {
          node {
            id
            postsId
            category {
              id
            }
            eyecatch {
              url
              height
              width
            }
          }
        }
      }
    }
  `);

  // カテゴリーページのテンプレートを指定
  const categoryTemplate = path.resolve('./src/templates/category.js');

  // カテゴリーページを生成
  queryResult.data.allMicrocmsCategory.edges.forEach(({ node }) => {
    // カテゴリーに対応する記事を取得してpostsフィールドにセットする
    const posts = queryResult.data.allMicrocmsPosts.edges.filter(
      (edge) => edge.node.category && edge.node.category.id === node.categoryId // カテゴリーが存在する場合にのみ追加
    );

    const postsPerPage = 12; // 1ページあたりの記事数
    const numPages = Math.ceil(posts.length / postsPerPage);

    // ページンググループを考慮してカテゴリーページを生成
    Array.from({ length: numPages }).forEach((_, i) => {
      const currentPage = i + 1;
      const groupIndex = Math.floor(i / PAGES_PER_GROUP);
      const startPage = groupIndex * PAGES_PER_GROUP + 1;
      const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, numPages);

      const links = [];
      if (currentPage > 1) {
        links.push({ page: '<< Prev', url: currentPage === 1 ? `/category/${node.categoryId}` : `/category/${node.categoryId}/${currentPage - 1}` });
      }
      for (let j = startPage; j <= endPage; j++) {
        links.push({ page: j, url: j === 1 ? `/category/${node.categoryId}` : `/category/${node.categoryId}/${j}` });
      }
      if (currentPage < numPages) {
        links.push({ page: 'Next >>', url: `/category/${node.categoryId}/${currentPage + 1}` });
      }

      createPage({
        path: i === 0 ? `/category/${node.categoryId}` : `/category/${node.categoryId}/${currentPage}`,
        component: categoryTemplate,
        context: {
          categoryId: node.categoryId,
          category: node,
          posts: posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage),
          limit: postsPerPage,
          skip: (currentPage - 1) * postsPerPage,
          numPages: numPages,
          currentPage: currentPage, // 追加: カレントページを渡す
          links: links, // ページャーに表示するリンクの情報を渡す
          startPage: startPage, // 追加: グループ内の開始ページを渡す
          endPage: endPage, // 追加: グループ内の終了ページを渡す
        },
      });
    });
  });

  // 記事ページのテンプレートを指定
  const postTemplate = path.resolve('./src/templates/posts.js');

  queryResult.data.allMicrocmsPosts.edges.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.postsId}/`,
      component: postTemplate,
      context: {
        postId: node.id,
      },
    });
  });
};
