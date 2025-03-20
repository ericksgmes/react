import ItemList from "./ItemList";
import AddItem from "./AddItem";
const Content = ({
    items,
    newItem, setNewItem, 
    handleAdd, handleCheck, handleDelete
}) => {
    return (
        <main>
            <AddItem 
                newItem={newItem}
                setNewItem={setNewItem}
                handleAdd={handleAdd}
            />
            <ItemList
                items = {items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        </main>
    )
}

export default Content