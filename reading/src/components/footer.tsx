import Tg from '../assets/telegram.svg'

function Footer() {
  return (
    <>
    <footer>
        <div className="footerContainer">
            <div>
                <div className="footerSocials">
                    <a href="https://t.me/opsonata" title='Наш телеграм-канал' target='_blank'>
                        <img src={Tg} alt="tg" />
                    </a>
                </div>
                <div className="footerLinks">
                    <a href="">Туда</a>
                    <a href="">Сюда</a>
                    <a href="">Опять туда</a>
                </div>
            </div>
            <div className="footerCopyright">
                <p>© 2024, кто-то там</p>
                <p>Все права защищены</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer