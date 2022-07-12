import { useState } from "react";
import Card from "./Card";
import shoesData from "./database";

function App() {
  const [products, setProducts] = useState(shoesData);
  const [searchText, setSearchText] = useState("");

  const filtered = products.filter(item => {
    return item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  })

  const cards = filtered.map((item) => {
    return (
      <Card
        key={item.key}
        name={item.name}
        price={item.price}
        img={item.img}
        inCart={item.inCart}
        showDetails={item.showDetails}
        addToCart={() => addToCart(item.id)}
        toShowDetails={() => toShowDetails(item.id)}
        removeFromCart={() => removeFromCart(item.id)}
        hideDetails={() => hideDetails(item.id)}
      />
    );
  })

  const addToCart = (id) => {
    setProducts(
      products.map((item) => {
        if (item.id === id) {
          item.inCart = true;
          return item;
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setProducts(
      products.map((item) => {
        if (item.id === id) {
          item.inCart = false;
          return item;
        }
        return item;
      })
    );
  };

  const toShowDetails = (id) => {
    setProducts(
      products.map((item) => {
        if (item.id === id) {
          item.showDetails = true;
          return item;
        }
        return item;
      })
    );
  };

  const hideDetails = (id) => {
    setProducts(
      products.map((item) => {
        if (item.id === id) {
          item.showDetails = false;
          return item;
        }
        return item;
      })
    );
  };

  const inputChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="app">
      <form className="live-search">
        <input 
          type="text" 
          value={searchText} 
          onChange={inputChangeHandler} />
        <input 
          type="submit" 
          value="Поиск" />
      </form>
      <div className="cards">
        { cards }
      </div>
    </div>
  );
}

export default App;
