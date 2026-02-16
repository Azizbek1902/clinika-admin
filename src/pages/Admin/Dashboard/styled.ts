// styled.ts
import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  padding: 24px;
  background: #f5f7fa;
  min-height: 100vh;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
`;

export const CardTitle = styled.div`
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 8px;
`;

export const CardValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
`;

export const ChartCard = styled(Card)`
  height: 360px;
`;

export const ChartTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;
