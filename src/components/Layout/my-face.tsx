// 3rd Party
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Component
const MyFace = () => {
  // GraphQl hooks
  const data = useStaticQuery(graphql`
    query MyFaceImageQuery {
      placeholderImage: file(relativePath: { eq: "face.jpg" }) {
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
      className="rounded-full border-blue-400 border-4 m-4"
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  )
}

export default MyFace
