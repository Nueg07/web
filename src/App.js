import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/Landing-page" element={<LandingPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
