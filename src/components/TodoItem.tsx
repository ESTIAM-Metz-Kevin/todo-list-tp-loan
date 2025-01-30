type TodoItem = {
  id: number;
  description: string;
  done: boolean;
};

export function TodoItem({
  item,
  onToggle,
  onDelete,
}: {
  item: TodoItem;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <div
      className={`w-full m-2 p-3 rounded-box flex items-center ${
        item.done ? "bg-indigo-900" : "bg-indigo-700"
      }`}
    >
      <input
        type="checkbox"
        className="checkbox mr-3"
        checked={item.done}
        onChange={() => onToggle(item.id)}
      />
      <span className={`flex-grow ${item.done ? "line-through" : ""}`}>
        {item.description}
      </span>
      <button
        className="btn btn-error btn-outline btn-xs"
        onClick={() => onDelete(item.id)}
      >
        X
      </button>
    </div>
  );
}
