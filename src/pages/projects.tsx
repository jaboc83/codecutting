// 3rd Party
import React from "react"
import { Link } from "gatsby"

// Other Components
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Elite from "../components/project-showcases/elite"
import Hubble from "../components/project-showcases/hubble"
import YNABSDK from "../components/project-showcases/ynab-sdk"
import TTMG from "../components/project-showcases/ttmg"
import Rangers from "../components/project-showcases/rangers"

// Component
const Projects: React.FC = () => {
  return (
    <Layout>
      <div className="container flex flex-col justify-center m-auto">
        <SEO title="projects" />
        <h1 className="mt-4 text-3xl font-bold text-center">Projects</h1>
        <p className="mb-8 p-4 font-fancy text-center text-lg max-w-2xl text-justify m-auto">
          Aside from{" "}
          <Link to="/" className="text-blue-500">
            this very site
          </Link>
          , I have a variety of other products I have built that you can check
          out below. You can always see what I&apos;m currently working on by
          checking out my{" "}
          <a
            href="https://github.com/jaboc83"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            github.
          </a>
        </p>
        <hr />
        <Hubble />
        <hr />
        <YNABSDK />
        <hr />
        <Elite />
        <hr />
        <TTMG />
        <hr />
        <Rangers />
      </div>
    </Layout>
  )
}

export default Projects
