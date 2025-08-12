import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useAgencyStore } from "../../store/AgencyStore";

/* eslint-disable @typescript-eslint/no-explicit-any */
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0A1A2F] text-white rounded px-3 py-2 text-sm">
        <strong>{label}</strong>
        <div>Leads {payload[0].value}</div>
      </div>
    );
  }
  return null;
};

const HighlightLabel = (props: any) => {
  const { x, y, width, value } = props;
  return (
    <g>
      <rect
        x={x + width / 2 - 20}
        y={y - 25}
        width={40}
        height={20}
        fill="#FF4D4D"
        rx={3}
      />
      <text
        x={x + width / 2}
        y={y - 11}
        fill="#fff"
        textAnchor="middle"
        fontSize={12}
        fontWeight="bold"
      >
        {value}
      </text>
    </g>
  );
};

const LeadsByAgency = () => {
  const { agencies } = useAgencyStore();

  const sortedData =
    agencies
      ?.sort((a, b) => b.totalLeads - a.totalLeads)
      .slice(0, 5)
      .map((agency) => ({
        name: agency.AgencyName,
        leads: agency.totalLeads,
      })) || [];

  const maxValue = Math.max(...sortedData.map((d) => d.leads), 0);

  return (
    <div className="relative bg-white p-5 rounded-lg h-[500px] shadow-sm mt-4">
      <p className="text-lg 3xl:text-xl font-bold mb-6">
        Leads by Agency(Top 5)
      </p>
      <select className="absolute top-5 right-5 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-300">
        <option>All Time</option>
        <option>Last Month</option>
        <option>Last Week</option>
      </select>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={sortedData}
          margin={{ top: 40, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(98, 240, 138, 1)" />
              <stop offset="100%" stopColor="rgba(39, 109, 117, 1)" />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis
            label={{
              value: "Number of Leads",
              angle: -90,
              position: "insideLeft",
            }}
            tick={{ fontSize: 12 }}
          />

          <Tooltip content={<CustomTooltip />} />

          <Bar
            dataKey="leads"
            fill="url(#colorLeads)"
            barSize={100}
            radius={[5, 5, 0, 0]}
          >
            <LabelList
              dataKey="leads"
              content={(props) =>
                props.value === maxValue ? <HighlightLabel {...props} /> : null
              }
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeadsByAgency;
