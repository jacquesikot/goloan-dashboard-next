import React from 'react';
import Head from 'next/head';

const NavBar = () => {
  /*===== SHOW NAVBAR  =====*/
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        // show navbar
        nav.classList.toggle('show');
        // change icon
        toggle.classList.toggle('bx-x');
        // add padding to body
        bodypd.classList.toggle('body-pd');
        // add padding to header
        headerpd.classList.toggle('body-pd');
      });
    }
  };

  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

  /*===== LINK ACTIVE  =====*/
  const linkColor = document.querySelectorAll('.nav__link');

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    }
  }
  linkColor.forEach((l) => l.addEventListener('click', colorLink));

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <>
        <body id="body-pd">
          <header className="header" id="header">
            <div className="header__toggle">
              <i className="bx bx-menu" id="header-toggle"></i>
            </div>
          </header>

          <div className="l-navbar" id="nav-bar">
            <nav className="nav">
              <div>
                <a href="#" className="nav__logo">
                  <i className="bx bx-layer nav__logo-icon"></i>
                  <span className="nav__logo-name">Bedimcode</span>
                </a>

                <div className="nav__list">
                  <a href="#" className="nav__link active">
                    <i className="bx bx-grid-alt nav__icon"></i>
                    <span className="nav__name">Dashboard</span>
                  </a>

                  <a href="#" className="nav__link">
                    <i className="bx bx-user nav__icon"></i>
                    <span className="nav__name">Users</span>
                  </a>

                  <a href="#" className="nav__link">
                    <i className="bx bx-message-square-detail nav__icon"></i>
                    <span className="nav__name">Messages</span>
                  </a>

                  <a href="#" className="nav__link">
                    <i className="bx bx-bookmark nav__icon"></i>
                    <span className="nav__name">Favorites</span>
                  </a>

                  <a href="#" className="nav__link">
                    <i className="bx bx-folder nav__icon"></i>
                    <span className="nav__name">Data</span>
                  </a>

                  <a href="#" className="nav__link">
                    <i className="bx bx-bar-chart-alt-2 nav__icon"></i>
                    <span className="nav__name">Analytics</span>
                  </a>
                </div>
              </div>

              <a href="#" className="nav__link">
                <i className="bx bx-log-out nav__icon"></i>
                <span className="nav__name">Log Out</span>
              </a>
            </nav>
          </div>
        </body>
      </>
    </>
  );
};

export default NavBar;
