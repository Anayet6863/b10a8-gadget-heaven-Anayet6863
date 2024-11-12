import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
           Gadget Heaven || Home
        </title>
      </Helmet>
      <Banner />
      <Outlet />
    </div>
  );
};

export default Home;
