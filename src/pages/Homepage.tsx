import { useEffect } from "react";
import Header from "../components/Header";
import AgencySection from "../components/homePage/AgencySection";
import StatsCards from "../components/homePage/StatsCards";
import { useAgencyStore } from "../store/AgencyStore";
import LeadsByAgency from "../components/homePage/LeadsByAgency";
import Copyright from "../components/Copyright";

const Homepage = () => {
  const { fetchAgencies } = useAgencyStore();

  useEffect(() => {
    fetchAgencies();
  }, []);

  return (
    <div className="">
      <Header />
      <div className="px-4 pt-4">
        <p className="text-lg md:text-2xl 2xl:text-[30px] font-bold">
          Dashboard
        </p>
        <StatsCards />
        <LeadsByAgency />
        <AgencySection />
      </div>

      <Copyright />
    </div>
  );
};

export default Homepage;
