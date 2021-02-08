import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const aboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nobis
        pariatur consectetur dolor laborum, nisi cum ut aut, eius temporibus
        iste amet corporis sit excepturi! Pariatur accusantium modi corrupti
        eius.
      </p>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default aboutPage
