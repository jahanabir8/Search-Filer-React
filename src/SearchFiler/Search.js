import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container">
      <h2 className="text-center mb-4">Contract Keeper</h2>
      <form>
        <div className="input-group mb-2">
          <input
            onChange={handleSearch}
            value={search}
            className="form-control"
            type="text"
            placeholder="Search Contract"
          />
        </div>
      </form>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search);
            })
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone_number}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
