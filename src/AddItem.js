import React from 'react'
import { FaPlusSquare } from "react-icons/fa";

const AddItem = ({newItem, setNewItem, handleAdd}) => {
  return (
    <div>
        <input
            type="text"
            placeholder="Adicionar novo item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <FaPlusSquare onClick={handleAdd} role="button" tabIndex="0" size={25} />
    </div>
  )
}

export default AddItem