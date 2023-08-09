import React, { useState } from 'react'

function Nav() {
    const [navigation, setNavigation] = useState(0)
    const navLinks =[['Home', 'Initial View', 'Preview View', 'Zoom Out','Zoom In'],
                    ['Layer Catalog','Layer View', 'Filter','Filter Zone','Clear Filter'],
                    ['Distance', 'Point', 'Edit', 'Erase']]
  return (
    <header className='header'>
        <nav className='nav-logo'>
            <h1>Logo</h1>
            <img src="https://acceleratingtozero.org/wp-content/uploads/2022/10/Lagos-logo.png" alt="Lagos logo" width='50px' />
        </nav>
        <nav className='main-nav'>
            <ul> 
                {['Home','Maps','Tools'].map((nav,id) => (
                    <li 
                        key={nav+id} onClick={() => setNavigation(id)} className={navigation === id ? 'active' : 'inactive'} >
                            {nav}
                    </li>
                ))}
               
            </ul>
        </nav>
        <nav className='nav-tools'>
            <ul className='sub-nav'>
                {navLinks.map((tools,index) =>
                    index === navigation && tools.map((item) =>
                        <li key={tools+index} className='nav-tool'> {item} </li>
                        ))}
            </ul>
        </nav>
    </header>
  )
}


export default Nav