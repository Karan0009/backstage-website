import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({ fileName }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      logoImage: file(relativePath: { eq: "backstage-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paidSupporters: file(relativePath: { eq: "paidSupporters.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postMedia: file(relativePath: { eq: "postMedia.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      automated: file(relativePath: { eq: "automated.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      refreshing: file(relativePath: { eq: "refreshing.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      schedule: file(relativePath: { eq: "schedule.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (
    !data?.placeholderImage?.childImageSharp?.fluid ||
    fileName === "" ||
    !fileName
  ) {
    return <div>Picture not found</div>
  }
  switch (fileName) {
    case "placeholder":
      return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    case "logo":
      return <Img fluid={data.logoImage.childImageSharp.fluid} />
    case "paidSupporters":
      return <Img fluid={data.paidSupporters.childImageSharp.fluid} />
    case "automated":
      return <Img fluid={data.automated.childImageSharp.fluid} />
    case "postMedia":
      return <Img fluid={data.postMedia.childImageSharp.fluid} />
    case "refreshing":
      return <Img fluid={data.refreshing.childImageSharp.fluid} />
    case "schedule":
      return <Img fluid={data.schedule.childImageSharp.fluid} />
    default:
      return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  }
}

export default Image
