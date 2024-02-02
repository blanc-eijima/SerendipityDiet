import React from "react";

const PlanBox = ({ course, title, children, price }) => {
  const imageUrl = `/images/course_${course}.jpg`;

  const courseName = `${course}_title`;
  return (
    <>
      <div id={course} className="plan_box">
        <div className="plan_l">
          <h3 className={courseName}>{title}</h3>
          <h4>月額 {price}円</h4>
          {children}
          <p className="center">
            <a href="/mousikomi-form/" className="bt01" role="button">
              お申し込みフォームから今すぐ申し込む
            </a>
          </p>
        </div>
        <div className="plan_r">
          <img src={imageUrl} width={480} height={320} />
        </div>
      </div>
    </>
  );
};

export default PlanBox;
