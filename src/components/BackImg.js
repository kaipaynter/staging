// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import BackgroundSlider from 'gatsby-image-background-slider'
// import '../styles/background.css'

// const BackImg = ({ children }) => (
//   <>
//     <main>{children}</main>
//     <BackgroundSlider
//       className="masterhead"
//       query={useStaticQuery(graphql`
//         query {
//           backgrounds: allFile(
//             filter: { sourceInstanceName: { eq: "images" } }
//           ) {
//             nodes {
//               relativePath
//               childImageSharp {
//                 fluid(maxWidth: 1000, quality: 100) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       `)}
//       initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
//       transition={3} // transition duration between images
//       duration={6} // how long an image is shown
//       // specify images to include (and their order) according to `relativePath`
//       images={[
//         'servicesA.png',
//         'servicesB.png',
//         'servicesC.png',
//         'servicesD.png',
//         'servicesE.png',
//       ]}
//       // pass down standard element props
//       style={{
//         transform: 'scale(.77)',
//       }}
//     >
//       {/* Captions in sync with background images*/}
//       <div>Early Career</div>
//       <div>Experienced</div>
//       <div>Managers/Directors</div>
//       <div>Licensed Professionals</div>
//       <div>Executives</div>
//     </BackgroundSlider>
//   </>
// )
