import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import LandingPage from './pages/LandingPage'

// React Query Client for data fetching and management
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 2,
      refetchOnWindowFocus: false,
    }
  }
})

const App = () => {
  //  App Routes by the React Router DOM
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage/>,
      children: [
        { 
          index: true,
          element: <LandingPage />
        }
      ]
    },
  ])

  
  return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App