import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import LandingPage from './pages/LandingPage'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import SearchPage from './pages/SearchPage'
import MoviePage from './pages/MoviePage'
import SeriesPage from './pages/SeriesPage'
import Media from './pages/Media'

// React Query Client for data fetching and management
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 20,
      cacheTime: 1000 * 60 * 10,
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
        },
        {
          path: '/search',
          element: <SearchPage />
        },
        {
          path: '/movies',
          element: <MoviePage />
        },
        {
          path: '/series',
          element: <SeriesPage />
        },
        {
          path: "/media/:id",
          element: <Media />,
        }
      ]
    },
  ])

  
  return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App