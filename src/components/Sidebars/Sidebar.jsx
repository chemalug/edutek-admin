import React from "react";
import { Link, NavLink as NavLinkRRD } from "react-router-dom";
import { NavLink, NavItem, Nav } from "reactstrap";
const Sidebar = (props) => {
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard" && prop.show) {
        return (
          <li key={key}>
            <a
              href={prop.layout + prop.path}
              tag={NavLinkRRD}
              className="active"
            >
              <i className="material-icons">{prop.icon}</i>
              <span className="menu-title">{prop.name}</span>
            </a>
          </li>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-dark sidenav-active-rounded">
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
        </h1>
      </div>
      <ul
        className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow"
        id="slide-out"
        data-menu="menu-navigation"
        data-collapsible="accordion"
      >
        <li className="navigation-header">
          <span className="navigation-header-text">Administración</span>
          <i className="navigation-header-icon material-icons">more_horiz</i>
        </li>
        {createLinks(props.routes)}
      </ul>
      <div className="navigation-background" />
      <a
        className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
        href="#!"
        data-target="slide-out"
      >
        <i className="material-icons">menu</i>
      </a>
    </aside>
  );
};

export default Sidebar;
