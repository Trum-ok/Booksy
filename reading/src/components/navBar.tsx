import BookMate from '../assets/bookmate.svg'
import Search from '../assets/search.svg'
import Ylw from '../assets/ylw.jpg'


function NavBar() {
  return (
    <>
      <header>
        <div>
          <a href=''><div className="logoContainer"><img src={BookMate} alt="logo" /></div></a>
        </div>
        <div className="navLinks">
          <div className="navLinksContainer">
            <a href="/">Главная</a>
            <a href="/about">Мои книги</a>
            <a href="/search" title='Поиск'>
              <img src={Search} alt="поиск" />
            </a>
          </div>
        </div>
        <div className="controls">
          <button>
            <span>text</span>
          </button>
          <div className="avatarContainer">
            <button>
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