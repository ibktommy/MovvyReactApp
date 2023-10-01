import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  // Creating App Routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    }
  ])

  
  return (
    <RouterProvider router={router}/>
  )
}

export default App