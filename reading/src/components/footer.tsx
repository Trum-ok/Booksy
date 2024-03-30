import Tg from '../assets/telegram.svg'

function Footer() {
  return (
    <>
    <footer>
        <div className="socials">
            <a href="https://t.me/opsonata" title='Наш телеграм-канал'>
                <img src={Tg} alt="tg" />
            </a>
        </div>
        <div className="links">
            <a href="">Туда</a>
            <a href="">Сюда</a>
            <a href="">Опять туда</a>
        </div>
        <div className="copyright">
            <p>© 2024, кто-то там</p>
            <p>Все права защищены</p>
        </div>
    </footer>
    </>
  )
}

export default Footer