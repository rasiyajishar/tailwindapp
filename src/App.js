import logo from './logo.svg';
import './App.css';
import Navbar from './compnent/navbar';
import Sidebar from './compnent/sidebar';
import Dashboard from './compnent/Dashboard';

function App() {
  return (
    <div className="w-full h-screen bg-black  flex flex-col justify-start items-start">

      <Navbar/>
      <div className='w-full h-full flex    '>

        <Sidebar/>
        <Dashboard/>
        </div> 

    </div>
  );
}

export default App;
