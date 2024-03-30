import React from 'react';
import PlaneIcon from '../assets/plane.svg';
// import './InputForm.css'; // Импорт стилей для компонента

interface InputFormProps {
  onSubmit: (query: string) => void; // Пропс для обработки события отправки формы
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [query, setQuery] = React.useState(''); // Состояние для хранения введенного текста

  // Обработчик изменения значения поля ввода
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Функция для отправки запроса
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
    setQuery(''); // Очистка поля ввода после отправки
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" title='Ввод запроса' placeholder="Опишите книгу, которую Вы хотите" value={query} onChange={handleChange} />
        <button type="submit" title='Отправить'>
            <img src={PlaneIcon} alt="Submit Icon" />
        </button>
      </div>
    </form>
  );
};

export default InputForm;