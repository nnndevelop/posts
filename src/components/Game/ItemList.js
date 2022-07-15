import React, { useEffect, useState, useCallback } from "react";
import "../Game/ItemList.css";
import Item from "./Item";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import item from "./Item";

const ItemList = () => {
  const [joke, setJoke] = useState(null);

  async function getEmoji() {
    let newEmoji = [];
    for (let i = 1; i < 15; i++) {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      newEmoji.push({ id: i, text: response.data.joke, votes: 0 });
    }
    setJoke(newEmoji);
  }
  useEffect(() => {
    getEmoji();
  }, []);

  const handleVote = useCallback((id, offset) => {
    const filterEmoji = joke.filter(item => item.id !== id)
    const emoj = joke.find(item => item.id === id)
    emoj.votes += offset
    filterEmoji.push(emoj)
    filterEmoji.sort((a,b) => b.votes - a.votes)
    setJoke((filterEmoji))
  }, [joke, setJoke]);


  if (joke) {
    return (
      <div className="itemList">
        <div className="itemSideBar">
          <h1 className="itemListTitle">
            Jokes
            <br />
            Bro
          </h1>
          <img
            className="imgSideBar"
            alt="imgSideBar"
            src="https://images.unsplash.com/photo-1590698933947-a202b069a861?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735"
          />
        </div>
        <div className="itemListSticker">
          {joke.map((item) => (
            <Item
            votes={item.votes}
              key={item.id}
              text={item.text}
              upVote={() => handleVote(item.id, 1)}
              downVote={() => handleVote(item.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }else {
    <Loader />
  }
};

export default ItemList;
