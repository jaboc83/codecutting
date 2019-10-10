// 3rd Party
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Images
const HubbleImage = () => {
  // GraphQl hooks
  const data = useStaticQuery(graphql`
    query HubbleImageQuery {
      placeholderImage: file(relativePath: { eq: "imagetrend-hubble.png" }) {
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
      alt="Hubble Screenshot"
    />
  )
}

// Component
const Hubble: React.FC = () => {
  return (
    <div
      id="hubble-showcase"
      className="flex flex-col justify-center text-justify m-4"
    >
      <h2 className="text-gray-900 text-2xl font-bold text-center">
        ImageTrend Hubble / Orbit
      </h2>
      <HubbleImage />
      <h3 className="text-gray-700 flex flex-col lg:flex-row justify-between text-sm mb-2 text-left">
        <span className="px-2 max-w-xl">
          <strong>Contributions:</strong> 2018-Present
        </span>
        <span className="px-2 max-w-xl">
          <strong>Technology:</strong> ASP.NET Core, React, TypeScript,
          CosmosDB, Azure Functions, Azure Data Lake, Azure Analysis Services,
          Powershell
        </span>
        <span className="px-2 max-w-xl">
          <strong>Roles:</strong> Developer, DevOps, Designer, Architect
        </span>
      </h3>
      <p className="font-fancy">
        ImageTrend Hubble is a simple internal web application that is used to
        monitor and administrate a separate internal big data infrastructure
        project called ImageTrend Orbit.
      </p>
      <p className="font-fancy">
        Hubble runs on React+TS+MVC Core, and Orbit is a large series of
        serverless functions and Azure data storage technologies for ingesting,
        processing and egressing datasets within the company. I worked on both
        projects in tandem.
      </p>
    </div>
  )
}

export default Hubble
