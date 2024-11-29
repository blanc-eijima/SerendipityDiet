import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const PlanBox = ({ course, title, children, price, reverse, imageData, recommended }) => {
  const courseName = `${course}_title`
  const image = getImage(imageData)
  console.log(imageData)
  return (
    <>
      <div id={course} className="plan_cont">
        <h3 className={courseName}>{title}</h3>
        <h4 className="price-wrapper">
          月額 {price}円{recommended && <img src="/images/osusume_img01.png" alt="おすすめ" width={140} height={60} className="recommended-icon" />}
        </h4>
        <div className={`plan_box${reverse ? " reverse" : ""}`}>
          <div className="plan_r">{image && <GatsbyImage image={image} alt={title + "イメージ画像"} />}</div>
          <div className="plan_l">
            {children}
            <p className="center">
              <Link to="/mousikomi-form/" className="bt01" role="button">
                お申し込みフォームから今すぐ申し込む
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlanBox
