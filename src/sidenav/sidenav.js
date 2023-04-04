import React from "react";
import { NavLink } from "react-router-dom";

// import DeleteIcon from '@mui/icons-material/Delete';

class SideNav extends React.Component {
  state = {
    links: [
      {
        main: "Home",
        subLinks: [
          {
            link: "/home",
            heading: "Home",
            exact: true,
            class: "home",
          },
        ],
      },
      {
        main: "Meditate",
        subLinks: [
          {
            link: "/meditate",
            heading: "Meditate",
            exact: true,
            class: "meditate",
          },
        ],
      },
      {
        main: "Sleep",
        subLinks: [
          {
            link: "/sleep",
            heading: "Sleep",
            exact: false,
            class: "sleep",
          },
        ],
      },
      {
        main: "Music",
        subLinks: [
          {
            link: "/music",
            heading: "Music",
            exact: true,
            class: "music",
          },
        ],
      },
      {
        main: "For Work",
        subLinks: [
          {
            link: "/for-work",
            heading: "For work",
            exact: true,
            class: "forwork",
          },
          // { link: "/settings/user", heading: "", exact: true, class: "appedgeuser" },
        ],
      },
      {
        main: "Wisdom",
        subLinks: [
          {
            link: "/Wisdom",
            heading: "Wisdom",
            exact: true,
            class: "wisdom",
          },
        ],
      },
      {
        main: "Calm Kids",
        subLinks: [
          {
            link: "/calm-kids",
            heading: "Calm Kids",
            exact: true,
            class: "calmkids",
          },
        ],
      },
      {
        main: "Movement",
        subLinks: [
          {
            link: "/movement",
            heading: "Movement",
            exact: true,
            class: "movement",
          },
        ],
      },
      {
        main: "Profile",
        subLinks: [
          {
            link: "/profile",
            heading: "Profile",
            exact: true,
            class: "profile",
          },
        ],
      },
    ],
  };

  render() {

    const sidebar = this.state.links.map((row,index) => {
        return(
            <React.Fragment>
                {
                    row.subLinks.map((sublink) => {
                        return(
                            <li>
                                <NavLink
                                 to = {sublink.link}
                                 title={sublink.heading}
                                 className={sublink.class}
                                >
                                    <i>{sublink.icon}</i>
                                    <span>{sublink.heading}</span>
                                </NavLink>
                            </li>
                        );
                    })
                }
            </React.Fragment>
        )
    })
    return (
      <nav id="sidebar" className="text-center">
        <ul className="list-unstyled">
            <li>
                {sidebar}
            </li>
        </ul>
      </nav>
    );
  }
}


export default SideNav;