import React from "react"
import BreadCrumb from "./BreadCrumb"
import BreadCrumbParent from "./BreadCrumbParent"
import Aside from "./Aside"
const Article = ({ children, id, category, title, sub, slug, parentTitle, mokuji }) => {
  return (
    <>
      {sub && (parentTitle ? <BreadCrumbParent title={title} slug={slug} parentTitle={parentTitle} /> : <BreadCrumb title={title} />)}
      <article id={id} className="posts_box">
        <p>{category}</p>
        <h1>{title}</h1>

        {children}

        <p className="center">
          <a href={slug} className="bt02">
            一覧に戻る
          </a>
        </p>
      </article>
      <Aside mokuji={mokuji} />
    </>
  )
}

export default Article
