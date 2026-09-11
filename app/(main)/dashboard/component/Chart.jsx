'use client'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";



export default function ChartPage(){

    const data = [
  {
    name: 'Jan',
    uv: 4000,
    // pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    // pv: 1398,
    amt: 2210,
  },
  {
    name: 'Marc',
    uv: 2000,
    // pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    // pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    // pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    // pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 3490,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sept',
    uv: 3490,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 3490,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3490,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3490,
    // pv: 4300,
    amt: 2100,
  },
];

    return(
 <div className='mt-20'>

  <div className="flex items-center justify-between">
    <h1 className="text-2xl font-bold text-gray-400">Progress Bar</h1>
    <div className="flex items-center gap-2">
                        <h1 className="text-xl text-gray-400">Filter:</h1>
                        <select name="" id="" className="border p-2">
                            <option value="">Select Year</option>
                             <option value="">2022</option>
                              <option value="">2023</option>
                               <option value="">2024</option>
                        </select>
                    </div>
  </div>
  
     <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 30,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="uv" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
     
    </BarChart>
  
 
             
        </div>
    )
}