import React from "react";

const login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("un").value;
    const password = document.getElementById("pw").value;
    if (username === password) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="username" id="un" />
        <br />
        <br />
        <input placeholder="Password" id="pw" />
        <br />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default login;
