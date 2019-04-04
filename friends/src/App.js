import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import FriendsList from "./component/FriendsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log("Server Error", err);
      });
  }

  render() {
    return (
      <div className="FriendsList">
        {this.state.friends.map(friend => (
          <FriendsList friend={friend} key={friend.id} />
        ))}
      </div>
    );
  }
}

export default App;
