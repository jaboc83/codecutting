// 3rd Party
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Images
const SpokGoImage = () => {
  // GraphQl hooks
  const data = useStaticQuery(graphql`
    query SpokGoImageQuery {
      placeholderImage: file(relativePath: { eq: "spok-go.png" }) {
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
      alt="Spok Go Demo"
    />
  )
}

// Component
const SpokGo: React.FC = () => {
  return (
    <div
      id="spok-go-showcase"
      className="flex flex-col justify-center text-justify m-4"
    >
      <a href="https://www.spok.com/spok-go/">
        <h2 className="text-blue-500 text-2xl font-bold text-center">
          Spok Go
        </h2>
      </a>
      <SpokGoImage />
      <h3 className="text-gray-700 flex flex-col lg:flex-row justify-between text-sm mb-2">
        <span className="px-2 max-w-xl">
          <strong>Contributions:</strong> 2020-Present
        </span>
        <span className="px-2 max-w-xl">
          <strong>Technology:</strong> ASP.NET MVC, C#, golang, Typescript,
          React, Powershell
        </span>
        <span className="px-2 max-w-xl">
          <strong>Roles:</strong> Senior Software Engineer
        </span>
      </h3>
      <p className="font-fancy">
        Spok Go is an encrypted communications platform for enhancing clinical
        workflows and improving patient care.
      </p>
      <p className="font-fancy">
        This project had me working on many security features including MFA,
        auth flows, message encryption, and audit log generation and reporting.
        I was also involved in designing and implementing a backup policy for
        application data accross multiple teams, and implementing CICD pipelines
        using Jenkins. The majority of the work was done using C# and golang and
        making heavy use of AWS resources and a serverless architecture.
      </p>
    </div>
  )
}

export default SpokGo
