// index.tsx
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import {
  DashboardWrapper,
  CardsGrid,
  Card,
  CardTitle,
  CardValue,
  ChartsGrid,
  ChartCard,
  ChartTitle,
} from './styled';

import {
  statsCards,
  stockFlowChart,
  categoryChart,
  stockStatusChart,
} from './helper';

const COLORS = ['#6366f1', '#22c55e', '#f97316', '#ef4444'];

const Dashboard = () => {
  return (
    <DashboardWrapper>
      {/* STAT CARDS */}
      <CardsGrid>
        {statsCards.map((item) => (
          <Card key={item.title}>
            <CardTitle>{item.title}</CardTitle>
            <CardValue>
              {item.value} {item.unit}
            </CardValue>
          </Card>
        ))}
      </CardsGrid>

      {/* CHARTS */}
      <ChartsGrid>
        {/* LINE CHART */}
        <ChartCard>
          <ChartTitle>Haftalik kirim / chiqim</ChartTitle>
          <ResponsiveContainer width='100%' height='85%'>
            <LineChart data={stockFlowChart}>
              <XAxis dataKey='day' />
              <YAxis />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='in'
                stroke='#22c55e'
                strokeWidth={3}
                name='Kirim'
              />
              <Line
                type='monotone'
                dataKey='out'
                stroke='#ef4444'
                strokeWidth={3}
                name='Chiqim'
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* PIE CHART */}
        <ChartCard>
          <ChartTitle>Kategoriya bo‘yicha mahsulotlar</ChartTitle>
          <ResponsiveContainer width='100%' height='85%'>
            <PieChart>
              <Pie
                data={categoryChart}
                dataKey='value'
                nameKey='name'
                innerRadius={60}
                outerRadius={90}
              >
                {categoryChart.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </ChartsGrid>

      {/* BAR CHART */}
      <ChartCard style={{ marginTop: 16 }}>
        <ChartTitle>Ombor holati</ChartTitle>
        <ResponsiveContainer width='100%' height='85%'>
          <BarChart data={stockStatusChart}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='value' fill='#6366f1' radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </DashboardWrapper>
  );
};

export default Dashboard;
