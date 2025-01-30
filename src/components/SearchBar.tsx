import { useState } from "react";

export function SearchBar({ onAdd }: { onAdd: (description: string) => void }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="input input-bordered flex-grow"
        placeholder="Ajouter une tâche"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary ml-2" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}
