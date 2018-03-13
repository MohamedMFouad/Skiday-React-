import { Link } from 'react-router'
import MdHome from 'react-icons/lib/md/home'
import MdPermContactCalendar from 'react-icons/lib/md/perm-contact-calendar'
import MdPlaylistAddCheck from 'react-icons/lib/md/playlist-add-check'



export const Menu = () => 
    <nav className='menu'>
        <Link to="/" activeClassName="selected">
            <MdHome />
        </Link>
        <Link to="/add-day" activeClassName="selected">
            <MdPermContactCalendar />
        </Link>
        <Link to="/list-days" activeClassName="selected">
            <MdPlaylistAddCheck /> 
        </Link>
    </nav>
    

    