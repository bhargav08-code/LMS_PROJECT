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
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { ChakraProvider, CSSReset } from "@chakra-ui/react";
// import Admin from "./components/Admin";
// import Nav from "./Nav";
// import Home from "./Home";
// import AddProject from "./components/AddProject";
// import NewBooking from "./components/NewBooking";
// import MasterInputs from "./components/MasterInputs";
// import AddBlock from "./components/AddBlock";
// import AddPlot from "./components/AddPlot";
// import AddUser from "./components/AddUser";
// import UserList from "./components/UserList";
// import AddContractor from "./components/AddContractor";
// import ContractorList from "./components/ContractorList";
// import BrokerList from "./components/BrokerList";
// import AddBroker from "./components/AddBroker";
// import BookingStatus from "./components/BookingStatus";

// const Layout = ({ isLoggedIn, handleLogout, children }) => {
//   return (
//     <>
//       <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
//       {children}
//     </>
//   );
// };

// const App = () => {
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     const adminData = JSON.parse(localStorage.getItem("adminData"));
//     if (adminData) {
//       setLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = () => {
//     const adminData = {
//       email: "admin@example.com",
//     };
//     localStorage.setItem("adminData", JSON.stringify(adminData));
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("adminData");
//     setLoggedIn(false);
//   };

//   return (
//     <ChakraProvider>
//       <CSSReset />
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Layout isLoggedIn={isLoggedIn}>
//                 {isLoggedIn ? <Home /> : <Navigate to="/admin" />}
//               </Layout>
//             }
//           />
//           <Route
//             path="/"
//             element={
//               <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
//                 {isLoggedIn ? <Home /> : <Navigate to="/admin" />}
//               </Layout>
//             }
//           />
//           {isLoggedIn && (
//             <>
//               <Route
//                 path="/addproject"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <AddProject />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/newbooking"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <NewBooking />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/masterinputs"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <MasterInputs />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/addblock"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <AddBlock />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/addplot"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <AddPlot />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/adduser"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <AddUser />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/userlist"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <UserList />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/addcontractor"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <AddContractor />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/contractorlist"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <ContractorList />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/brokerlist"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <BrokerList />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/addbroker"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <AddBroker />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/bookingstatus"
//                 element={
//                   <Layout isLoggedIn={isLoggedIn}>
//                     <BookingStatus />
//                   </Layout>
//                 }
//               />
//             </>
//           )}
//         </Routes>
//       </Router>
//     </ChakraProvider>
//   );
// };

// export default App;
