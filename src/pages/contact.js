import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const contactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>
        Connect with me on{' '}
        <a
          href="https://www.linkedin.com/in/sandykuan/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </Layout>
  )
}

export default contactPage
