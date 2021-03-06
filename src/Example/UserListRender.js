import React from "react";
import axios from "axios";
import "./userStyles.css";

class UserListRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users").then((res) => {
      const users = res.data.data;
      this.setState({ users });
    });
  }

  renderTableData() {
    return this.state.users.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.email}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      );
    });
  }

  shouldComponentUpdate(nextPros, nextState) {
    //console.log(nextState.users.length);
    return nextState.users.length > 0;
  }

  deleteLastUser() {
    let users = this.state.users;
    users.pop();
    this.setState({ users: users });
  }

  render() {
    return (
      <>
        <h1>List of users</h1>
        <button className="delete-user" onClick={() => this.deleteLastUser()}>
          Delete Last User
        </button>
        <table id="users">
          <thead>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </>
    );
  }
}

export default UserListRender;
