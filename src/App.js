import "./App.css";
import React from "react";
import DataFetch from "./components/DataFetch";
import ReduceHook from "./components/ReduceHook";
import ReduceHookTwo from "./components/ReduceHookTwo";
import Riddhiman from "./components/Riddhiman";
import Fetch from "./components/Fetch";
import DataFetchOne from "./components/DataFetchOne";
import DataFetchReducer from "./components/DataFetchReducer";
import Style from "./components/Style";
import UseStatePrac from "./components/UseStatePrac";
import HookCounter from "./components/HookCounter";
import HookCounterThree from "./components/HookCounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <DataFetchOne />
      {/* <HookCounter /> */}
      {/*   <HookCounterThree /> */}
      {/* <UseStatePrac /> */}
      {/* <Style /> */}
      {/*  <UserContext.Provider value={"Hello"}>
      <ChannelContext.Provider value={"World"}>
        <ComponentC />
      </ChannelContext.Provider>
    </UserContext.Provider> */}
      {/* <DataFetch /> */}
      {/*  <ReduceHook /> */}
      {/* <ReduceHookTwo /> */}
      {/*  <Riddhiman /> */}
      {/* <Fetch /> */}
      {/* <DataFetchOne /> 
      {/* <DataFetchReducer /> */}
    </div>
  );
}

export default App;
