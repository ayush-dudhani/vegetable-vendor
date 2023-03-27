import {createBrowserRouter} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
])

// export default App;
