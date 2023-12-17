import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

// roote route

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginPage/>
  },
  {
    path:'/register',
    element:<RegisterPage/>
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
