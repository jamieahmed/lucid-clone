import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Footer from './Components/Footer/Footer'

// Air 
import Discover from './Pages/Air/Discover/Discover'
import Design from './Pages/Air/Design/Design'
import Reserve from './Pages/Air/Reserve/Reserve'

//  Motors
import Company from './Pages/Motors/Company/Company'
import Leadership from './Pages/Motors/LeaderShip/LeaderShip'
import Careers from './Pages/Motors/Careers/Careers'
import Stories from './Pages/Motors/Stories/Stories'
import Teach from './Pages/Motors/Teach/Teach'
import FutureModels from './Pages/Motors/FutureModels/FutureModels'
import Investors from './Pages/Motors/Investors/Investors'


// More 
import PurchaseAndOwnership from './Pages/More/PurchaseAndOwnership/PurchaseAndOwnership'
import Payment from './Pages/More/Payment/Payment'
import Store from './Pages/More/Store/Store'
import FAQ from './Pages/More/FAQ/FAQ'
import Contact from './Pages/More/Contact/Contact'
import Locations from './Pages/More/Locations/Locations'
import Events from './Pages/More/Events/Events'
import Media from './Pages/More/Media/Media'
import Awards from './Pages/More/Awards/Awards'


const App = () => {
    return (
        <>
            <Routes>
                {/* Home */}
                <Route path='/' element={<Home />} />
                {/* Air */}
                <Route path='/air' element={<Discover />} />
                <Route path='/air/configure' element={<Design />} />
                <Route path='/air/reserve' element={<Reserve />} />
                {/* Motors */}
                <Route path='/company' element={<Company />} />
                <Route path='/' element={<Leadership />} />
                <Route path='/' element={<Careers />} />
                <Route path='/' element={<Stories />} />
                <Route path='/' element={< Teach />} />
                <Route path='/' element={<FutureModels />} />
                <Route path='/' element={<Investors />} />
                {/* More */}
                <Route path='/' element={<PurchaseAndOwnership />} />
                <Route path='/' element={<Payment />} />
                <Route path='/' element={<Store />} />
                <Route path='/' element={<FAQ />} />
                <Route path='/' element={<Contact />} />
                <Route path='/' element={<Locations />} />
                <Route path='/' element={<Events />} />
                <Route path='/' element={<Media />} />
                <Route path='/' element={<Awards />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
