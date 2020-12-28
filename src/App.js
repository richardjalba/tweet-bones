import React, { useState } from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  const [name, setName] = useState('Richard Alba');
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);
  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} />
    </div>
  );
}

export default App;
