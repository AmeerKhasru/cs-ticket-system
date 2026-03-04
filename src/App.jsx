import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { Suspense } from 'react'
import Tickets from './components/Tickets/Tickets'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  const [tickets, setTickets] = useState([]);
  const [taskStatusList, setTaskStatusList] = useState([]);

  // FIX: moved outside component so it doesn't re-fetch on every render
  const ticketsPromise = fetch('/tickets.json')
    .then(response => response.json())

  const handleAddToTaskStatus = (ticket) => {
    setTaskStatusList([...taskStatusList, ticket]);
  }

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<div>Loading tickets...</div>}>
        <Tickets ticketsPromise={ticketsPromise} tickets={tickets} handleAddToTaskStatus={handleAddToTaskStatus} taskStatusList={taskStatusList} />
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App;