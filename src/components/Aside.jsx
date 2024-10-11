import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Mokuji from "./Mokuji"

const Aside = ({ children, headings, mokuji }) => {
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsPosts(sort: { date: DESC }, limit: 5, skip: 0) {
        edges {
          node {
            title
            date(formatString: "YYYY年MM月DD日")
            eyecatch {
              url
            }
            postsId
          }
        }
        totalCount
      }
    }
  `)
  return (
    <>
      <aside id="sidebar">
        <div className="side-inner">
          {mokuji && <Mokuji headings={headings} />}
          <h3>最近の記事</h3>
          <ul className="side_post_list">
            {data.allMicrocmsPosts.edges.map(({ node }) => (
              <React.Fragment key={node.postsId}>
                <li>
                  <Link to={"/posts/" + node.postsId + "/"} className="post_img">
                    <img src={node.eyecatch.url + "?fm=webp"} alt={node.title + "サムネイル画像"} loading="lazy" />
                  </Link>
                  <Link to={"/posts/" + node.postsId + "/"} className="post_txt">
                    {node.title}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
          {children}
        </div>
      </aside>
    </>
  )
}

export default Aside
