import React, { useEffect, useState } from "react";
import axios from "axios";

import './UserProfile.css';
import NavBar from "../../Components/NavBar/NavBar.jsx"
import Footer from "../../Components/Footer/Footer.jsx"


function UserProfile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);


  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/user/' + id)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="user-profile-wrapper">
    <NavBar/>
  <div className="user-profile-container">
    <table className="user-table">
      <thead className="user-table-header">
        <tr>
          <th className="user-table-header-cell">Name</th>
          <th className="user-table-header-cell">Email</th>
          <th className="user-table-header-cell">Actions</th>
        </tr>
      </thead>
      <tbody className="user-table-body">
        {users.map((user) => {
          return (
            <tr className="user-table-row" key={user._id}>
              <td className="user-table-cell">{user.name}</td>
              <td className="user-table-cell">{user.email}</td>
              <td className="user-table-cell">
                <a href={`/update/${user._id}`} className="user-update-link">
                  <button className="user-update-button">Update</button>
                </a>
                <button
                  className="user-delete-button"
                  onClick={(e) => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  <Footer/>
  </div>

  );
}

export default UserProfile;
