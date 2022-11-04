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
import Register from "./Authentication/Register_login/Register";
import Login from "./Authentication/Register_login/Login";
import Dashboard from "./Dashboard/Dashboard";
import MyProfile from "./Dashboard/MyProfile";
import GiveAReview from "./Dashboard/UserPages/GiveAReview";
import ManageOrders from "./Dashboard/AdminPages/ManageOrders";
import MyOrder from "./Dashboard/UserPages/MyOrder";
import ManageProducts from "./Dashboard/AdminPages/ManageProducts";
import ManageUsers from "./Dashboard/AdminPages/ManageUsers";
import AddProducts from "./Dashboard/AdminPages/AddProducts";
import HomeMain from "./components/Modals/Main_slider_modal";
import Payment from "./Payment/Payment";
import Cart from "./pages/Cart";
import BackToTopButton from "./components/Vanilla_back_to_top/BackToTopButton";
import Toast_Container from "./components/ToastContainer/Toast_Container";
import RequireAuth from "./Authentication/RequireAuth";
function App() {
  return (
    <div className="bg-slate-50 relative">
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
              <Route path="/dashboard" element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              } >
                <Route path="profile" element={<MyProfile />} />
                <Route path="review" element={<GiveAReview />} />
                <Route path="my_orders" element={<MyOrder />} />
                <Route path="manage_orders" element={<ManageOrders />} />
                <Route path="manage_products" element={<ManageProducts />} />
                <Route path="manage_users" element={<ManageUsers />} />
                <Route path="add_product" element={<AddProducts />} />
              </Route>
              <Route path="payment" element={<Payment />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/*" element={<Error_page />} />
            </Routes>
          </div>
          <Footer />
          <Toast_Container />
          <MessengerCustomerChat
            pageId="104988185648465"
            appId="1010650116290757"
          // htmlRef="<REF_STRING>"
          />
          <BackToTopButton />
        </Header>
      </main>
      <HomeMain />
      <Animated_Cursor className="z-50" />
    </div>
  );
}

export default App;
