import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");

  const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleAdd = () => {
      if (!newItem.trim()) return;

      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const listItems = [...items, { id, checked: false, item: newItem }];
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
      setNewItem("");
  };
  
  return (
    <div className="App">
      <Header title='Grocery List'/>
      <Content
        items ={items}
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        handleAdd = {handleAdd}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
