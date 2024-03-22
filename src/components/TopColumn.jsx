import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const TopColumn = () => {
  dayjs.locale("ja");
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsPosts(sort: { date: DESC }, limit: 5) {
        nodes {
          date(formatString: "YYYY.MM.DD")
          updatedAt(formatString: "YYYY.MM.DD")
          createdAt(formatString: "YYYY-MM-DDTHH:MM")
          title
          postsId
          category {
            id
            name
          }
        }
      }
    }
  `);
  const posts = data.allMicrocmsPosts.nodes;

  return (
    <>
      <ul>
        {posts.map((node) => (
          <li key={node.postsId}>
            <div className={"cat_tag " + node.category.id}>
              <Link to={"/category/" + node.category.id + "/"}>Column</Link>
            </div>
            <br />
            <Link to={"/posts/" + node.postsId + "/"}>
              <time dateTime={node.date}>{node.date}</time>
              {node.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TopColumn;
