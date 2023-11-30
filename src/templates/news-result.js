import * as React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import Seo from "../components/seo"
import Layout2 from '../components/layout2'
import PageHeader from "../components/global-components/page-header"
import BlogGrid from '../components/blog-components/blog-grid'

const NewsResultsTemplate = () => {
  const { loading, error, data } = useQuery(News);
  if (loading) {
    return <></>
  }
  if (error) {
    return <>error</>
  }
  const newslists = data?.blogs?.data;
  return (
    <>
      {newslists &&
        <Layout2>
          <PageHeader headertitle="News" />
          <div className="ltn__shop-details-area pb-10">
            <div className="container">
              <div className="row">
                <BlogGrid newslists={newslists} />
              </div>
            </div>
          </div>
        </Layout2>
      }
    </>

  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */


const News = gql`
query News {
  blogs {
    data {
      id
      attributes {
        Title
        Slug
        Description
			  Posted_At
        Tags {
          id
          Tag{
            data{
              attributes{
                Name
              }
            }
          }
        }
        Image{
          data{
            attributes{
              url
              formats
            }
          }
        }
      }
    }
  }
}
`
export const Head = () => <Seo title="News" />

export default NewsResultsTemplate
