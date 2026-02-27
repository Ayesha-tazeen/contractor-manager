import { useEffect, useState } from "react";
import { getReport } from "../../services/clientApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ExpenditureChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getReport().then((res) => setData(res.data));
  }, []);

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Monthly Expenditure</h2>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="_id" stroke="#1f2937" />
            <YAxis stroke="#1f2937" />
            <Tooltip />
            <Bar dataKey="total" fill="#facc15" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    marginTop: 30,
    background: "white",
    padding: 25,
    borderRadius: 20,
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },

  title: {
    marginBottom: 20,
    color: "#1f2937",
  },
};