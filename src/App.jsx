import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/SearchPage'
import MainPage from './pages/MainPage'


const Layout = () => {
  return(
    <>
      <Nav />

      <Outlet />
    </>
  )
}

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<LoginPage />} />
          <Route path='main' element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  )
}




export default App
