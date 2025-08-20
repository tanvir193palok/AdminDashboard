import { useAgencyStore } from "../../store/AgencyStore";

const AgencySection = () => {
  const { agencies } = useAgencyStore();

  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const sortedMonths = [
    currentMonth,
    ...allMonths.filter((m) => m !== currentMonth),
    "All time",
  ];

  // ✅ Sort agencies by StartDate (newest first)
  const sortedAgencies = [...agencies].sort(
    (a, b) => new Date(b.StartDate).getTime() - new Date(a.StartDate).getTime()
  );

  // ✅ Format date nicely
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl mt-4 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Agency</h2>
        <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
          {sortedMonths.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl mt-4">
        <table className="w-full border-collapse rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-background text-left text-sm font-bold text-gray-700">
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Agency Name</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Agents</th>
              <th className="py-3 px-4">Leads</th>
              <th className="py-3 px-4">Plan</th>
              <th className="py-3 px-4">Start Date</th> {/* ✅ New Column */}
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedAgencies.map((agency, index) => (
              <tr
                key={agency.Id}
                className="border-b last:border-0 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{agency.AgencyName}</td>
                <td className="py-3 px-4">
                  {agency.Address || agency.City || agency.State || agency.Zip
                    ? `${agency.Address ?? ""}${
                        agency.Address && agency.City ? ", " : ""
                      }${agency.City ?? ""} ${agency.State ?? ""} ${
                        agency.Zip ?? ""
                      }`
                    : ""}
                </td>

                <td className="py-3 px-4">{agency.totalAgents} Agents</td>
                <td className="py-3 px-4">{agency.totalLeads}</td>
                <td className="py-3 px-4">{agency.subscriptionPlan}</td>
                <td className="py-3 px-4">{formatDate(agency.StartDate)}</td>
                <td className="py-3 px-4 text-center">
                  <span className="bg-primary text-white text-xs px-4 py-1 rounded-full">
                    {agency.Status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgencySection;
