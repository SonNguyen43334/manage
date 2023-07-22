import './App.css';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import Navigation from './components/navigation/Navigation';
import AddStaff from './components/dashboard/AddStaff';
import EditStaff from './components/dashboard/EditStaff';
import { Footer } from 'react-materialize';






function App() {
  return (
    <div className="App">
      
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/add' element={<AddStaff />}></Route>
        <Route path='/dashboard/edit/:id' element={<EditStaff/>}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
      </Routes>
      <div className='footerbackground'>
      <Footer class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">     
      <p className='detailtext1'>@2023 Copyright: https://github.com/SonNguyen43334/github-demo </p>  
      </Footer>
      </div>
    </div>
  );
}

export default App;
