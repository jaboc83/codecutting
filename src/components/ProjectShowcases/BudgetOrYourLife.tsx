// 3rd Party
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Images
const BOYLImage = () => {
  // GraphQl hooks
  const data = useStaticQuery(graphql`
    query BOYLImageQuery {
      placeholderImage: file(relativePath: { eq: "boyl.png" }) {
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
      alt="Budget or Your Life Screenshot"
    />
  )
}

// Component
const BudgetOrYourLife: React.FC = () => {
  return (
    <div
      id="budget-or-your-life-showcase"
      className="flex flex-col justify-center text-justify m-4"
    >
      <h2 className="text-blue-500 text-2xl font-bold text-center">
        <a href="https://budgetoryourlife.com">Budget or Your Life for YNAB</a>
      </h2>
      <BOYLImage />
      <h3 className="text-gray-700 flex flex-col lg:flex-row justify-between text-sm mb-2 text-left">
        <span className="px-2 max-w-xl">
          <strong>Contributions:</strong> 2019-Present
        </span>
        <span className="px-2 max-w-xl">
          <strong>Technology:</strong> ASP.NET Core, React, TypeScript, Azure
          Hosting
        </span>
        <span className="px-2 max-w-xl">
          <strong>Roles:</strong> Developer, DevOps, Designer
        </span>
      </h3>
      <p className="font-fancy">
        Budget or Your Life is a simple web app I threw together to visualize a
        YNAB budget using life energy as outlined in the book &apos;Your Money
        or Your Life&apos;.
      </p>
      <p className="font-fancy">
        This app was created as a way for me to test my newly created .net core
        YNAB sdk. It was one of my first attempts at building a TypeScript +
        React app as well.
      </p>
    </div>
  )
}

export default BudgetOrYourLife
