import f1Icon from "../../assets/f1.svg";
import f2Icon from "../../assets/f2.svg";
import f3Icon from "../../assets/f3.svg";
import f4Icon from "../../assets/f4.svg";

const StatsCards = () => {
  const stats = [
    {
      title: "Total Agencies",
      value: "689",
      change: "+8.5%",
      changeText: "Up from past week",
      changeColor: "text-green-600",
      iconBg: "bg-yellow-100",
      iconPath: f1Icon,
    },
    {
      title: "Total Agents",
      value: "10,293",
      change: "+1.3%",
      changeText: "Up from past week",
      changeColor: "text-green-600",
      iconBg: "bg-purple-100",
      iconPath: f2Icon,
    },
    {
      title: "Total Leads",
      value: "9,000",
      change: "-4.3%",
      changeText: "Down from past week",
      changeColor: "text-red-500",
      iconBg: "bg-green-100",
      iconPath: f3Icon,
    },
    {
      title: "Subscribed Plans",
      value: "120",
      change: "+1.8%",
      changeText: "Up from past week",
      changeColor: "text-green-600",
      iconBg: "bg-blue-100",
      iconPath: f4Icon,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-2 bg-[#E6F2EE] rounded-xl">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-3"
        >
          <div className="flex justify-between items-center gap-3">
            <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>

            <div
              className={`w-14 h-14 rounded-[20px] ${item.iconBg} flex items-center justify-center`}
            >
              <img src={item.iconPath} alt="" className="w-6 h-6" />
            </div>
          </div>

          <div className="text-2xl font-bold">{item.value}</div>

          <div
            className={`text-sm font-medium flex items-center gap-1 ${item.changeColor}`}
          >
            <span>{item.change}</span>
            <span className="text-gray-500">{item.changeText}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
