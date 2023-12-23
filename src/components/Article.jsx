import React from 'react';
import BreadCrumb from './BreadCrumb';
import BreadCrumbParent from './BreadCrumbParent';
const Article = ({ children, id, category, title, sub, slug, parentTitle }) => {
  return (
    <>
      <article id={id} className='posts_box'>
        <div className='main-content'>
          {sub && (parentTitle ? <BreadCrumbParent title={title} slug={slug} parentTitle={parentTitle} /> : <BreadCrumb title={title} />)}
          <h1>{category}</h1>
          <h2>{title}</h2>

          {children}

          <p className='center'>
            <a href={slug} className='bt02'>
              一覧に戻る
            </a>
          </p>
        </div>
      </article>
    </>
  );
};

export default Article;
