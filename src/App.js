import Home from "./pages/Home";
import Create from "./pages/Create";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Home />} />
          <Route path= '/create' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
