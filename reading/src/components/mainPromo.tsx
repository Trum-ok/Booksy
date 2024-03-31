import React from 'react'
import Book1 from '../assets/book.png'
import Book2 from '../assets/book2.png'

function MainPromo() {
  return (
    <>
        <div className='mainPromo'>
            <h1>Booksy</h1>
            <h1>Легкий подбор книги под Ваше настроение</h1>
            <img src={Book1} alt="left" />
            <img src={Book2} alt="right" />
            <button className='promo-button'>
                <span>Текст</span>
            </button>
            <p>Отменить можно в любой момент в личном кабинете</p>
        </div>
    </>
  )
}

export default MainPromo