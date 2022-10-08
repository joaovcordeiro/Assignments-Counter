import Form from "../components/Form/Form";
import List from "../components/List/List";
import style from "./App.module.scss";
import Stopwatch from "../components/Stopwatch/Stopwatch";
import { useState } from "react";
import IAssignment from "../types/assignment";

function App() {
  const [assignments, setAssignments] = useState<IAssignment[]>([]);
  const [selected, setSelected] = useState<IAssignment>();

  function selectAssignment(assignment: IAssignment) {
    setSelected(assignment);
    setAssignments((assignmentArray) =>
      assignmentArray.map((assignmentItem) => ({
        ...assignmentItem,
        selected: assignmentItem.id === assignment.id ? true : false,
      }))
    );
  }

  function finalizeAssignment() {
    if (selected) {
      setSelected(undefined);
      setAssignments((assignmentArray) => {
        return assignmentArray.map((assigment) => {
          if (assigment.id === selected.id) {
            return {
              ...assigment,
              selected: false,
              completed: true,
            };
          }
          return assigment;
        });
      });
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setAssignments={setAssignments} />
      <List assignments={assignments} selectAssignment={selectAssignment} />
      <Stopwatch selected={selected} finalizeAssignment={finalizeAssignment} />
    </div>
  );
}

export default App;
