import React from 'react'

const Header = () => {
  return (
    <>
      <div className="header">
        {/* anchor tag for loading home page on clicking the image */}
        <a href="/">
          <img
            
            alt="logo"
          ></img>
        </a>
        <h1>Welcome to Movies Flix</h1>
        <ul className="nav-items">
          {/* <SearchBar/> */}
        </ul>
      </div>
    </>
  )
}

export default Header