import Button from "../Button/Button";
import Watch from "./Watch/Watch";
import style from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { useState, useEffect } from "react";
import IAssignment from "../../types/assignment";

interface Props {
  selected: IAssignment | undefined;
  finalizeAssignment: () => void;
}

function Stopwatch({ selected, finalizeAssignment }: Props) {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function handleClick(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return handleClick(counter - 1);
      }
      finalizeAssignment();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the Stopwatch</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => handleClick(time)}>Start</Button>
    </div>
  );
}

export default Stopwatch;
