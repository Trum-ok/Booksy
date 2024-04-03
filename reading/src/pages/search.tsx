import Testty from '../components/test_form'
import InputForm from '../components/input'
import { ToastContainer, toast } from 'react-toastify';
import Chat from '../components/chat';

function Search() {

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
        <Chat />
        {/* <div className="card">
            <Testty />
            <InputForm onSubmit={onSubmit} />
        </div> */}
        <ToastContainer position='bottom-right' />
        </>
    )
}

export default Search