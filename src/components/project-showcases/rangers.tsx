// 3rd Party
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Images
const RangersImage = () => {
  // GraphQl hooks
  const data = useStaticQuery(graphql`
    query RangersImageQuery {
      placeholderImage: file(relativePath: { eq: "mnrangers.png" }) {
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      className="block m-auto md:max-w-3xl shadow-md mb-4"
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt="MN Rangers Screenshot"
    />
  )
}

// Component
const Rangers: React.FC = () => {
  return (
    <div
      id="mnrangers-showcase"
      className="flex flex-col justify-center text-justify m-4"
    >
      <h2 className="text-blue-500 text-2xl font-bold text-center">
        <a href="https://github.com/jaboc83/mnrangers">MN Rangers Website</a>
      </h2>
      <RangersImage />
      <h3 className="text-gray-700 flex flex-col lg:flex-row justify-between text-sm mb-2 text-left">
        <span className="px-2 max-w-xl">
          <strong>Contributions:</strong> 2015-2017
        </span>
        <span className="px-2 max-w-xl">
          <strong>Technology:</strong> NodeJS, Express{" "}
        </span>
        <span className="px-2 max-w-xl">
          <strong>Roles:</strong> Developer, Designer
        </span>
      </h3>
      <p className="font-fancy">
        The Minnesota Rangers website was a hub for all things related to the
        former minor league basketball team. It had news, schedules, roster
        information, and stats. The site and team are no longer active.
      </p>
    </div>
  )
}

export default Rangers
