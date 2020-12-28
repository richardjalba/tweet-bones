import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput('');
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols='50'
        rows='5'
      ></textarea>
      <button>Submit</button>
      <h1 onClick={() => setTextInput('')}>{textInput}</h1>
    </form>
  );
};

export default CreateTweet;
