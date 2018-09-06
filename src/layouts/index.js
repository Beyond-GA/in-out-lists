import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'


import Header from '../components/header'
import Sidebar from '../components/sidebar'
import './index.css'
import "../styles/layout-overide.css";

const Layout = ({ children, data }) => (
  <div>
  <Helmet
    title="Gatsby Default Starter"
    meta={[
      { name: "description", content: "Sample" },
      { name: "keywords", content: "sample, something" }
    ]}
  />
  <Header />
  <div
    style={{
      margin: "0 auto",
      maxWidth: 800,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "100%"
    }}
  >
    <Media query={{ maxWidth: 848 }}>
      {matches =>
        matches ? (
          <div
            style={{
              margin: "0 auto",
              maxWidth: 980,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%",
              padding: "25px"
            }}
          >
            <div style={{ flex: 1 }}>{children()}</div>
          </div>
        ) : (
          <div
            style={{
              margin: "0 auto",
              maxWidth: 980,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%",
              padding: "25px"
            }}
          >
            <div style={{ flex: 2.5, paddingRight: "30px" }}>
              {children()}
            </div>
          
<div style={{ flex: 1 }}>
            <Sidebar
              title="WE ARE"
              description="trend-setters living in DC and Wisconsin."
              />
            <Sidebar
                title="THIS IS"
                description="a log of random moments in our lives to stay inspired & connected when we are far apart."
              />
             

              
            </div>
          </div>
        )
      }
    </Media>
  </div>
</div>
);

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
