import React, { useEffect, useState } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";

import axios from "axios";

function admindashboard() {
  const { id} = useParams();

  const [users, setUsres] = useState([]);
  const [name, setName] = useState("");
  

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((user) => {
       
        setName(user.data.name);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h1>Admin Dashboard {name}</h1>
    </div>
  );
}

export default admindashboard;
