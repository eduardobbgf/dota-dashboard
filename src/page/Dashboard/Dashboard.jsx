import React, { useEffect, useState } from "react";
import { Sidebar, Navbar, Container } from "../../components";
import getPlayer from "../../services/players-service";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(async () => {
    const get = async () => {
      const yakId = 109941012;
      const data = await getPlayer(yakId);
      return data;
    };
    const data = await get();
    setProfile(data.data);
    console.log(data);
  });

  return (
    <div className="">
      <Navbar />
      <div className="d-flex">
        {/* <Sidebar /> */}
        <div>
          <Container>
            <img src={profile?.profile.avatarmedium} />
          </Container>
          <Container />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
