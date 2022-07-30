import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div className="font-sans flex flex-col md:flex-row">
      <Navbar />
      <div className="w-full min-h-screen p-4">
        <div className="border h-full">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
