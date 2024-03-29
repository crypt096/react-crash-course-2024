import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage/>} />)
);

const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}
export default App