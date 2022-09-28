import "./Header.css"
import myImage from '../images/logo.svg';

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__intro">
            <a className="image" href="#logo">
              <img src={myImage} alt="site logo"></img>
            </a>

            <nav className="header__navbar">
              <ul className="header__list">
                <li className="header__item">
                  <a className="header__link" href="#asd">
                    Home
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" href="#sad">
                    About
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" href="#asd">
                    Contact
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" href="#asd">
                    Blog
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" href="#asdas">
                    Careers
                  </a>
                </li>
              </ul>
            </nav>

            <button className="menu">
              <img className={"menu_img"} src="./img/mwnu.png" alt="menu"></img>
            </button>

            <button className="header__invite" type="button">
              Request Invite
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
