// 3rd Party
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Images
const TTMGImage = () => {
  // GraphQl hooks
  const data = useStaticQuery(graphql`
    query TTMGImageQuery {
      placeholderImage: file(relativePath: { eq: "ttmg.png" }) {
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
      alt="Talk to Me Goose Screenshot"
    />
  )
}

// Component
const TTMG: React.FC = () => {
  return (
    <div
      id="ttmg-showcase"
      className="flex flex-col justify-center text-justify m-4"
    >
      <h2 className="text-blue-500 text-2xl font-bold text-center">
        <a href="https://github.com/jaboc83/talktomegoose">Talk to Me Goose</a>
      </h2>
      <TTMGImage />
      <h3 className="text-gray-700 flex flex-col lg:flex-row justify-between text-sm mb-2 text-left">
        <span className="px-2 max-w-xl">
          <strong>Contributions:</strong> 2018-Present
        </span>
        <span className="px-2 max-w-xl">
          <strong>Technology:</strong> C#{" "}
        </span>
        <span className="px-2 max-w-xl">
          <strong>Roles:</strong> Developer
        </span>
      </h3>
      <p className="font-fancy">
        Talk to Me Goose is a simple console application for Windows that allows
        the user to setup audio cues for in-game events as a training tool for
        League of Legends. The application can either use pre-recorded audio
        clips or it can use text-to-speech to read the alerts.
      </p>
    </div>
  )
}

export default TTMG
