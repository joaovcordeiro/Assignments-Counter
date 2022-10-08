import style from "./Item.module.scss";
import IAssignment from "../../../types/assignment";

interface Props extends IAssignment {
  selectAssignment: (selectedAssignment: IAssignment) => void;
}

function Item({
  assignment,
  time,
  selected,
  completed,
  id,
  selectAssignment,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        completed ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completed &&
        selectAssignment({ assignment, time, selected, completed, id })
      }
    >
      <h3>{assignment}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}

export default Item;
