// src/components/Table.js
import React from "react";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Table = ({ data, handleDelete, handleUpdate }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Hobbies</th>
          <th>Actions</th>
          <th>Select</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{entry.name}</td>
            <td>{entry.phoneNumber}</td>
            <td>{entry.email}</td>
            <td>{entry.hobbies}</td>
            <td>
              <button onClick={() => handleUpdate(entry)}>Update</button>
              <button onClick={() => handleDelete(entry._id)}>Delete</button>
            </td>
            <td>
              <Checkbox {...label} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
