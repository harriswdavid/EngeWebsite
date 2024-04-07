interface TrashProps {
  trashType: string[];
  heading: string;
}

export default function TrashList({ trashType, heading }: TrashProps) {
  return (
    <div className="lists">
      <h1>{heading}</h1>
      <ul className="trash-list">
        {trashType.map((item) => (
          <li className="list" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
