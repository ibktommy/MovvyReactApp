import { Outlet, useNavigation } from 'react-router-dom'

import Navbar from '../components/Navbar'
import RouteLoader from '../components/RouteLoader'
// import Footer from '../components/Footer'

const HomePage = () => {
  // checking routes states using useNavigation
  const navigation = useNavigation()
  const routeState = navigation.state === 'loading'

  return (
    <>
      <Navbar />
      <main>
        {
          routeState ? <RouteLoader /> : <Outlet />
        }
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default HomePage