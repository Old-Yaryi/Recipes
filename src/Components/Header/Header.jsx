import { Link, NavLink } from "react-router-dom"
import HeaderLogin from "../HeaderLogin/HeaderLogin"

function Header() {
  return (
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
  )
}

export default Header
