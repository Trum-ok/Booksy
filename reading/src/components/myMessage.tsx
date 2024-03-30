import React, { useState } from 'react';

interface IMessageInputProps {
  onMessageSubmit: (message: string) => void;
}

const MessageInput: React.FC<IMessageInputProps> = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');

  // Обработчик изменения значения поля ввода
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  // Функция для отправки сообщения
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onMessageSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your message here..." value={message} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;