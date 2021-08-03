import React, { Component } from "react";
import { connect } from "react-redux";
import { userAction } from "../../actions/index";
import "./Information.css";
import styled from 'styled-components';
//import { ToInput } from "../pushing/inputting";

// Info component, a functional/stateless component can be used
class Information extends Component {
  
  constructor(){
    super();
    this.state = {
      editing: false,
      data:'',
      name:'',
      username:'',
      bio:'',
      company:'',
      location:'',
      blog:'',
      email:''
    }
  }

  /** 
  handle(event){
    this.setState({
      data:event.target.value
    });
  }
  */

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }

  myChangeHandler = (event) => {
    const value = event.target.value;
    this.setState({
    ...this.state,
    [event.target.name]: value
    });
    /** 
    let name = event.target.value;
    let username = event.target.value;
    let bio= event.target.value;
    let company= event.target.value;
    let location= event.target.value;
    let blog= event.target.value;
    let email= event.target.value;

    this.setState({name: name, username: username, bio: bio, company: company, location: location, blog: blog, email: email});*/
  }
  
  render() {
    const Box = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around
    `;

    const { profile } = this.props.user;

    const ToInput = ()=> {
      this.setState({
        editing:true
      })
    }

    const saveButton = ()=> {
      this.setState({
        editing: false
      })
    }

    let displayname = profile.name
    let displayusername = profile.login
    let displaybio = profile.bio
    let displaycompany = profile.company
    let displaylocation = profile.location
    let displayblog = profile.blog
    let displayemail = profile.email
 

    if (this.state.editing){
      return (
        <div id="info">
          <form>
          <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.myChangeHandler}
          />
            <input
        type='text'
        name='username'
        value={this.state.username}
        onChange={this.myChangeHandler}
      />
            <input
        type='text'
        name='bio'
        value={this.state.bio}
        onChange={this.myChangeHandler}
      />
            <input
        type='text'
        name='company'
        value={this.state.company}
        onChange={this.myChangeHandler}
      />
            <input
        type='text'
        name='location'
        value={this.state.location}
        onChange={this.myChangeHandler}
      />
            <input
        type='text'
        name='blog'
        value={this.state.blog}
        onChange={this.myChangeHandler}
      />
            <input
        type='text'
        name='email'
        value={this.state.email}
        onChange={this.myChangeHandler}
      />
    </form>
    <button className="btn" onClick={saveButton}><input
        type='submit'
      /></button>
    </div>
    )
    }
    else{
      if (this.state.name !== ''){
        displayname = this.state.name;
      }
      
      if (this.state.username !== ''){
        displayusername = this.state.username;
      }

      if (this.state.bio !== ''){
        displaybio = this.state.bio;
      }

      if (this.state.company !== ''){
        displaycompany = this.state.company;
      }
      if (this.state.location !== ''){
        displaylocation = this.state.location;
      }
      if (this.state.blog !== ''){
        displayblog = this.state.blog;
      }
      if (this.state.email !== ''){
        displayemail = this.state.email;
      }


      return(
      <div id="info">
        <img src={profile.avatar_url} alt={profile.avatar_url} />
        <h1>
          <div className="name">{displayname}</div>
          <div className="username">{displayusername}</div>
        </h1>

        <br />
        <div className="bio">{displaybio}</div>
        <button className="btn" onClick={ToInput}>Edit Bio</button>
        <Box>
        <div className="bio">{profile.followers} <small>: followers </small> </div>
        <div className="bio">{profile.following} <small>: following </small> </div>
        <div className="bio">Star: 1</div>
        </Box>
        <div className="company">{displaycompany}</div>
        <div className="location">{displaylocation}</div>
        <div className="blog">{displayblog}</div>
        <div className="email">{displayemail}</div>
      </div>
    );
  }
}
}

const mapStateToProps = userAction;

export default connect(
  mapStateToProps,
  null
)(Information);
