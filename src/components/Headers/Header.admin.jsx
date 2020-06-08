import React from "react";

import { auth } from "fire/firebase";

const HeaderAdmin = () => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <header className="page-topbar" id="header">
      <div className="navbar navbar-fixed ">
        <nav className="navbar-main navbar-color nav-collapsible sideNav-lock gradient-45deg-purple-deep-orange">
          <div className="nav-wrapper">
            <div className="header-search-wrapper hide-on-med-and-down">
              <i className="material-icons">search</i>
              <input
                className="header-search-input z-depth-2"
                type="text"
                name="Search"
                placeholder="Explora Edutek"
                data-search="template-list"
              />
              <ul className="search-list collection display-none" />
            </div>
            <ul className="navbar-list right">
              <li>
                <a
                  className="waves-effect waves-block waves-light notification-button"
                  href="#!"
                  data-target="notifications-dropdown"
                >
                  <i className="material-icons">
                    notifications_none
                    <small className="notification-badge">5</small>
                  </i>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-trigger waves-effect waves-block waves-light profile-button"
                  href="#!"
                  data-target="profile-dropdown"
                >
                  <span className="avatar-status avatar-online">
                    <img
                      src={require("assets/images/avatar/avatar-7.png")}
                      alt="avatar"
                    />
                    <i />
                  </span>
                </a>
              </li>
            </ul>

            {/* profile-dropdown*/}
            <ul className="dropdown-content" id="profile-dropdown">
              <li>
                <a
                  className="grey-text text-darken-1"
                  href="user-profile-page.html"
                >
                  <i className="material-icons">person_outline</i> Profile
                </a>
              </li>
              <li>
                <a className="grey-text text-darken-1" href="app-chat.html">
                  <i className="material-icons">chat_bubble_outline</i> Chat
                </a>
              </li>
              <li>
                <a className="grey-text text-darken-1" href="page-faq.html">
                  <i className="material-icons">help_outline</i> Help
                </a>
              </li>
              <li className="divider" />
              <li>
                <a
                  className="grey-text text-darken-1"
                  href="user-lock-screen.html"
                >
                  <i className="material-icons">lock_outline</i> Lock
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-darken-1"
                  href="#!"
                  onClick={logout}
                >
                  <i className="material-icons">keyboard_tab</i> Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderAdmin;
