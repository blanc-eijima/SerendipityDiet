import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BreadCrumbParent = (props) => {
  return (
    <>
      <nav aria-label="Breadcrumb" id="breadcrumb">
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faAngleRight} />
            <Link to={"/" + props.slug + "/"}>{props.parentTitle}</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faAngleRight} />
            {props.title}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BreadCrumbParent;
