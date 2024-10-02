import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CourseBox = ({ course, title, imageData, courseTxt, recommended }) => {
  const iconUrl = `/images/${course}_icon.png`
  const courseClass = `cource_title ${course}`
  const detailUrl = `/plan/#${course}`
  const image = getImage(imageData)
  return (
    <>
      <div className="cource_box">
        <div className="top_cource_icon">
          <img src={iconUrl} width={100} alt="" />
        </div>
        <div className={courseClass}>{title}</div>
        <div className="cource_img">{image && <GatsbyImage image={image} alt={title + "イメージ画像"} />}</div>
        {courseTxt && <p>{courseTxt}</p>}

        <p className={`center ${recommended ? "recommended" : ""}`}>
          {recommended && <img src="/images/osusume_img01.png" alt="" width={153} height={60} className="recommended-icon" />}
          <Link to={detailUrl} className="bt01">
            もっと詳しく
          </Link>
        </p>
      </div>
    </>
  )
}

export default CourseBox
