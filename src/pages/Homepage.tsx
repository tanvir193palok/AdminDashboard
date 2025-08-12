import Header from "../components/Header";
import StatsCards from "../components/homePage/StatsCards";

const Homepage = () => {
  return (
    <div className="">
      <Header />
      <div className="p-4">
        <p className="text-lg md:text-2xl 2xl:text-[30px] font-bold">Dashboard</p>
        <StatsCards />
      </div>
    </div>
  );
};

export default Homepage;
