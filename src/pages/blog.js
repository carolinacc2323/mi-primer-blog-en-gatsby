import * as React from 'react'
import Layout from '../components/layout'

const Blog = function (){
    const nombre = "Doraemon"
    
    return (
        <Layout pageTitle='Blog'>
        <p>Aquí estarán próximante nuestras entradas de blog</p>
        </Layout>
    )
}

export const Head = () => <title>Blog</title>
export default Blog