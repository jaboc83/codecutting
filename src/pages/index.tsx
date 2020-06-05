// 3rd Party
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Images
import MyFace from "../components/layout/my-face"

// Other Components
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

// Component
const IndexPage = () => {
  return (
    <Layout>
      <div className="m-auto flex flex-col md:flex-row flex-1 justify-center">
        <SEO title="Home" />
        <div className="flex flex-col lg:mt-4 max-w-2xl m-auto h-full lg:flex-row">
          <div
            id="bio"
            className="flex flex-col items-center m-auto p-4 rounded-lg"
          >
            <MyFace />
            <h1 className="text-2xl font-bold">Jake Moening</h1>
            <span className="text text-gray-600">
              Developer at{" "}
              <a
                href="https://www.imagetrend.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                ImageTrend
              </a>
            </span>
            <p className="text-justify text-lg mt-2 font-fancy w-full">
              Hi. I&apos;m a software developer based in Minnesota and I&apos;ve
              been cutting code since 2007. I have a passion for creating
              software that solves interesting problems.
            </p>
            <p className="text-justify text-lg mt-2 font-fancy w-full">
              When I&apos;m not cutting code I enjoy cooking, exploring the
              outdoors,
              <a
                href="https://500px.com/jaboc83"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                {" photography "}
              </a>
              and
              <a
                href="https://www.goodreads.com/user/show/51650541-jake"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                {" reading."}
              </a>
            </p>
            <div className="flex">
              <a
                href="mailto:jaboc83@gmail.com"
                className="bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 text-blue-200 text-lg rounded border-none shadow-lg px-4 py-2 my-2"
              >
                <FontAwesomeIcon icon={["far", "envelope"]} />
                {" MESSAGE ME"}
              </a>
              <a
                href="https://dev.to/jaboc83"
                className="bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 text-blue-200 text-lg rounded border-none shadow-lg px-4 py-2 my-2 ml-2"
              >
                <FontAwesomeIcon icon={["fab", "dev"]} className="mr-2" />
                {"DEV PROFILE"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
