import { Joke } from "../../components/Joke/Joke";
import "./style.css";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch("http://localhost:4000/api/jokes");
      const json = await response.json();
      setJokes(json.data);
    };
    fetchJokes();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => {
        return (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        );
      })}
    </div>
  );
};
