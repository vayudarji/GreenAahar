import React from "react";
//import { FaCartShopping } from "react-icons/fa6";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
 
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
               { /*<img src={Logo} alt="Logo" className="w-20" />*/}
                GreenAahar
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
             
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="py-4 px-4 hover:text-green-500 "><a href="/#Login">Login</a></button>
              <button className="py-4 px-4 hover:text-green-500 "><a href="/#Signup">Signup</a></button>
  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;