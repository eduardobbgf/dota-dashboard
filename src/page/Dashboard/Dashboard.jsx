import React from "react";
import { Sidebar, Navbar, Container } from "../../components";

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <Container />
      </div>
    </div>
  );
};

export default Dashboard;
