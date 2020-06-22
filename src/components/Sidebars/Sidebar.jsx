import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { location } = props;

  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard" && prop.show) {
        return (
          <li key={key}>
            {prop.path === "/" + location.pathname.split("/")[2] ? (
              <Link to={prop.layout + prop.path} className="active">
                <i className="material-icons">{prop.icon}</i>
                <span className="menu-title">{prop.name}</span>
              </Link>
            ) : (
              <Link to={prop.layout + prop.path}>
                <i className="material-icons">{prop.icon}</i>
                <span className="menu-title">{prop.name}</span>
              </Link>
            )}
          </li>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <aside className="sidenav-main sidenav-dark sidenav-active-rounded">
      <div className="brand-sidebar">
        <h1 className="logo-wrapper">
          <Link className="brand-logo darken-1" to="/">
            <img
              className="hide-on-med-and-down "
              src={require("assets/images/logo/materialize-logo.png")}
              alt="materialize logo"
            />
            <img
              className="show-on-medium-and-down hide-on-med-and-up"
              src={require("assets/images/logo/materialize-logo-color.png")}
              alt="materialize logo"
            />
            <span className="logo-text hide-on-med-and-down">Edutek</span>
          </Link>
          <Link
            className="navbar-toggler sidenav-trigger"
            to="#!"
            data-target="slide-out"
          >
            <i className="material-icons">radio_button_checked</i>
          </Link>
        </h1>
      </div>
      <ul
        className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow"
        data-menu="menu-navigation"
        data-collapsible="accordion"
        id="slide-out"
      >
        <li className="navigation-header">
          <span className="navigation-header-text">Administración</span>
          <i className="navigation-header-icon material-icons">more_horiz</i>
        </li>
        {createLinks(props.routes)}
      </ul>
      <div className="navigation-background" />
      <Link
        className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
        to="#!"
        data-target="slide-out"
      >
        <i className="material-icons">menu</i>
      </Link>
    </aside>
  );
};

export default Sidebar;
