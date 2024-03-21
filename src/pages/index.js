// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
// {} importo algo dentro de algo


// Step 2: Define your component
const IndexPage = () => {
return (
  <Layout pageTitle='Mi página de inicio'>
    <p>Esta es la página de inicio de Aranjuez</p>
  </Layout>
)
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>


// Step 3: Export your component
export default IndexPage

// <main>
  //   <h1>Welcome to my Gatsby site!</h1>
  //   <nav>
  //     <Link to='/'>Home</Link>
  //     <Link to='/sobremi'>Sobre Mi</Link>
  //     <Link to='/blog'>Blog</Link>
  //   </nav>
  //   <p>I'm making this by following the Gatsby Tutorial.</p>
  // </main>