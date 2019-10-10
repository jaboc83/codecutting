// 3rd Party
import React from "react"

// Other Components
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

// Component
const Writing: React.FC = () => {
  const externalLink = (path: string, title: string, date: string) => (
    <li className="text-sm md:text-xl block my-8 mx-2">
      <a
        href={path}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="font-bold">{date} - </span>
        {title}
      </a>
    </li>
  )
  return (
    <Layout>
      <div className="container flex justify-center m-auto">
        <SEO title="writing" />
        <ul>
          {externalLink(
            "https://medium.com/@jaboc83/getting-rails-up-and-running-on-windows-subsystem-for-linux-e5b6d78a53fe",
            "Getting Rails up and Running on Windows Subsystem for Linux",
            "Oct 3, 2019"
          )}
          {externalLink(
            "https://medium.com/@jaboc83/encrypt-a-column-in-sql-server-2017-3f72c6240446",
            "Encrypt a Column in SQL Server 2017",
            "Sep 26, 2019"
          )}
          {externalLink(
            "https://medium.com/@jaboc83/red-carpets-and-velvet-ropes-for-forming-lasting-habits-9d3ee88d1c03",
            "Red Carpets and Velvet Ropes for Forming Lasting Habits",
            "Sep 23, 2019"
          )}
          {externalLink(
            "https://medium.com/@jaboc83/the-art-of-continuous-improvement-aeedec7ba9c4",
            "The Art of Continuous Improvement",
            "Aug 2, 2019"
          )}
          {externalLink(
            "https://medium.com/@jaboc83/caffeine-reset-week-952e2a39238f",
            "Caffeine Reset Week",
            "Aug 1, 2019"
          )}
          {externalLink(
            "https://medium.com/@jaboc83/wait-did-i-ugh-just-re-push-it-86ab1dce28df",
            "Wait... Did I? Ugh, just re-push it",
            "Jul 30, 2019"
          )}
          {externalLink(
            "https://medium.com/@jaboc83/module-imported-or-maybe-not-e815531a8cb",
            "Module Imported or Maybe Not...",
            "Mar 1, 2016"
          )}
          {externalLink(
            "https://medium.com/@jaboc83/the-dead-remember-their-past-lives-ea6a41cfb5b5",
            "The Dead Remember Their Past Lives",
            "Oct 22, 2014"
          )}
          {externalLink(
            "https://medium.com/@jaboc83/your-javascript-loops-are-slowing-you-down-684018047bcd",
            "Your Javascript Loops are Slowing You Down",
            "Sep 25, 2014"
          )}
          {externalLink(
            "https://medium.com/@jaboc83/developers-specialize-3eaf382966ac",
            "Developers: Specialize",
            "Aug 17, 2014"
          )}
          {externalLink(
            "https://medium.com/@jaboc83/back-into-the-shell-6a1f08e8d9bc",
            "Back Into the Shell",
            "Aug 14, 2014"
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default Writing
