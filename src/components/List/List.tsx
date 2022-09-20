import * as React from "react";
type ListProps = {
  items: {
    id: number;
    task: string;
    active: boolean;
  }[];
  title: string;
};
export default function List(props: ListProps) {
  console.log(props);
  return (
    <div className="card">
      <h1 className="heading">{props.title}</h1>

      {props.items.map((t) => (
        <li key={t.id}>
          {t.task}
          <button>edit</button>
          <button>delete</button>
        </li>
      ))}
    </div>
  );
}
