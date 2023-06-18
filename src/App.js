import './App.css';
import LoadingBar from 'react-top-loading-bar'


import React, { Component,useEffect,useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";



const App =()=> {
  const pageSize=12;
  const apikey=process.env.REACT_APP_NEWS_API;

  

  const[progress,setProgress]=useState(0);

  
   
  
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
        color='#f11946'
        progress={progress}
        
         />
          <NavBar />
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} apikey={apikey} key='general' pageSize={pageSize} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={setProgress} apikey={apikey} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress}  apikey={apikey} key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={setProgress} apikey={apikey} key='health' pageSize={pageSize} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={setProgress}  apikey={apikey} key='science' pageSize={12} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} apikey={apikey} key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} apikey={apikey} key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>
          </Routes>
        </BrowserRouter>
       
      </div>
    )
  
}

export default App;