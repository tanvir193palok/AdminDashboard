import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="w-[18%] min-w-[240px] max-w-[260px]">
        <Sidebar />
      </aside>

      <main className="flex-1 bg-background overflow-y-auto">
        <Homepage />
      </main>
    </div>
  );
}

export default App;
