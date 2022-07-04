import { CartesianGrid, Tooltip, Legend } from "recharts";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import { ISlicedGraphInfo } from "./types";

function Graph(dataArray: ISlicedGraphInfo[], dataKey: string) {
  return (
    <LineChart
      width={900}
      height={440}
      data={dataArray}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

export default Graph;
