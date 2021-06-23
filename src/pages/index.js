import React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
/*export default function Home() {
  return (
  <div>
    <h1>Starter Gatsby site by Green!</h1>
    This project create by using command <br/>
    <code>
      &nbsp; gatsby new green-gatsby https://github.com/gatsbyjs/gatsby-starter-hello-world
    </code>
    <br/>
    โปรเจ็คนี้หลังจากถูกสร้างขึ้นจะมีแค่สองไฟล์คือ <code>src/pages/index.js</code> และ <code>gatsby-config.js</code>
    <br/>
    <Link to="/about">Go to About page.</Link>
  </div>
  )
*/
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
         alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
         src="../images/dog.jpeg"
      />
    </Layout>
  )
}
export default IndexPage