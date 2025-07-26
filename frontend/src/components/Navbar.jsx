import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore";
import { LogOut, MessageSquare, User, Sun, Moon } from "lucide-react";

export default function () {
  const { logout, authUser } = useAuthStore();
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <header
      className="border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">VARTA</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
          <button
          onClick={toggleTheme}
          className={`
            btn btn-sm gap-2 transition-colors duration-200 ease-in-out
            ${theme === 'dark' ? 'btn-natural' : 'btn-primary'}
            text-base-content
          `}
        >
          {theme === 'light' ? (
            <Sun className="w-4 h-4 text-white" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>


            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2  ${theme === 'dark' ? 'btn-natural' : 'btn-primary'}`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className={`flex gap-2 items-center hover:bg-natural ${theme === 'dark' ? 'btn-natural' : 'btn-primary'} `} onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
