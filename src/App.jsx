import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
<<<<<<< HEAD
import Principal from "./pages/Principal";
import { Outlet } from "react-router-dom";
=======
import { Outlet } from "react-router-dom";

>>>>>>> 58bcfc051858db9e96e1182521aae64db9dc283f
function App() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
<<<<<<< HEAD
        {/* <Principal /> */}
=======
>>>>>>> 58bcfc051858db9e96e1182521aae64db9dc283f
        <Outlet />
      </main>
    </div>
  );
}

export default App;
