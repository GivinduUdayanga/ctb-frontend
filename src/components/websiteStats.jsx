import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useRef } from "react";
import "../App.css";



const CustomTooltip = ({ active, payload }) => {

  if (active && payload && payload.length) {

    return (

      <div className="bg-black text-white p-3 rounded text-[12px]">

        <p className="text-[11px]">
          {payload[0].payload.saleWeek}
        </p>

        <p>
          Total Avg: {payload[0].value}
        </p>

      </div>

    );
  }

  return null;
};

export default function WebsiteStats({ data = [] }) {

  const VISIBLE_POINTS = 16;
  const CONTAINER_WIDTH = 500;

  const SLOT_WIDTH = CONTAINER_WIDTH / VISIBLE_POINTS;
  const chartWidth = Math.max(
    data.length * SLOT_WIDTH,
    CONTAINER_WIDTH
  );

  if (!data || data.length === 0) {
    return null;
  }

  const scrollRef = useRef(null);

  useEffect(() => {

    if (scrollRef.current) {

      scrollRef.current.scrollLeft =
        scrollRef.current.scrollWidth;

    }

  }, [data]);

  return (

    <div className="w-[727px] bg-[#0b1020] p-8 rounded-2xl">

      <h2 className="text-white text-3xl font-serif mb-2">
        Our Growth Over the Years
      </h2>

      <p className="text-gray-400 text-sm mb-6">
        A brief overview of our steady growth and performance in recent years.
      </p>

      <div className="h-[200px] flex">

        <div className="w-[60px] h-full">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={data}>
              <YAxis stroke="#94a3b8" />
            </LineChart>

          </ResponsiveContainer>

        </div>

        <div
          ref={scrollRef}
          className="flex-1 overflow-x-auto hide-scrollbar"
        >

          <div style={{ width: chartWidth, height: "100%" }}>

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={data}>

                <XAxis
                  dataKey="saleCode"
                  stroke="#94a3b8"
                  tickLine={false}
                />

                <Tooltip content={<CustomTooltip />} />

                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#38bdf8"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 5 }}
                  animationDuration={600}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>

  );
}