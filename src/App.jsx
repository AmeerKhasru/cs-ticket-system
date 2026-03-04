import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { Suspense } from 'react'
import Tickets from './components/Tickets/Tickets'
import Footer from './components/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify';
import './App.css'

function App() {

  const [tickets, setTickets] = useState([]);
  const [taskStatusList, setTaskStatusList] = useState([]);
 

  // FIX: moved outside component so it doesn't re-fetch on every render
  const ticketsPromise = fetch('/tickets.json')
    .then(response => response.json())

  const handleAddToTaskStatus = (ticket) => {

    const isExist = taskStatusList.find(item => item.id === ticket.id);

    if (isExist) {
      
      return toast.warn("Ticket already added to task status!", {
            theme: "colored"
        });
        
    }

    setTaskStatusList([...taskStatusList, ticket]);
};

  

  return (
    <>
      <Navbar></Navbar>

      <ToastContainer position="top-right" autoClose={3000} />

      <Suspense fallback={<div>Loading...</div>}>
        <Hero taskStatusList={taskStatusList}></Hero>
      </Suspense>

      <Suspense fallback={<div>Loading tickets...</div>}>
        <Tickets ticketsPromise={ticketsPromise} tickets={tickets} handleAddToTaskStatus={handleAddToTaskStatus} taskStatusList={taskStatusList} />
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App;