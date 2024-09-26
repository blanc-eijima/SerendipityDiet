import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const BreadCrumbParent = ({ slug, parentTitle, title }) => {
  return (
    <nav aria-label="Breadcrumb" id="breadcrumb">
      <ul>
        <li>
          <Link to="/">ホーム</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleRight} />
          <Link to={slug}>{parentTitle}</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleRight} />
          {title}
        </li>
      </ul>
    </nav>
  )
}

export default BreadCrumbParent
