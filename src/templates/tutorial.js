import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

function Template({data}) {
  const tutorial = data.markdownRemark

  return (
    <div>
      <Link to="/tutorials">Go back</Link>
      <h1>{tutorial.frontmatter.title}</h1>
      <h4>Posted by {tutorial.frontmatter.author}</h4>
      <div dangerouslySetInnerHTML={{ __html: tutorial.html }}></div>
    </div>
  )
}

export const query = graphql`
  query tutorialByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
      }
    }
  }
`
export default Template
