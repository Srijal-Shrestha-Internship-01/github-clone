import React, { Component } from "react";
import Information from "../Information/Information";
import Repo from "../Repo/Repo";
import Filter from "../Filter/Filter";
import "./Profile.css";

// Profile component, a functional/stateless component can be used
class Profile extends Component {
  render() {
    return (
      <div id="profile">
        <Information />
        <div className="search-repo">
          <Filter />
          <Repo />
        </div>
      </div>
    );
  }
}

export default Profile;
