import React, { Component } from "react";
import { Button, Input } from "./components";
import Imperial from "./ImperialProvider";

class App extends Component {
  render() {
    return (
      <div>
        <Imperial
          flat={true}
          // roundness={20}
          // colors={{
          //   primary: "pink",
          //   secondary: "blue",
          //   tertiary: "purple"
          // }}
        />
        
        <Button>Click</Button>
        <Button disabled>Click</Button>
        <Input.Text placeholder="Hello" />
        <Input.Radio placeholder="Hello" text="Yo" />
        <Input.Checkbox placeholder="Hello" />
        <Input.SegmentedControl values={["A", "B", "C", "D"]} />
      </div>
    );
  }
}

export default App;
