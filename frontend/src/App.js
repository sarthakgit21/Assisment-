// src/App.js
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
// Import Axios
import axios from "axios";

// Define the URL you want to make a GET request to
const url = "http://localhost:8000/";

// Make a GET request using Axios
axios
  .get(url)
  .then((response) => {
    // Handle the response data
    console.log("Response Data:", response.data);
  })
  .catch((error) => {
    // Handle any errors that occur during the request
    console.error("Error:", error);
  });
// async function fetchData() {
//   try {
//     const response = await axios.get(url);
//     // console.log('Data:', response.data);
//     setEntries(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
function App() {
  const [entries, setEntries] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get(url);
      // console.log('Data:', response.data);
      setEntries(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    // Fetch data from your API here

    fetchData();
  }, []);

  const addEntry = async (newEntry) => {
    // Send POST request to your API to add new entry
    // Then update state with new entry
    try {
      await axios.post(url, newEntry);
      setEntries([...entries, newEntry]);
      fetchData();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const deleteEntry = async (idvalue) => {
    // Send DELETE request to your API to delete entry
    // Then update state by filtering out the deleted entry
    console.log(idvalue);
    try {
      const res = await axios.delete(url, { data: { id: idvalue } });
      if (res.data.success) {
        fetchData();
        setEntries(entries.filter((entry) => entry.id !== idvalue));
        alert(res.data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateEntry = (updatedEntry) => {
    // Send PUT request to your API to update entry
    // Then update state with updated entry
    const updatedEntries = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        fetchData();
        return updatedEntry;
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <Form addEntry={addEntry} />
      <Table
        data={entries}
        handleDelete={deleteEntry}
        handleUpdate={updateEntry}
      />
    </div>
  );
}

export default App;
