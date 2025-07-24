import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LucideSun,
  LucideMoon,
} from "lucide-react";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("");
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = (newTheme: string) => {
    setTransitioning(true);
    setTimeout(() => {
      setTheme(newTheme);
      setTransitioning(false);
    }, 300); // delay in ms
  };
  return (
    <nav
    className={`bg-white dark:bg-zinc-800 dark:text-white shadow-md px-4 py-3 flex justify-between items-center relative z-50 `}
    >
      {/* Mobile: Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Logo */}
      <div className="text-xl font-bold text-blue-600 mx-auto md:mx-0">
        Agenoverse
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-6 items-center">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-600">
            Services
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-600">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/events" className="hover:text-blue-600">
            Events
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="hover:text-blue-600">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/agenoversity" className="hover:text-blue-600">
            Agenoversity
          </Link>
        </li>

        {/* About dropdown */}
        <li className="relative">
          <button
            onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            className="flex items-center gap-1 hover:text-blue-600 hover:cursor-pointer"
          >
            About{" "}
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                aboutDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {aboutDropdownOpen && (
            <ul
              className="absolute top-8 right-0 bg-white dark:bg-zinc-800 rounded shadow-md w-40 py-2 z-10"
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <li>
                <Link
                  to="/about-us"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-zinc-800"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-journey"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-zinc-800"
                >
                  Our Journey
                </Link>
              </li>
              <li>
                <Link
                  to="/our-team"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-zinc-800"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* dark mode */}
        {/* <li className='grid grid-cols-2 light:bg-white'>
            <button onClick={()=>{
              setTheme("")
            }} className="bg-zinc-100 dark:text-zinc-600  p-3 hover:bg-zinc-300 rounded-lg">
            <LucideSun/>
            </button>
            <button onClick={()=>{
              setTheme("dark")
            }} className="bg-zinc-100 dark:text-zinc-600 p-3 hover:bg-zinc-300 rounded-lg">
            <LucideMoon/>
            </button>
          </li> */}
        <li className="relative w-12 h-12 overflow-hidden">
          <div
            className="absolute inset-0 transition-all duration-300 ease-in-out transform"
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? "translateY(20px)" : "translateY(0px)",
            }}
          >
            {theme === "dark" ? (
              <button
                onClick={() => handleThemeToggle("")}
                className="bg-zinc-100 dark:text-zinc-600 p-3 hover:bg-zinc-300 rounded-lg w-full h-full"
              >
                <LucideSun />
              </button>
            ) : (
              <button
                onClick={() => handleThemeToggle("dark")}
                className="bg-zinc-100 dark:text-zinc-600 p-3 hover:bg-zinc-300 rounded-lg w-full h-full"
              >
                <LucideMoon />
              </button>
            )}
          </div>
        </li>
      </ul>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="bg-white dark:bg-zinc-800 dark:text-white w-64 h-full p-5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-blue-600">Menu</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block hover:text-blue-600 border-b border-gray-400/50"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block hover:text-blue-600 border-b border-gray-400/50"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block hover:text-blue-600 border-b border-gray-400/50"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="block hover:text-blue-600 border-b border-gray-400/50"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block hover:text-blue-600 border-b border-gray-400/50"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/agenoversity"
                  className="block hover:text-blue-600 border-b border-gray-400/50"
                >
                  Agenoversity
                </Link>
              </li>
              {/* About dropdown */}
              <li className="relative border-b border-gray-400/50">
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  About{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      aboutDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {aboutDropdownOpen && (
                  <ul className=" w-40 py-2 z-10">
                    <li>
                      <Link
                        to="/about-us"
                        className="flex items-center px-4 py-2 text-blue-600 hover:bg-gray-100"
                      >
                        <ChevronRight size={16} />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-journey"
                        className="flex items-center px-4 py-2 text-blue-600 hover:bg-gray-100"
                      >
                        <ChevronRight size={16} />
                        Our Journey
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-team"
                        className="flex items-center px-4 py-2 text-blue-600 hover:bg-gray-100"
                      >
                        <ChevronRight size={16} />
                        Our Team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* to be work on dark   */}
            </ul>
          </div>
        </div>
      )}
      <div className="relative w-12 h-12 overflow-hidden md:hidden">
        <div
          className="absolute inset-0 transition-all duration-300 ease-in-out transform"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? "translateY(20px)" : "translateY(0px)",
          }}
        >
          {theme === "dark" ? (
            <button
              onClick={() => handleThemeToggle("")}
              className="bg-zinc-100 dark:text-zinc-600 p-3 hover:bg-zinc-300 rounded-lg w-full h-full"
            >
              <LucideSun />
            </button>
          ) : (
            <button
              onClick={() => handleThemeToggle("dark")}
              className="bg-zinc-100 dark:text-zinc-600 p-3 hover:bg-zinc-300 rounded-lg w-full h-full"
            >
              <LucideMoon />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
