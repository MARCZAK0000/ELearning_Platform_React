import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/App.css'
import MainPage from './MainPage'

function App() {
  

  return (
    <>
      <div className='h-svh'>
        <div className='grid grid-rows-12 h-full'>
          <Header/>
          <MainPage/>
          <Footer/>
        </div>
       
      </div>
    </>
  )
}

export default App
