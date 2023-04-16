import React from 'react'
import SidebarComponent from './components/sidebar_component';
import HomeComponent from './components/home_component';
import AboutComponent from './components/about_component';
import ResumeComponent from './components/resume_component';
import DemoComponent from './components/demo_component';
import "./styles/style.css"

function App () {
  return (
    <div className='row g-0 page'>
      <div className="col-1 sidebar_col">
        <SidebarComponent/>
      </div>
      <div className="col-11">
        <HomeComponent/>
        <AboutComponent/>
        <ResumeComponent/>
        <DemoComponent/>
      </div>
    </div>
  )
}

export default App;