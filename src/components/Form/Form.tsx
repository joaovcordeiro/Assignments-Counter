import Button from "../Button/Button";
import style from "./Form.module.scss";
import React, { useState } from "react";
import IAssignment from "../../types/assignment";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setAssignments: React.Dispatch<React.SetStateAction<IAssignment[]>>;
}

type Assignment = {
  assignment: string;
  time: string;
};

function Form({ setAssignments }: Props) {
  const [assignmentInput, setAssignmentInput] = useState("");
  const [time, setTime] = useState("00:00:00");

  const assignment: Assignment = {
    assignment: assignmentInput,
    time: time,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAssignments((assignments) => [
      ...assignments,
      { ...assignment, selected: false, completed: false, id: uuidv4() },
    ]);
    setAssignmentInput("");
    setTime("00:00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={(e) => handleSubmit(e)}>
      <div className={style.inputContainer}>
        <label htmlFor="assignment">Assignment</label>
        <input
          type="text"
          name="assignment"
          id="assignment"
          placeholder="What do you want to study"
          required
          value={assignmentInput}
          onChange={(event) => setAssignmentInput(event.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
          value={time}
          onChange={(event) => {
            setTime(event.target.value);
          }}
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
