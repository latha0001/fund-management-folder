import { Pie } from 'react-chartjs-2';

const Dashboard = ({ fundData }) => {
    const data = {
        labels: fundData.map(fund => fund.name),
        datasets: [
            {
                data: fundData.map(fund => fund.total_value),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return <Pie data={data} />;
};

export default Dashboard;
