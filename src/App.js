import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register_page from './Page/Register';
import Profile_page from './Page/Profile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register_page />} />
        <Route path="/profile" element={<Profile_page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
