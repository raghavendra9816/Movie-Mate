// import React from "react";
// const Goal = () => {
//   const shoot = (data) => {
//     if (!data) return false;
//     alert(`goal by ${data}`);
//   };

//   return (
//     <div>
//       {/* <input placeholder="enter your name" id="name1" />

//       <br /> */}

//       <br />
//       <select
//         id="player"
//         onChange={() => shoot(document.getElementById("player").value)}
//       >
//         <option value="">select a player</option>
//         <option value="Ronaldo">Ronaldo</option>
//         <option value="Sunil Chhetri">Sunil chhetri</option>
//         <option value="Messi">Messi</option>
//       </select>
//       <button onClick={() => shoot(document.getElementById("player").value)}>
//         Goal
//       </button>
//     </div>
//   );
// };

// export default Goal;

//const goal=()=>{}// in line functiondefined function
//()=>{}//ananymous function

export const Goal = ({ player = "" }) => {
  //syntax 1 ternary operator for condition rendering
   return <div>{player ? <GoalBy player={player} /> : <Missed />}</div>;

  //syntax 2 if else
  // if (!player) {
  //   return <Missed />;
  // } else {
  //   return <GoalBy player={player} />;
  // }

  //syntax 3 using logical and or operator
  //usually used when to display alert,errormessage
 //return <div> {player && <Goal By player={player} />}</div>;
};
export const Missed = () => {
  return <>Missed Goal</>;
};
export const GoalBy = ({ player }) => {
  return <>Goal by {player}</>;
};

//create a react comonent with a form that ask username and password
//if username==="yourname ans Pw="your name"
//render welcome message
//else return wrong credential