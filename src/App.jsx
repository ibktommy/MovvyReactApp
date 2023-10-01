import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  // Creating App Routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage/>
    }
  ])

  
  return (
    <RouterProvider router={router}/>
  )
}

export default App