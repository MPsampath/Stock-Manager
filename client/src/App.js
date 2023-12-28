import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home/HomePage';

// roote route

const router = createBrowserRouter([
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/register',
    element:<RegisterPage/>
  },
  {
    path:'/',
    element:<HomePage/>
  }
])
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
