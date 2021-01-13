import './styles.css';
import {ReactComponent as Instagram} from './instagram.svg';
import {ReactComponent as Linkedin} from './linkedin.svg';

function Footer(){
    return(
        <footer className="main-footer">
            <a href="https://github.com/CezarGR" target="_new" className="git">
              My GitHub  
            </a>
            <div className="footer-icons">
                <a href="https://www.instagram.com/cesar_lourenzo/" target="_new">
                    <Instagram/>
                </a>
                <a href="https://www.linkedin.com/in/cesarrodrigues-/" target="_new">
                    <Linkedin/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;