import React from 'react';
import PlaneIcon from '../assets/plane.svg';
// import './InputForm.css'; // Импорт стилей для компонента

interface InputFormProps {
  onSubmit: (query: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [query, setQuery] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" title='Ввод запроса' enterKeyHint='send' placeholder="Опишите книгу, которую Вы хотите" value={query} onChange={handleChange} />
        <button type="submit" title='Отправить'>
            <img src={PlaneIcon} alt="Submit Icon" />
        </button>
      </div>
    </form>
  );
};

export default InputForm;