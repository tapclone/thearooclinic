import {React} from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'

function Homepage(props) {
  return (
    <div>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
    </div>
  )
}

export default Homepage