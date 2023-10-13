import { Outlet, Link } from "react-router-dom";
import ColorContainer from "../components/ColorContainer"
import { useThemeContext } from "../hooks/useThemeContext";

function RooterLayout() {

  const { color } = useThemeContext()
  return (
    <>
      <header className="bg-slate-500" style={{ backgroundColor: color }}>
        <nav className="flex align-element justify-between items-center py-2  " >
          <h1 className="text-4xl">Recipie</h1>
          <Link className="btn btn-primary" to="/create">
            Create
          </Link>
        </nav>
      </header> 
      <main>
        <ColorContainer />
        <Outlet />
      </main>
      <footer></footer>
    </> 
  );
}

export default RooterLayout;
