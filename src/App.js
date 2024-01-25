import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Admin from "./components/Admin";
import Nav from "./Nav";
import Home from "./Home";
import AddProject from "./components/AddProject";
import NewBooking from "./components/NewBooking";
import MasterInputs from "./components/MasterInputs";
import AddBlock from "./components/AddBlock";
import AddPlot from "./components/AddPlot";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import AddContractor from "./components/AddContractor";
import ContractorList from "./components/ContractorList";
import BrokerList from "./components/BrokerList";
import AddBroker from "./components/AddBroker";
import BookingStatus from "./components/BookingStatus";
import PaymentTransaction from "./components/PaymentTransaction";
import BookingList from "./components/BookingList";
import TransactionReport from "./components/TransactionReport";
import Footer from "./Footer";
import BalanceReport from "./components/BalanceReport";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("adminData"));
    if (adminData) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const adminData = {
      email: "admin@example.com",
      password: "admin123",
    };
    localStorage.setItem("adminData", JSON.stringify(adminData));

    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminData");
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                {" "}
                <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />{" "}
                <Home />{" "}
              </>
            ) : (
              <Navigate to="/admin" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Admin isLoggedIn={isLoggedIn} onLogin={handleLogin} />
            </>
          }
        />
        {isLoggedIn && (
          <>
            <Route
              path="/addproject"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <AddProject />{" "}
                </>
              }
            />
            <Route
              path="/newbooking"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <NewBooking />{" "}
                </>
              }
            />
            <Route
              path="/masterinputs"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <MasterInputs />{" "}
                </>
              }
            />
            <Route
              path="/addblock"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <AddBlock />{" "}
                </>
              }
            />
            <Route
              path="/addplot"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <AddPlot />{" "}
                </>
              }
            />
            <Route
              path="/adduser"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <AddUser />{" "}
                </>
              }
            />
            <Route
              path="/userlist"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <UserList />{" "}
                </>
              }
            />
            <Route
              path="/addcontractor"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <AddContractor />{" "}
                </>
              }
            />
            <Route
              path="/contractorlist"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <ContractorList />{" "}
                </>
              }
            />
            <Route
              path="/brokerlist"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <BrokerList />{" "}
                </>
              }
            />
            <Route
              path="/addbroker"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <AddBroker />{" "}
                </>
              }
            />
            <Route
              path="/bookingstatus"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <BookingStatus />{" "}
                </>
              }
            />
            <Route
              path="/PaymentTransaction"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <PaymentTransaction />{" "}
                </>
              }
            />
            <Route
              path="/bookinglist"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <BookingList />{" "}
                </>
              }
            />
            <Route
              path="/transactionreport"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <TransactionReport />{" "}
                </>
              }
            />
            <Route
              path="/balancereport"
              element={
                <>
                  {" "}
                  <Nav
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />{" "}
                  <BalanceReport />{" "}
                </>
              }
            />
          </>
        )}
        {/* <Footer /> */}
      </Routes>
    </Router>
  );
};

export default App;
