import React, { useState, useCallback } from "react"
import { Link, graphql, withPrefix } from "gatsby"
import { FacebookShareButton, TwitterShareButton } from "react-share"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./book.module.css"

export default function Book({ data }) {
  const initialPage = data.paginatedCollectionPage
  const [latestPage, setLatestPage] = useState(initialPage)
  const [blogPosts, setBlogPosts] = useState(initialPage.nodes)

  const loadNextPage = useCallback(async () => {
    if (!latestPage.hasNextPage) return

    const collectionId = initialPage.collection.id
    const nextPageId = latestPage.nextPage.id
    const path = withPrefix(
      `/paginated-data/${collectionId}/${nextPageId}.json`
    )
    const res = await fetch(path)
    const json = await res.json()

    setBlogPosts(state => [...state, ...json.nodes])
    setLatestPage(json)
  }, [initialPage, latestPage])

  return (
    <Layout>
      <SEO title="airotod's blog - book" />
      <div className={styles.body}>
        <div className={styles.wrap_body}>
          <Link className={styles.title} to="/book/">
            <h1>Books</h1>
          </Link>
          <div className={styles.post_num}>
            {data.allMarkdownRemark.totalCount} Posts
          </div>
          {blogPosts.map(blogPost => (
            <div key={blogPost.id} className={styles.wrap_item}>
              <div className={styles.contents}>
                <Link className={styles.link_item} to={blogPost.url}>
                  <h3>{blogPost.title}</h3>
                  <p className={styles.date}>{blogPost.date}</p>
                  <p className={styles.content}>{blogPost.excerpt}</p>
                </Link>
              </div>
              <div className={styles.share_icons}>
                <TwitterShareButton
                  url={`${data.site.siteMetadata.siteUrl}${blogPost.url}`}
                  title={`${blogPost.excerpt} - ${blogPost.date}`}
                >
                  <span className={styles.share_icon}>
                    <img src="/twitter-black.svg" alt="twitter" />
                  </span>
                </TwitterShareButton>
                <FacebookShareButton
                  url={`${data.site.siteMetadata.siteUrl}${blogPost.slug}`}
                  quote={`${blogPost.excerpt} - ${blogPost.date}`}
                >
                  <span className={styles.share_icon}>
                    <img src="/facebook-black.svg" alt="facebook" />
                  </span>
                </FacebookShareButton>
              </div>
            </div>
          ))}
          {latestPage.hasNextPage && (
            <button className={styles.loadmore_btn} onClick={loadNextPage}>
              <span>See more quotes</span>
            </button>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/book/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    paginatedCollectionPage(
      collection: { name: { eq: "books" } }
      index: { eq: 0 }
    ) {
      nodes
      hasNextPage
      nextPage {
        id
      }
      collection {
        id
      }
    }
  }
`
