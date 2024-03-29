import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/about' element={ <h1>My app</h1>} />)
);

const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}
export default App