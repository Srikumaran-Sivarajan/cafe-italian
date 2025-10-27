
import './App.css'
import Header from './components/Header'
import Hero from './Pages/Hero'
import Menu from './Pages/Menu'
import Monthly from './Pages/Monthly'
import Offers from './Pages/Offers'
import SpecialMenu from './Pages/SpecialMenu'
import { dining } from './assets/media'
import FullImageCard from './components/FullImageCard'
import GuestPage from './Pages/GuestPage'
import Contactus from './Pages/Contactus'
import Footer from './components/Footer'
import Gallery from './Pages/Gallery';
import { useEffect } from 'react'

import Aos from 'aos'
function App() {
  useEffect(() => {
    Aos.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    });
}, []);

  const DATA = {
    src:dining,
    title:"Private & Group Dining ",
    desc:"At Bavette, we specialize in creating memorable dining experiences, whether you're seeking an intimate gathering or a grand celebration. Our private and group dining options are designed to meet your unique needs with personalized service, exceptional food, and a welcoming atmosphere.",
    stitle:"Booking",
    buttonData:{text:"Book now"}
  }

  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Offers />
      <SpecialMenu />
      <Monthly />
      <div className='full-image'>
        <FullImageCard data={DATA} />
      </div>
      <GuestPage />
      <Gallery />
      <Contactus />
      <Footer />
    </>
  )
}

export default App
