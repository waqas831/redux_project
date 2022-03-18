import React from "react";

const Users = ({ name, fname, age }) => {
  return (
    <>
      <div>Users Component</div>
      <h2>{name} {fname} {age}</h2>
    </>
  );
};

export default Users;
