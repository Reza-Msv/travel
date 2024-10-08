import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navBarList } from "../../constants/constants";

const ResponsiveMenu = ({ setShowMenu, showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-xl shadow-md`}
    >
      <div className="Navbar__card">
        <div>
          <div className="flex items-center justify-start gap-4">
            <FaUserCircle className="text-gray-500" size={50} />
            <div className="text-gray-500">
              <h1>Hello User</h1>
              <h1 className="text-sm text-slate-500">Permium user</h1>
            </div>
          </div>
        </div>
        <div className="text-black mt-12">
          <ul className="space-y-4 text-xl">
            {navBarList.map((item) => (
              <li key={item.id}>
                <Link
                  className="mb-5 inline-block"
                  onClick={() => setShowMenu(false)}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
