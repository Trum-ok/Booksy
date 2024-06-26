import { useState, useEffect } from 'react';
import BookMate from '../assets/bookmate.svg'
import Ylw from '../assets/ylw.jpg'
import SearchIcon from '../assets/icons/searchIcon';


function NavBar() {

  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const makeActive = (path: string) => {
    return currentPage === path ? 'active' : '';
  };

  return (
    <>
      <header>
        <div>
          <a href=''><div className="logoContainer"><img src={BookMate} alt="logo" /></div></a>
        </div>
        <div className="navLinks">
        <div className="navLinksContainer">
            <a href="/" className={`navLink ${makeActive('/')}`}>Главная</a>
            <a href="/about" className={`navLink ${makeActive('/about')}`}>Мои книги</a>
            <a href="/search" title='Поиск' className={`navLink ${makeActive('/search')}`}>
              <SearchIcon width={22} height={22} fill='black' classn='searchIcon' />
            </a>
          </div>
        </div>
        <div className="controls">
          <button className='promoButton'>
            Оформить подписку
          </button>
          <div className="avatarContainer">
            <button className='avatarButton'>
              <div className="avatar">
                <img src={Ylw} alt="avatar" />
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
    
  )
}

export default NavBar