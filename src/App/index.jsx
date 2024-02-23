import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from '../Components/Menu';
import { HomePage } from '../Pages/HomePage';
import { BlogPage } from '../Pages/BlogPage';
import { BlogPost } from '../Components/BlogPost';
import { ProfilePage } from '../Pages/ProfilePage';
import { LoginPage } from '../Pages/LoginPage';
import { LogoutPage } from '../Pages/LogoutPage';
import './App.css'

function App() {

// /#/
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<HomePage />} /> 

          <Route path='/blog' element={<BlogPage />}>
            <Route path='/blog/:slug' element={<BlogPost />} /> 
          </Route>

          <Route path='/profile' element={<ProfilePage />} /> 
          <Route path='/login' element={<LoginPage />} /> 
          <Route path='/logout' element={<LogoutPage />} /> 

          <Route path='*' element={<h1>Not Found</h1>} /> 
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
