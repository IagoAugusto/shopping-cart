import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Button from "../Button";
import Slider from "../Slider";
import "./Vitrine.css";

export default function Vitrine() {
  const [items, setItem] = useState([]);
  const [selectedItems, setSelectedItems] = useState(initialItems);

  function initialItems() {
    const localItems = localStorage.getItem("cart");
    return localItems ? JSON.parse(localItems) : [];
  }

  function handleAddIfExist(selectedItems, item) {
    return selectedItems.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        return {
          ...item,
          qtd: selectedItem.qtd ? selectedItem.qtd + 1 : 2,
        };
      } else {
        return selectedItem;
      }
    });
  }

  function handleAddToCart(item) {
    if (selectedItems.find(({ id }) => id === item.id)) {
      setSelectedItems((selectedItems) =>
        handleAddIfExist(selectedItems, item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(selectedItems));
  }, [selectedItems]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, []);

  return (
    <div className="vitrine">
      <Slider slidesToShow={4}>
        {items.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.image} className="item__image" />
              <strong>{item.title}</strong>
              <div className="item__rating">
                {Array(parseInt(item.rating.rate))
                  .fill(null)
                  .map(() => (
                    <AiFillStar key={uuidv4()} />
                  ))}
                {Array(5 - parseInt(item.rating.rate))
                  .fill(null)
                  .map(() => (
                    <AiOutlineStar key={uuidv4()} />
                  ))}
              </div>
              <span>por R$ {item.price}</span>
              <span className="item__price-divided">
                ou em 9x de R$ {item.price / 9}
              </span>
              <Button
                className="item__buy"
                onClick={() => handleAddToCart(item)}
              >
                Comprar
              </Button>
            </div>
          );
        })}
      </Slider>
      <div>
        <p>Carrinho</p>
        {selectedItems.map((item) => (
          <p key={item.id}>{JSON.stringify(item)}</p>
        ))}
      </div>
    </div>
  );
}
