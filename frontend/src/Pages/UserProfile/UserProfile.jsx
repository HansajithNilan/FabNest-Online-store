import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);


  const handleDelete = (id)=>{
    axios.delete('http://localhost:5000/deleteUser/'+id)
    .then(res => {console.log(res)
      window.location.reload()})
    .catch(err=>console.log(err))

  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name} </td>
                <td>{user.email} </td>
                <td>
                  <a href={`/update/${user._id}`}><button>Update</button> </a>
                  <button onClick={(e)=> handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserProfile;
