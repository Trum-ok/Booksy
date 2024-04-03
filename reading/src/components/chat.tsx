import React, { useState, useEffect } from 'react';
import Message from './message';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaneIcon from '../assets/plane.svg';

import * as dotenv from 'dotenv';

dotenv.config();
const TOKEN = 'eyJjdHkiOiJqd3QiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.Czk3qe-ImwXBffscewPd4DPmv3Cn3u3I3yfabacFDYAjKciCSjGQ42cc96v31o5DNYxakTaZXQSN63HXTuY4oRGN0L-7PyXTmAkQyi7nUTCk-UiekaXU12S81nj46vVJMY5G0cz0dPAIWe3c88P5q8nKDg0tCs7bPOIzUQtKPMg4Ibs9XxM_YTJm8u2lGqTaYxNNohdA0na-Jrxu63jQq9DdU0ApTq3zCIEcBEE0z1WJ0Gp4yZDmYnZqVyT8-kC3j8mCRD8dAI-unhGfa9ACmTLzPYB2NPslCCvS-aURg2ZPwW5YJ0jhldajdk0hlxWBt7aWzb3BEp-393N-xnu6Ng.Af4UNkoCA4Z2iNUnvM7ghA.T6_BJZJE8s6-Fn2TbLx3qYNlmvXx1Llfdz-qiBx36gYDGh9n6fpomuXx6cU6PVG8_vje9WIzXBj98Z_inorJFh8usquB1LqdY7CBoO1_PQisYnHURjfrVipDbzQhDklvp5oWe7kYGc572NMsULoi0CIlUhlYrhSjGkoqeqzG8clOLIjJtKgHPk2N4xSmzG68Y0MbXwksSVUEbpx_4dP6_fKbjF6aWcrvITXrC1of4arGQpyXUW-kA0UeHzFKNvMRKL7H6hBLLoyjJVVGfRBy_RPb88MFv37QS435WEqnPawBAIU0JrRXTwozRcHcsCWPM5nsdQoaUuyPcRQV7pmg3j_qYRr0h2LzjxG7dVET7mDLYs-Dhp3mM97RlcYitgAiWxz2kSjUTVtGHBBe1Aq5baZgllTVEL4wCXEbTwUDOlUpp3TtWlGx2m2QdBBaQN_E3m-b7a95g28tC0wChlNA129TPTtazvS5MiLKfpoKinSzRGgLPUOjcO7kk41tJfJ6cXgZungZG6M_Lm56p2aHVrsePRXZj-MlR21bOv3O2KjRyKAzxfnDvT8HRNuftpvtoIP1d6C6N6iNB8JTAHSfczwBbXE9Q7k9GRodDHXN71UXHqEn41gJZOWyEeTTsVjB7K5f5Zw4vfhthR5q3iHGOMnBWfzSel1J7KYNsx1gUJoXAy3KjVqvKl15tZR6avy9olHtKiu9QBhUrdQQXpuR6WO_sCimtyEuesrXR1uEuI0.v-A-H8lSnQ-c3gu_X_FfisZ5gl1g82jscxe31U9lI1o';


function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        setTypingText(typingText + '|');
      } else {
        setTypingText('');
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isTyping, typingText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      console.log('Bearer ' + TOKEN);
      setMessages([...messages, {text: input, user: 'You' }]);
      setInput('');

      let data = JSON.stringify({
        "model": "GigaChat",
        "messages": [
          {
            "role": "system",
            "content": "Отвечай как научный сотрудник"
          },
          {
            "role": "user",
            "content": "Напиши 5 вариантов названий для космической станции"
          }
        ],
        "temperature": 1,
        "top_p": 0.1,
        "n": 1,
        "stream": false,
        "max_tokens": 512,
        "repetition_penalty": 1,
        "update_interval": 0
      });

      fetch('https://cors-anywhere.herokuapp.com/https://gigachat.devices.sberbank.ru/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36',
          'Content-Type': 'application/json', 
          'Accept': '*/*',
          "X-Requested-With": "XMLHttpRequest",
          'Authorization': 'Bearer ' + TOKEN,
        },
        body: data,
      })
      .then(response => response.json())
      .then(data => {
        setApiResponse(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setIsTyping(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input) {
      handleSubmit(e);
    }
  };

  return (
    <>
    <div className="chatConatainer">
    <div className="chat">
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} user={message.user} />
        ))}
      </div>
      <div className="typing">
        <span>GigaChat is typing...</span>
        <span>{typingText}</span>
      </div>
      <form onSubmit={handleSubmit} className='inputFormContainer'>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Опишите книгу, которую Вы хотите"
          enterKeyHint='send'
          className='inputForm'
        />
        <button type="submit" title='Отправить'>
            <img src={PlaneIcon} alt="Submit Icon" />
        </button>
      </form>
    </div>
    {apiResponse && <div>{apiResponse.text}</div>}
    </div>
    <ToastContainer position='bottom-right' />
    </>
  );
}

export default Chat;