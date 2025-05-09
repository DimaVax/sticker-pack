import { Component } from "react";

import { StyledChoise } from "./StyledChoise.js";

export class Choise extends Component {
  render() {
    return (
      <StyledChoise>
        {this.props.selectedSticker}
      </StyledChoise>
    );
  }
}