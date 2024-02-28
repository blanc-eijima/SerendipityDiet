import React from "react";
import { Link } from "gatsby";
const CourseBox = ({ course, title }) => {
  const imageUrl = `/images/course_${course}.jpg`;
  const iconUrl = `/images/${course}_icon.png`;
  const courseClass = `cource_title ${course}`;
  const detailUrl = `/plan/#${course}`;
  return (
    <>
      <div className="cource_box">
        <div className="top_cource_icon">
          <img src={iconUrl} width={100} alt="" />
        </div>
        <div className={courseClass}>{title}</div>
        <div className="cource_img">
          <img src={imageUrl} alt="" />
        </div>
        <p className="center">
          <Link to={detailUrl} className="bt01">
            もっと詳しく
          </Link>
        </p>
      </div>
    </>
  );
};

export default CourseBox;
