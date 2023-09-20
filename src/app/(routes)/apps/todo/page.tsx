'use client';

import { useState, useEffect } from 'react';

type TodoItem = {
  title: string;
  completed: boolean;
  id: number;
};

type TodoItems = {
  [item: number]: TodoItem;
};

const initialItems: TodoItems = {
  1: { title: 'create', id: 1, completed: false },
  2: { title: 'todo', id: 2, completed: false },
  3: { title: 'app', id: 3, completed: false },
};

export default function TodoPage() {
  const [items, setItems] = useState<TodoItems>(initialItems);
  const [numCompleted, setNumCompleted] = useState<number>(0);

  const handleCheckClick = (item: TodoItem) => {
    const nowCompleted = !item.completed;
    setItems({ ...items, [item.id]: { ...item, completed: nowCompleted } });
    setNumCompleted((prev) => (nowCompleted ? prev + 1 : prev - 1));
  };

  return (
    <div>
      <ul>
        {Object.values(items).map((item) => (
          <li key={`checkbox-${item.id}`} className="flex flex-row">
            <input
              type="checkbox"
              id={`checkbox-${item.id}`}
              className="mr-2"
              onClick={() => handleCheckClick(item)}
            />
            <label htmlFor={`checkbox-${item.id}`}>{item.title}</label>
          </li>
        ))}
      </ul>

      <p>Completed Items:</p>
      <p>{numCompleted}</p>
    </div>
  );
}
