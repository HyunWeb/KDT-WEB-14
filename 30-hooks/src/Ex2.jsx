import React, { useCallback, useState } from "react";

export default function Ex2() {
  const [Items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = useCallback((item) => {
    setEditing(item);
    setEditText(item);
  }, []);

  const handleDelete = useCallback(
    (itemToDelete) => {
      setItems(Items.filter((item) => item !== itemToDelete));
    },
    [Items]
  );

  const handleSave = useCallback(
    (itemToSave) => {
      setItems(Items.map((item) => (item === editing ? itemToSave : item)));
      setEditing(null);
    },
    [Items, editing]
  );

  return (
    <ul>
      {Items.map((item) => (
        <li key={item}>
          {editing === item ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            item
          )}
          {editing === item ? (
            <button onClick={handleSave(editText)}>Save</button>
          ) : (
            <>
              <button onClick={handleEdit(item)}>Edit</button>
              <button onClick={handleDelete(item)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
