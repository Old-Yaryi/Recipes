import { NavLink, Outlet, Link } from "react-router-dom"

// import logo from '../../img/logo.svg'

import './MainLayout.scss'
import HeaderLogin from "../../Components/HeaderLogin/HeaderLogin"

const MainLayout = () => {
  return (
    <>
      <header className="header">
        <Link to='/' className="header__logo" >
          <span className="material-symbols-outlined">
            experiment
          </span>
          <div className="header__logo-text">Recipe_Cosmetic</div>
        </Link>
        <nav className="header__menu">

          <NavLink className={'header__menu-link'} to='/'>
            <span className="material-symbols-outlined">home</span>
            <div className="header__menu-text">главная</div>
          </NavLink>

          <NavLink className={'header__menu-link'} to='/recipe'>
            <span className="material-symbols-outlined">browse</span>
            <div className="header__menu-text">рецепты</div>
          </NavLink>
          <NavLink className={'header__menu-link'} to='/ingridients'>
            <span className="material-symbols-outlined">extension</span>
            <div className="header__menu-text">ингридиенты</div>
          </NavLink>
        </nav>
        <div className="header__login">
          <HeaderLogin />
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer> <a className="footer__copyright" href="mailto:yaryi@yandex.ru">&copy;Old_Yaryi</a></footer>
    </>

  )
}

export default MainLayout
