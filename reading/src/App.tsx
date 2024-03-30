import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Testty from './components/test_form'
import InputForm from './components/input'
// import { v4 } from 'uuid'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  const onSubmit = (query: string) => {
    console.log(`You submitted: ${query}`);
    // Здесь может быть ваш код для обработки отправленного запроса
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Testty />
        <InputForm onSubmit={onSubmit} />
      </div>
      <br />
      <Footer />
    </>
  )
}


// e6599fcb-c7d9-4319-a895-ab5c91a10ef1
// NDQ3MDE5YzItOTBkNS00NjE2LWI3ZWYtNTA0YmRhMGRiMDBmOmU2NTk5ZmNiLWM3ZDktNDMxOS1hODk1LWFiNWM5MWExMGVmMQ==
// GIGACHAT_API_PERS 

export default App
