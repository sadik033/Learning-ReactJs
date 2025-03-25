import "./App.css";
import Header from "./component/Header/Header";
import About from "./component/Header/UI/About";
import Counter from "./component/Header/UI/counter";
import Hero from "./component/Header/UI/Hero";
import Services from "./component/Header/UI/services";
import Testimonial from "./component/Header/UI/Testimonial";


function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Counter/>
    <Services/>
    <About/>
    <Testimonial/>
    </>
  )
}

export default App
