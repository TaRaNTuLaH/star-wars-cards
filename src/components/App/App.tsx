import React from "react";
import styled from "@emotion/styled";

import { GameBoard } from "../GameBoard/GameBoard";

const AppContainer = styled.div({
  width: "100%",
  height: "100%",
});

function App() {
  return (
    <AppContainer>
      <GameBoard />
    </AppContainer>
  );
}
export default App;
