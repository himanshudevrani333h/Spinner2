
import React, { useState } from "react";
import { Wheel } from "./components/Roulette";
import { getRandomInt } from "./utils/utils";
import * as Styles from "./App_style"


export default function App() {
  const [couponNum, setCouponNum] = useState(1);
  const [mustSpin, setMustSpin] = useState(false);
  const [open, setOpen] = useState(false);
  const [result,setResult] = useState<any>('');
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mockData:any = {
    1: "$1",
    2: "$2k",
    3: "$32",
    4: "$500k",
    5: "$6m",
    6: "$7b",
    7: "$0.8",
    8:"$4"
  };

  const onClick = () => {
    const newCouponNum = getRandomInt(1, 9);
    setCouponNum(newCouponNum);
    setResult("")
    console.log(newCouponNum);
    console.log(couponNum);
    setMustSpin(true);
  };

  return (
    <Styles.App>
      <span className="h1">Spinning</span>
      <span className="h2">Wheel</span>
      <Styles.WheelContainer>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={couponNum}
          onStopSpinning={() => {
            setMustSpin(false);
            setResult(couponNum);
            handleOpen();
          }}
        />
      </Styles.WheelContainer>

      <Styles.SpinButton
        src="https://github.com/weibenfalk/wheel-of-fortune-part2/blob/main/vanilla-js-wheel-of-fortune-part2-FINISHED/button.png?raw=true"
        alt="button"
        onClick={() => onClick()}
      />
       <Styles.SpanTag>You Won:   {mockData[result]}</Styles.SpanTag>
    </Styles.App>
  );
}
