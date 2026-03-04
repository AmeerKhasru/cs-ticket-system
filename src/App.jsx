import { useState, useEffect, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tickets from './components/Tickets/Tickets'
import Footer from './components/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [tickets, setTickets] = useState([]); 
  const [taskStatusList, setTaskStatusList] = useState([]);
  const [resolvedList, setResolvedList] = useState([]);

  
  useEffect(() => {
    fetch('/tickets.json')
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  const handleAddToTaskStatus = (ticket) => {
    const isExist = taskStatusList.find(item => item.id === ticket.id);
    if (isExist) {
      return toast.warn("Already added!", { theme: "colored" });
    }

    const updatedTicket = { ...ticket, status: "In-progress" };
    setTaskStatusList([...taskStatusList, updatedTicket]);
    toast.success("Ticket is now In-progress!");
  };

  const handleRemoveFromTaskStatus = (ticketId) => {
    
    const completedTicket = taskStatusList.find(item => item.id === ticketId);

    if (completedTicket) {
      const updatedMainTickets = tickets.filter(item => item.id !== ticketId);
      setTickets(updatedMainTickets);

      
      const updatedStatusList = taskStatusList.filter(item => item.id !== ticketId);
      setTaskStatusList(updatedStatusList);

      
      setResolvedList([...resolvedList, completedTicket]);

      toast.success("Ticket completed and removed from all lists!");
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      
      <Hero taskStatusList={taskStatusList} resolvedList={resolvedList} />

      <Suspense fallback={<div>Loading...</div>}>
        <Tickets 
          tickets={tickets} 
          handleAddToTaskStatus={handleAddToTaskStatus} 
          taskStatusList={taskStatusList} 
          handleRemoveFromTaskStatus={handleRemoveFromTaskStatus} 
          resolvedList={resolvedList}   
        />
      </Suspense>
      <Footer />
    </>
  )
}

export default App;