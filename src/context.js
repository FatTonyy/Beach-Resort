import React, { Component } from "react";

const RoomContext = React.createContext();
//<RoomContext.Provider value={'Hello'}

class RoomProvider extends Component {
  state = {
    greeting: "hello",
    name: "xavier"
  };
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };