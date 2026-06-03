import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../App.css";

const CustomTooltip = ({ active, payload }) => {

  if (active && payload && payload.length) {

    return (

      <div className="bg-black text-white p-3 rounded text-[11px]">

        <p className="font-semibold">
          {payload[0].payload.statistic}
        </p>

        <p className="text-gray-300 text-[11px]">
          Last Week : {payload[0].payload.lastWeek}
        </p>

        <p className="text-sky-400 font-semibold text-[11px]">
          Current Week : {payload[0].payload.currentWeek}
        </p>

      </div>

    );
  }

  return null;
};

export default function WeeklySalesDoubleBarChart({ data = [] }) {

  if (!data || data.length < 2) return null;

  const [lastWeek, currentWeek] = data;

  const salesData =
    data.length === 2
      ? [
          {
            statistic: "UVA High",
            lastWeek: data[0]?.uvaHigh || 0,
            currentWeek: data[1]?.uvaHigh || 0,
          },
          {
            statistic: "Western High",
            lastWeek: data[0]?.westernHigh || 0,
            currentWeek: data[1]?.westernHigh || 0,
          },
          {
            statistic: "Total High Grown",
            lastWeek: data[0]?.totalHighGrown || 0,
            currentWeek: data[1]?.totalHighGrown || 0,
          },
          {
            statistic: "UVA Medium",
            lastWeek: data[0]?.uvaMedium || 0,
            currentWeek: data[1]?.uvaMedium || 0,
          },
          {
            statistic: "Western Medium",
            lastWeek: data[0]?.westernMedium || 0,
            currentWeek: data[1]?.westernMedium || 0,
          },
          {
            statistic: "Total Medium Grown",
            lastWeek: data[0]?.totalMediumGrown || 0,
            currentWeek: data[1]?.totalMediumGrown || 0,
          },
          {
            statistic: "Total Low Grown",
            lastWeek: data[0]?.totalLowGrown || 0,
            currentWeek: data[1]?.totalLowGrown || 0,
          },
          {
            statistic: "CTC High",
            lastWeek: data[0]?.ctcHigh || 0,
            currentWeek: data[1]?.ctcHigh || 0,
          },
          {
            statistic: "CTC Medium",
            lastWeek: data[0]?.ctcMedium || 0,
            currentWeek: data[1]?.ctcMedium || 0,
          },
          {
            statistic: "CTC Low",
            lastWeek: data[0]?.ctcLow || 0,
            currentWeek: data[1]?.ctcLow || 0,
          },
          {
            statistic: "Orthodox Low",
            lastWeek: data[0]?.orthodoxLow || 0,
            currentWeek: data[1]?.orthodoxLow || 0,
          },
        ]
      : [];

  return (

    <div className="w-full lg:w-full h-[500px] lg:h-[550px] bg-[#0b1020] p-6 m-5 lg:m-0 rounded-xl lg:rounded-2xl flex flex-col">

      <h2 className="text-white text-center lg:text-left text-[24px] md:text-[28px] lg:text-[32px] font-serif pt-2 mb-5 lg:mb-0">
        Weekly Sales Averages
      </h2>

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0">

        <p className="text-gray-300 w-[200px] flex text-center lg:w-auto text-[11px] md:text-[12px] lg:text-[13px] pt-2 pl-0 lg:pl-10">
          Comparison of last sale week vs current sale week by statistic
        </p>

      </div>

      <div className="w-full lg:w-full h-[600px] mt-10 lg:mt-0 lg:pt-2">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={salesData}
            barGap={2}
            barCategoryGap={20}
          >

            <XAxis
              dataKey="statistic"
              stroke="#94a3b8"
              angle={-60}
              textAnchor="end"
              height={140}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 17 }}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="lastWeek"
              fill="#64748b"
              radius={[3, 3, 0, 0]}
              barSize={25}
              animationDuration={2000}
            />

            <Bar
              dataKey="currentWeek"
              fill="#38bdf8"
              radius={[3, 3, 0, 0]}
              barSize={25}
              animationDuration={4000}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}