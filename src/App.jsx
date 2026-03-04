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
  const [resolvedList, setResolvedList] = useState([]);
 

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
    toast.success("Ticket added to task status!", {
        theme: "colored"
    });
};

  const handleRemoveFromTaskStatus = (ticketId) => {
    const updatedList = taskStatusList.filter(item => item.id !== ticketId);
    setTaskStatusList(updatedList);
    
    const isResolved = resolvedList.find(item => item.id === ticketId);
    if (!isResolved) {
        setResolvedList([...resolvedList, taskStatusList.find(item => item.id === ticketId)]);
    }
    toast.success("Task completed and moved to resolved!", {
        theme: "colored"
    });


};

  

  return (
    <>
      <Navbar></Navbar>

      <ToastContainer position="top-right" autoClose={3000} />

      
        <Hero taskStatusList={taskStatusList}
        resolvedList={resolvedList}></Hero>
      

      <Suspense fallback={<div>Loading tickets...</div>}>
        <Tickets ticketsPromise={ticketsPromise} tickets={tickets} handleAddToTaskStatus={handleAddToTaskStatus} taskStatusList={taskStatusList} handleRemoveFromTaskStatus={handleRemoveFromTaskStatus} resolvedList={resolvedList} />
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App;