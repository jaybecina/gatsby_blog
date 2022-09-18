import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"

const BlogPage = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <div>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author}on{" "}
            {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog" />

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
