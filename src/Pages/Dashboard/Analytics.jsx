/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import useJoinCamps from "../../hooks/useJoinCamps";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#0088FE',];


const Analytics = () => {
    const [registers] = useJoinCamps();

    // coustom shape for the ber chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div>
            <Helmet>
                <title>Dashboard | Analytics</title>
            </Helmet>
            <div className="mt-12">
                <BarChart
                    width={500}
                    height={300}
                    data={registers}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="campName" />
                    <YAxis />
                    <Bar dataKey="price" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {registers.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Analytics;