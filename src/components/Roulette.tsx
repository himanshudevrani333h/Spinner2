import React, { useState, useEffect, useRef } from "react";
import { getRotationDegrees } from "../utils/utils";
import { RotationContainer } from "./style";
import * as Styles from "./style"
interface Props {
  mustStartSpinning: boolean;
  prizeNumber: number;
  onStopSpinning?: () => any;
}

const STARTED_SPINNING = "started-spinning";

const START_SPINNING_TIME = 800;
const CONTINUE_SPINNING_TIME = 400;
const STOP_SPINNING_TIME = 4000;

export const Wheel: React.FC<Props> = ({
  mustStartSpinning,
  prizeNumber,
  onStopSpinning = () => null
}: Props) => {
  const [startRotationDegrees, setStartRotationDegrees] = useState(0);
  const [finalRotationDegrees, setFinalRotationDegrees] = useState(0);
  const [hasStartedSpinning, setHasStartedSpinning] = useState(false);
  const [hasStoppedSpinning, setHasStoppedSpinning] = useState(false);
  const [isCurrentlySpinning, setIsCurrentlySpinning] = useState(false);
  const mustStopSpinning = useRef<boolean>(false);

  const startSpinning = () => {
    setHasStartedSpinning(true);
    setHasStoppedSpinning(false);
    mustStopSpinning.current = true;
    setTimeout(() => {
      if (mustStopSpinning.current) {
        mustStopSpinning.current = false;
        setHasStartedSpinning(false);
        setHasStoppedSpinning(true);
        onStopSpinning();
      }
    }, START_SPINNING_TIME + CONTINUE_SPINNING_TIME + STOP_SPINNING_TIME - 300);
  };

  useEffect(() => {
    if (mustStartSpinning && !isCurrentlySpinning) {
      setIsCurrentlySpinning(true);
      startSpinning();
      const finalRotationDegreesCalculated = getRotationDegrees(prizeNumber, 8);
      setFinalRotationDegrees(finalRotationDegreesCalculated);
    }
  }, [mustStartSpinning]);

  useEffect(() => {
    if (hasStoppedSpinning) {
      setIsCurrentlySpinning(false);
      setStartRotationDegrees(finalRotationDegrees);
    }
  }, [hasStoppedSpinning]);

  const getRouletteClass = () => {
    if (hasStartedSpinning) {
      return STARTED_SPINNING;
    }
    return "";
  };

  return (
    <>
      <RotationContainer
        className={getRouletteClass()}
        startSpinningTime={START_SPINNING_TIME}
        continueSpinningTime={CONTINUE_SPINNING_TIME}
        stopSpinningTime={STOP_SPINNING_TIME}
        startRotationDegrees={startRotationDegrees}
        finalRotationDegrees={finalRotationDegrees}
      >
        <Styles.WheelImage
          src="https://github.com/weibenfalk/wheel-of-fortune-part2/blob/main/vanilla-js-wheel-of-fortune-part2-FINISHED/wheel.png?raw=true"
          alt="wheel"
        />
      </RotationContainer>
      <Styles.Wheelpointer
        src="https://raw.githubusercontent.com/kush-daga/wheel-of-fortune/a86b082a1d60a0244412bafeb1aef1234d70135f/src/assets/arrow.svg"
        alt="marker"
      />
    </>
  );
};
