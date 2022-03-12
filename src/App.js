import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Pages
import Main from "./pages/Main";
import Comments from "./pages/Comments";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="AppBG">
      <div className="App">
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="#" element={<Main />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
