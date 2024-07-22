import { Outlet } from "react-router-dom"
import Header from "../../Components/Header/Header"


import './MainLayout.scss'



const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer> <a className="footer__copyright" href="mailto:yaryi@yandex.ru">&copy;Old_Yaryi</a></footer>
    </>

  )
}

export default MainLayout
