import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import reactLogo from './assets/react.svg'
import './App.css'
import Testty from './components/test_form'
import InputForm from './components/input'
// import { v4 } from 'uuid'
import Footer from './components/footer'
import MainPromo from './components/mainPromo'
import NavBar from './components/navBar';

function App() {
  const [count, setCount] = useState(0)

  const onSubmit = (query: string) => {
    if (query === '') {
      toast.error('Введите данные')
    } else {
      console.log(`Вы отправили: ${query}`);
      // запрос к api
    }
    // Здесь может быть ваш код для обработки отправленного запроса
  };

  return (
    <>
      <NavBar />
      <MainPromo />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Testty />
        <InputForm onSubmit={onSubmit} />
      </div>
      <Footer />
      <ToastContainer position='bottom-right' />
    </>
  )
}


export default App
