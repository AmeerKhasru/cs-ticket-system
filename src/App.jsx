
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { Suspense } from 'react'
import Tickets from './components/Tickets/Tickets'
import './App.css'

function App() {

  const ticketsPromise = fetch('/tickets.json')
    .then(response => response.json())

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<div>Loading tickets...</div>}>
        {ticketsPromise.then(tickets => <Tickets tickets={tickets} />)}
      </Suspense>
    </>
  )
}

export default App
