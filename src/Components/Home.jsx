import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/questions");
      setQuestions(data[0]);
    } catch (error) {}
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewQuestion({ ...newQuestion, [id]: value });
  };

  const handleSubmit = async () => {
    const userName = localStorage.getItem("name");
    const { data } = await axios.get(
      `http://localhost:3001/users/?username=${userName}`
    );
    const _userID = data[0]._id;
    console.log(_userID);

    console.log(newQuestion);

    await axios.post(`http://localhost:3001/questions`, {
      description: newQuestion,
      userID: _userID,
    });
  };

  return (
    <div>
      <div>
        <h2>Ask a question</h2>
        <input
          type="text"
          onChange={handleChange}
          id="newQuestion"
          // value={newQuestion}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <h2>Questions</h2>
        {questions.map((elem) => (
          <Question
            key={elem._id}
            // user={elem.userID.name}
            description={elem.description}
            comments={elem.comments}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default Home;
