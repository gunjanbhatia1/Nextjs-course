import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

//header will wrap all the items which should come in header
// <a href=""> some link</a> by using anchor tag it will send request to server but since it is redundant server is already running component is rendered
// and if we use link instead then it will not send request to server click listener is attached to it that prevents from sending request to sever it will just load the appropriate part of component
//to is prop for setting path it should redirect
