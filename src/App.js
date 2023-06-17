import './App.css';
import LoadingBar from 'react-top-loading-bar'


import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";



export default class App extends Component {
  pageSize=12;
  apikey=process.env.local;

  state={
    progress:0
  }

  setProgress=(progress)=>
  {
    this.setState({progress:progress})
  }
   
  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
         />
          <NavBar />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apikey={this.apikey} key='general' pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress} apikey={this.apikey} key='business' pageSize={this.pageSize} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress}  apikey={this.apikey} key='entertainment' pageSize={this.pageSize} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress} apikey={this.apikey} key='health' pageSize={this.pageSize} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress}  apikey={this.apikey} key='science' pageSize={12} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} apikey={this.apikey} key='sports' pageSize={this.pageSize} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} apikey={this.apikey} key='technology' pageSize={this.pageSize} country='us' category='technology' />}></Route>
          </Routes>
        </BrowserRouter>
       
      </div>
    )
  }
}

