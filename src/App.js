import { Routes, Route } from "react-router-dom";
import Animated_Cursor from "./components/AnimatedCursor/Animated_Cursor";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error_page from "./pages/Error_page";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
function App() {
  return (
    <div className="bg-slate-50">
      <main className="max-w-screen-xl mx-auto">
        <Header>
          <div className="px-3 md:px-7 bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Error_page />} />
            </Routes>
          </div>
          <Footer />
          <Animated_Cursor />
          <MessengerCustomerChat
            pageId="104988185648465"
            appId="1010650116290757"
          // htmlRef="<REF_STRING>"
          />,
        </Header>
      </main>
    </div>
  );
}

export default App;
