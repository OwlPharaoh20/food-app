import HeadlineCards from "./components/HeadlineCards"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Food from "./components/Food"
import Category from "./components/Category"

export default function App( ) {


  return (
    <div> 
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  )
}