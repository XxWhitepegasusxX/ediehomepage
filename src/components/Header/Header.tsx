import {GiHamburgerMenu} from 'react-icons/gi'

interface HeaderProps{
    setMenuVisible: Function,
}

export default function Header({setMenuVisible}: HeaderProps){
    return(
        <header>
            <div className="logo">
                <h1>Edie</h1>
            </div>
            <nav>
                <ul className='menu'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Our Works</li>
                    <li>Clients</li>
                    <li>Contact</li>
                </ul>
                <GiHamburgerMenu onClick={()=> setMenuVisible(true)} size={40}/>
            </nav>
        </header>
    )
}