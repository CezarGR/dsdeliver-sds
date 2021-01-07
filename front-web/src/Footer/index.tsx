import './styles.css';
import {ReactComponent as Instagram} from './instagram.svg';
import {ReactComponent as Linkedin} from './linkedin.svg';

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/cesarrodrigues-/" target="_new">
                    <Instagram/>
                </a>
                <a href="https://www.instagram.com/Cesar_Lourenço/" target="_new">
                    <Linkedin/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;