import React from "react";
import A from "./components/atoms/A";
import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";

const App = () => {
  return (
    <div className="App">
      <A href="!#">
        Hello World <span>Mo</span>
      </A>
      <Input name="username" type="text" placeholder="Username ..."></Input>
      <Button stype="yellow">Click me</Button>
    </div>
  );
};

export default App;
