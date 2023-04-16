import React, { useState } from 'react'
import {Link} from 'react-scroll'
import "../styles/sidebar.css"

const SidebarComponent = () => {
    const [click, setclick] = useState(false)
    const clickMenu = () => setclick(true)

    return (
      <div className='content'>
          <nav className='sidebar'>
                <ul className={click ? "list-group no-bullets active" : "list-group no-bullets"}>
                    <li>
                      <Link to ="home" spy={true} smooth={true} duration={100} onClick={clickMenu}>Home</Link>
                    </li>
                    <li>
                      <Link to ="about" spy={true} smooth={true} duration={100} onClick={clickMenu}>About</Link>
                    </li>
                    <li>
                      <Link to ="resume" spy={true} smooth={true} duration={100} onClick={clickMenu}>Resume</Link>
                    </li>
                    <li>
                      <Link to ="demo" spy={true} smooth={true} duration={100} onClick={clickMenu}>Demo</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SidebarComponent;