// styled.ts
import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  padding: 24px;
  background: #f5f7fa;
  min-height: 100vh;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardIcon = styled.span`
  font-size: 28px;
`;

export const CardContent = styled.div``;

export const CardTitle = styled.div`
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 6px;
`;

export const CardValue = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #1f2937;
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
`;

export const ChartCard = styled(Card)`
  height: 400px;
  flex-direction: column;
`;

export const ChartTitle = styled.h3`
  margin: 0 0 20px;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

export const ServiceLegend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`;

export const ServiceItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #1f2937;
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  }
`;
