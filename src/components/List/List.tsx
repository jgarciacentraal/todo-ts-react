import * as React from "react";

import "./List.css";
import { Input } from "../Input/Input";
type ListProps = {
  items: {
    id: number;
    task: string;
    active: boolean;
  }[];
  title: string;
};
type State = {
  show: boolean;
  id: number;
};
export default function List(props: ListProps) {
  const [data, setData] = React.useState(props.items);
  const [edit, setEdit] = React.useState<State>({
    show: false,
    id: 0
  });
  console.log(edit);
  return (
    <div className="card">
      <h1 className="heading">{props.title}</h1>
      {data.map((t) => (
        <li key={t.id} className="item">
          {t.task}
          <div>
            <button onClick={() => setEdit({ show: true, id: t.id })}>
              edit
            </button>
            <button>delete</button>
          </div>
        </li>
      ))}

      <div className="edit-form">
        {edit?.show ? (
          <div className="container-edit">
            <span>Edit</span>
            <Input />
          </div>
        ) : null}
      </div>
    </div>
  );
}
