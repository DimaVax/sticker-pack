import { Component } from "react";
import { Sticker } from "../Sticker/Sticker.jsx";
import { Choise } from "../Choise/Choise.jsx";
import stickers from "../../stickers.json";
import { StyledStickerPack } from "./StyledStickerPack.js";

export class StickerPack extends Component {
  state = {
    selectedSticker: null,
    stickersData: [...stickers],
  };

  showStickerLabel = (label) => {
    this.setState({
      selectedSticker: label,
    });
  };

  deleteSticker = (labelToDelete) => {
    this.setState(prevState => ({
      stickersData: prevState.stickersData.filter(sticker => sticker.label !== labelToDelete),
      selectedSticker: prevState.selectedSticker === labelToDelete ? null : prevState.selectedSticker
    }));
  };

  render() {
    return (
      <>
        <StyledStickerPack>
          {this.state.stickersData.map((sticker) => (
            <Sticker
              key={sticker.label}
              img={sticker.img}
              label={sticker.label}
              onStickerClick={this.showStickerLabel}
              onDeleteClick={this.deleteSticker}
            />
          ))}
        </StyledStickerPack>
        <Choise selectedSticker={this.state.selectedSticker} />
      </>
    );
  }
}