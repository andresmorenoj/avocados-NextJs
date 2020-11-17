import React from 'react'
import Navbar from '@components/Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer>This is the footer</footer>
      <style jsx>
        {`
          .container {
            background-color: salmon;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
