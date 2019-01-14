import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

const TutorialsPage = ({ data }) => (
  <div>
    <h1>Latest Tutorials</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by {post.node.frontmatter.author}</small>
        <Link to={post.node.frontmatter.path}>Read more</Link>
      </div>
    ))}
  </div>
)

export const query = graphql`
  query TutorialIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
          }
        }
      }
    }
  }
`

export default TutorialsPage