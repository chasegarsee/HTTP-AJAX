import React from "react";
import "../App.css";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      nameInput: this.props.name,
      ageInput: this.props.age,
      emailInput: this.props.email
    };
  }
  handleInput = (e, type) => {
    const key = type + "Input";
    this.setState({ [key]: e.target.value });
  };
  handleEdit = e => {
    e.preventDefault();
    this.props.handleUpdate(
      this.state.nameInput,
      this.state.ageInput,
      this.state.emailInput,
      this.props.id
    );
    this.setState({
      editing: false
    });
  };
  render() {
    return this.state.editing ? (
      <form onSubmit={this.handleEdit}>
        <p>
          <input
            type="text"
            placeholder="Name"
            value={this.state.nameInput}
            onChange={e => this.handleInput(e, "name")}
          />
        </p>
        <p>
          <input
            type="number"
            placeholder="Age"
            value={this.state.ageInput}
            onChange={e => this.handleInput(e, "age")}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Email"
            value={this.state.emailInput}
            onChange={e => this.handleInput(e, "email")}
          />
        </p>
        <button className="edit">Update</button>
        <div className="btns">
          <span
            className="edit"
            onClick={() => this.setState({ editing: false })}
          />
          <span
            className="delete"
            onClick={() => this.props.deleteFriend(this.props.id)}
          />
        </div>
      </form>
    ) : (
      <div className="something">
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.email}</p>
        <section className="icons">
          <button
            className="edit"
            onClick={() => this.setState({ editing: true })}
          >
            edit
          </button>
          <button
            className="delete"
            onClick={() => this.props.deleteFriend(this.props.id)}
          >
            delete
          </button>
        </section>
      </div>
    );
  }
}

export default Friend;
