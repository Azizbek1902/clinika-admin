// helper.ts
export type Role = 'admin' | 'registrator';

export interface StatsCard {
  title: string;
  value: number;
  unit: string;
  icon?: string;
}

export interface PatientFlow {
  day: string;
  patients: number;
  cancelled: number;
}

export interface ServiceDistribution {
  name: string;
  value: number;
}

export interface DoctorStats {
  name: string;
  patients: number;
}

// KPI Cards
export const statsCards: StatsCard[] = [
  { title: 'Bugungi bemorlar', value: 86, unit: 'nafar', icon: '👤' },
  { title: 'Bugungi tushum', value: 12400000, unit: "so'm", icon: '💰' },
  { title: 'Bugungi qabul qilingan', value: 72, unit: 'nafar', icon: '🩺' },
  { title: 'Bekor qilingan qabullar', value: 7, unit: 'ta', icon: '❌' },
];

// LineChart → haftalik bemor oqimi
export const patientFlowChart: PatientFlow[] = [
  { day: 'Du', patients: 24, cancelled: 2 },
  { day: 'Se', patients: 31, cancelled: 4 },
  { day: 'Ch', patients: 28, cancelled: 3 },
  { day: 'Pa', patients: 35, cancelled: 5 },
  { day: 'Ju', patients: 42, cancelled: 6 },
  { day: 'Sh', patients: 38, cancelled: 4 },
  { day: 'Ya', patients: 30, cancelled: 2 },
];

// PieChart → Xizmatlar bo‘yicha taqsimot
// Recharts uchun ChartDataInput type bilan moslashtiramiz
export const serviceDistributionChart: { [key: string]: number | string }[] = [
  { name: 'Stomatologiya', value: 120 },
  { name: 'Terapiya', value: 95 },
  { name: 'Diagnostika', value: 70 },
  { name: 'Jarrohlik', value: 40 },
];

// BarChart → Doktorlar bo‘yicha bemorlar
export const doctorStatsChart: { [key: string]: number | string }[] = [
  { name: 'Dr. Aliyev', patients: 42 },
  { name: 'Dr. Karimov', patients: 38 },
  { name: 'Dr. Ismoilov', patients: 35 },
  { name: 'Dr. Xasanova', patients: 33 },
  { name: 'Dr. Nazarov', patients: 28 },
  { name: 'Dr. Raximov', patients: 25 },
];
