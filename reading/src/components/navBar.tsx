import BookMate from '../assets/bookmate.svg'
import Search from '../assets/search.svg'


function NavBar() {
  return (
    <>
      <header>
        <div>
          <a href=''><div className="logoContainer"><img src={BookMate} alt="logo" /></div></a>
        </div>
        <div className="navLinks">
          <a href="/">Главная</a>
          <a href="/about">Мои книги</a>
          <a href="/search" title='Поиск'><img src={Search} alt="поиск" /></a>
        </div>
        <div className="controls">
          <button>
            <span>text</span>
          </button>
          <div className="avatarContainer">
            <button>
              <img src="" alt="avatar" />
            </button>
          </div>
        </div>
      </header>
    </>
    
  )
}

export default NavBar