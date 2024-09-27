import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Rootlayout from './layouts/Rootlayout';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Post from './components/Post';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import ProtectedRoute from './components/ProtectedRoute';
import CertificatePage from './components/CertificatePage';
import React,{useState} from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'services',
          element: <Services />
        },
        {
          path: 'blog',
          element: <Blog/>
        },
        {
          path: 'contact',
          element: <Contact />
        },
				{
					path:'blog/:id',
					element:<Post/>
				}
      ]
    },
    // Admin routes
    {
      path: '/admin',
      element: <AdminLogin setIsAuthenticated={setIsAuthenticated} />
    },
    {
      path: '/admin/dashboard',
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AdminPage />
        </ProtectedRoute>
      )
    },
    
    // Certificate route
    {
      path: '/certificates/:participantName',
      element: <CertificatePage />
    },
    



  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
