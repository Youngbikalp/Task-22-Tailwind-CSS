import React from "react";

const NavigationBar: React.FC = () => {
  return (
    <nav className="flex items-center flex-wrap bg-blue-500 p-6 ">
      <div className="flex items-center gap-20 w-full flex-shrink-0 text-white">
        <div className="flex items-center w-60 gap-5">
          <img
            className="rounded-full bg-yellow-300"
            style={{ width: "50px", height: "50px" }}
            src="https://static.vecteezy.com/system/resources/thumbnails/005/520/660/small/modern-futuristic-chair-interior-icon-logo-design-line-vector.jpg"
          ></img>
          <span className="font-semibold text-xl tracking-normal">
            GAMING CHAIR
          </span>
        </div>
        <div className="flex hidden w-full md:block md:w-auto ">
          <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:border-0 md:dark:bg-blue-900 dark:border-blue-900">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-300 rounded md:bg-transparent md:text-blue-300 md:p-0 dark:text-white md:dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Registration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
