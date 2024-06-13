import React, { useState } from "react";
import Table from "./Components/Table";

const List = ({ data, car }) => {
  //hooks can be called or defined

  //premitive data types string boolean number
  const [color, setColor] = useState("black");
  const [roll, setRoll] = useState(1);
  const [alive, setAlive] = useState(false);
  //complex data type array object
  const [person, setPerson] = useState({
    name: "Acyut",
    gender: "male",
    age: 24,
    isAlive: true,
  });

  return (
    <>
      <br />
      {car?.name}
      <Table headder={["id", "name", "model"]} data={data} />
      <br />
      <br />
      {color}
      <button onClick={() => setColor("red")}>change color</button>
      <br />
      <br />
      {roll}
      <button onClick={() => setRoll("5")}>change Roll</button>
      <br />
      <br />
      {alive}
      <button onClick={() => setAlive("true")}>Check Alive</button>
      <br />
      <br />
      {person?.name}
      <br />
      <br />
      <input
        placeholder="enter to change name"
        onChange={(e) =>
          setPerson((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      ></input>
      <button
        onClick={() =>
          setPerson((prev) => {
            return { ...prev, name: "Achyut" };
          })
        }
      >
        change
      </button>
    </>
  );
};
export default List;
