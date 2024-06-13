import React from "react";
import { Test } from "./Test";
import { GoalBy } from "./Goal";
import Login from "./Login";
import List from "./List";
const App = () => {
  const data = [
    { name: "BMW", model: 2012 },
    { name: "Tesla", model: 2010 },
  ];
  const detail = { name: "Tesla", model: 2010, purchaseDate: "2021-01-01" };

  return (
    <div>
      <Test />
      {/* <Goal/> */}
      <GoalBy player={"Messi"} />
      <List data={data} car={detail} />
      <Login />
    </div>
  );
};

export default App;

//syntax 2
//import Test from ./Test

/*  
stateless
we do not need to store it  and dont needed to do any operation
 in js state less function is pure function 
 pure function = exact same result nikalcha eg=2+2=4


statefull
locaal state ma rakhera teslai manage garne
multiple thau ma data use huncha testo state lai state full 
every API call is statefull because of side effect



if some how i want to take out the  statefull function  and side efffect 
logic from functional component, then stateless=>banaune ne nai hoook

hooks are a simple function that does statefull into  stateless 


functional programming ko lagi hooks
types of hooks

basic hooks
useState =>data track garnu xa vana,
useEffect=>api call garna ko lagi,
UseContext
useRef

Advance hooks
useMemo
useCallback
*/
