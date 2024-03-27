import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HomeCards from "./components/HomeCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
        >
      </section>
    </>
  )
}
export default App