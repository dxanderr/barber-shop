import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Register from "./components/pages/Register"
import Book from "./components/pages/Book";
import ShopX from './components/pages/ShopX';
import Login from "./components/pages/Login";
// import scrollreveal from "scrollreveal";
import "./sass/index.scss";
import Services from "./components/pages/Services";
function App() {

  // Auth Context - Firebase
  // const currentUser = false;
  // const RequireAuth = ({children}) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // }

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/book" exact element={<Book />}  />
          <Route path="/book/shopx" exact 
            element={<ShopX />}  
          />
          <Route path="/book/shopx/barber/services" exact 
            element={<Services />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
