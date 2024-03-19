import { useState } from "react";
import List from "../List/List";
import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard', private: true }
      ];
      
    return (
        <nav className="bg-yellow-200 p-6">
         <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {
            open === true ? <RiCloseLine className="text-3xl"></RiCloseLine> : <RiMenu2Fill></RiMenu2Fill>
          }
      
         </div>
              <ul className={`md:flex justify-around text-lg lg:text-xl font-semibold duration-1000 bg-yellow-200 md:static absolute px-6
              ${open ? 'top-16' : '-top-60'}
              `}>
              {
                routes.map(route => <List key={route.id} route={route} ></List> )
              }
              </ul>
        </nav>
    );
};

export default NavBar;