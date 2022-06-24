import { IoClose } from 'react-icons/io5'

interface MenuMobileProps{
    menuVisible: boolean;
    setMenuVisible: Function;
}

export default function MenuMobile({menuVisible, setMenuVisible}: MenuMobileProps){
    return(
        <div className="container">
            <IoClose className='closeIcon' onClick={() => setMenuVisible(false)} size={45}/>
            <nav>
                <a onClick={() => setMenuVisible(false)} href="">Home</a>
                <a onClick={() => setMenuVisible(false)} href="">Services</a>
                <a onClick={() => setMenuVisible(false)} href="">Our Works</a>
                <a onClick={() => setMenuVisible(false)} href="">Clients</a>
                <a onClick={() => setMenuVisible(false)} href="">Contact</a>
            </nav>
        </div>
    )
}