import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import useInterval from "./util/use-interval.hook";

import {
  ButtonBlue,
  ButtonOrange,
  ButtonGray
} from "./components/button.component";
import Timer from "./components/timer.component";

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  flex: 1;
`;

function App() {
  const defaultSeconds = 25 * 60;

  const [times, setTimes] = useState(0);
  const [seconds, setSeconds] = useState(defaultSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(() => {
    if (isRunning) {
      setSeconds(seconds - 1);
    }
  }, 1000);

  const onStartTimer = () => {
    setIsRunning(true);
  };

  const onStopTimer = () => {
    setIsRunning(false);
  };

  const onResetTimer = () => {
    setIsRunning(false);
    setSeconds(defaultSeconds);
  };

  return (
    <div className='App'>
      <MainContainer>
        <Row>
          <div>Pomodoro(s): {times}</div>
          <ButtonOrange onClick={onResetTimer}>Reset</ButtonOrange>
        </Row>
        <Row>
          <Timer>{seconds}</Timer>
        </Row>
        <Row>
          <ButtonBlue onClick={onStartTimer}>Start</ButtonBlue>
          <ButtonGray onClick={onStopTimer}>Stop</ButtonGray>
        </Row>
      </MainContainer>
    </div>
  );
}

export default App;
