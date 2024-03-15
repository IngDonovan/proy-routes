import { DataProvider } from '../data/dataContext';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, AuthRoute } from '../auth';
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
        <DataProvider>
        <AuthProvider>
            <Menu />
            <Routes>
              <Route path='/' element={<HomePage />} /> 
              <Route path='/blog' element={<BlogPage />}>
                <Route path='/blog/:slug' element={<BlogPost />} /> 
              </Route>
              <Route 
                path='/profile' 
                element={
                  <AuthRoute>
                    <ProfilePage />
                  </AuthRoute>
                } 
              /> 
              <Route path='/login' element={<LoginPage />} /> 
              <Route 
                path='/logout' 
                element={
                  <AuthRoute>
                    <LogoutPage />
                  </AuthRoute>
                } 
              /> 
              <Route path='*' element={<h1>Not Found</h1>} /> 
            </Routes>
        </AuthProvider>
        </DataProvider>
      </HashRouter>
    </>
  )
}

export default App
