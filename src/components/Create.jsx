import React, { useState } from "react";

const Create = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    age: "",
  });

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const handleSubmit = () => {};

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "92vh" }}
    >
      <div
        className="p-4"
        style={{
          width: "20rem",
          borderRadius: "1rem",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          backgroundColor: "rgba(194, 92, 92, 0.9)",
        }}
      >
        <form className=" mx-auto mt-5">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              required
              onChange={getUserData}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              onChange={getUserData}
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAge" className="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              required
              onChange={getUserData}
              className="form-control"
              id="exampleInputAge"
            />
          </div>

          <div className="mb-2 d-flex gap-4 justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                onChange={getUserData}
                id="flexRadioDefault1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                onChange={getUserData}
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
