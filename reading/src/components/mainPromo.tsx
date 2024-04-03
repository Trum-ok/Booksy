import Typewriter from 'typewriter-effect';
import Book1 from '../assets/book.png'
import Book2 from '../assets/book2.png'
import TestButton from './testButton';

function MainPromo() {  
  return (
    <>
        <div className='mainPromo'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hello World!')
                  .pauseFor(2500)
                  .deleteAll()
                  .pauseFor(1000)
                  .start()
              }}
              options={{
                 autoStart: true,
                 loop: true,
               }}
            />
            <h1>Booksy</h1>
            <h1>Легкий подбор книги под Ваше настроение</h1>
            <img src={Book1} alt="left" />
            <img src={Book2} alt="right" />
            <div className="promoContainer">
              <TestButton />
              <h4 className='cancelPromo'>Отменить можно в любой момент в личном кабинете</h4>
            </div>
        </div>
    </>
  )
}

export default MainPromo