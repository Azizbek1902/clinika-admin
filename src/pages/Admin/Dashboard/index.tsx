// index.tsx
import React from 'react';
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
  CardContent,
  CardIcon,
  CardTitle,
  CardValue,
  ChartsGrid,
  ChartCard,
  ChartTitle,
  ServiceLegend,
  ServiceItem,
} from './styled';

import {
  statsCards,
  patientFlowChart,
  serviceDistributionChart,
  doctorStatsChart,
} from './helper';

const COLORS = ['#6366f1', '#22c55e', '#f97316', '#ef4444'];

const Dashboard: React.FC = () => {
  return (
    <DashboardWrapper>
      {/* KPI CARDS */}
      <CardsGrid>
        {statsCards.map((item) => (
          <Card key={item.title}>
            {item.icon && <CardIcon>{item.icon}</CardIcon>}
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardValue>
                {item.value.toLocaleString()} {item.unit}
              </CardValue>
            </CardContent>
          </Card>
        ))}
      </CardsGrid>

      {/* CHARTS */}
      <ChartsGrid>
        {/* LINE CHART */}
        <ChartCard>
          <ChartTitle>Haftalik bemor oqimi</ChartTitle>
          <ResponsiveContainer width='100%' height='85%'>
            <LineChart data={patientFlowChart}>
              <XAxis dataKey='day' />
              <YAxis />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='patients'
                stroke='#22c55e'
                strokeWidth={3}
                name='Qabul qilingan'
              />
              <Line
                type='monotone'
                dataKey='cancelled'
                stroke='#ef4444'
                strokeWidth={3}
                name='Bekor qilingan'
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* PIE CHART */}
        <ChartCard>
          <ChartTitle>Xizmatlar bo‘yicha taqsimot</ChartTitle>
          <ResponsiveContainer width='100%' height='70%'>
            <PieChart>
              <Pie
                data={serviceDistributionChart}
                dataKey='value'
                nameKey='name'
                innerRadius={60}
                outerRadius={100}
              >
                {serviceDistributionChart.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: any, name: any) => [
                  value?.toLocaleString(),
                  name,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>

          <ServiceLegend>
            {serviceDistributionChart.map((s, idx) => (
              <ServiceItem key={s.name} color={COLORS[idx % COLORS.length]}>
                {s.name}: {s.value}
              </ServiceItem>
            ))}
          </ServiceLegend>
        </ChartCard>
      </ChartsGrid>

      {/* BAR CHART */}
      <ChartCard style={{ marginTop: 16 }}>
        <ChartTitle>Doktorlar bo‘yicha bemorlar</ChartTitle>
        <ResponsiveContainer width='100%' height='85%'>
          <BarChart data={doctorStatsChart} barCategoryGap='30%'>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip formatter={(value: any) => value?.toLocaleString()} />
            <Bar
              dataKey='patients'
              fill='#6366f1'
              radius={[6, 6, 0, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </DashboardWrapper>
  );
};

export default Dashboard;
