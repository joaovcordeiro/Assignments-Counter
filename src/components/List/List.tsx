import style from "./List.module.scss";
import Item from "./Item/Item";
import IAssignment from "../../types/assignment";

interface Props {
  assignments: IAssignment[];
  selectAssignment: (selectAssignment: IAssignment) => void;
}

function List({ assignments, selectAssignment }: Props) {
  return (
    <aside className={style.listaTarefa}>
      <h2>Study of the day</h2>
      <ul>
        {assignments.map((assignment) => (
          <Item
            key={assignment.id}
            {...assignment}
            selectAssignment={selectAssignment}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
