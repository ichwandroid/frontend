import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScanningList from "./components/ScanningList";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScanningList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
