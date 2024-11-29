import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"

const Mokuji = () => {
  const [headings, setHeadings] = useState([])
  const [currentHeading, setCurrentHeading] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // メインコンテンツ内の見出しのみを取得
      const headingElements = document.querySelector(".post_main_box").querySelectorAll("h2, h3")

      const headingsData = Array.from(headingElements).map((element) => {
        return {
          id: element.id || element.getAttribute("id"),
          title: element.textContent,
          level: element.tagName.toLowerCase(),
          offsetTop: element.offsetTop,
        }
      })

      setHeadings(headingsData)

      let currentHeadingId = null
      for (let i = headingsData.length - 1; i >= 0; i--) {
        const { id, offsetTop } = headingsData[i]
        if (scrollY >= offsetTop - 100) {
          currentHeadingId = id
          break
        }
      }

      setCurrentHeading(currentHeadingId)
    }

    handleScroll() // 初期化時に一度実行
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!headings || headings.length === 0) {
    return null
  }

  return (
    <nav className="mokuji_box pc">
      <h3>もくじ</h3>
      <ul>
        {headings.map((heading) => {
          const headingClass = `${heading.id === currentHeading ? "current " : ""}${heading.level}-class`

          return (
            <li key={heading.id} className={`${heading.level === "h3" ? "sub-heading " : ""}${headingClass}`}>
              <Link to={heading.id} smooth={true} duration={500}>
                {heading.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Mokuji
