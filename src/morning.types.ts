export type ProfilePayload = {
  email?: string;
  personId?: string;
  personAttributes?: {
    [key: string]: number | string;
  };
  companyId?: string;
  companyAttributes?: {
    [key: string]: number | string;
  };
};

export type MorningResponse<T> = {
  status: boolean;
  data: T;
};

export type Person = {
  id: string;
  email?: string;
  personId?: string;
  created: number;
  lastSeen: number;
  attributes: {
    [key: string]: number | string;
  }
}

export type PersonDetail = Person & {
  metrics: Array<Metric>
}

export type Company = {
  id: string;
  email?: string;
  personId?: string;
  created: number;
  lastSeen: number;
  attributes: {
    [key: string]: number | string;
  }
}

export type CompanyDetail = Company & {
  metrics: Array<Metric>
}

export type Metric = {
  id: string;
  value: number;
  totalValue: number;
  valueTrailingSevenDays: number | null;
  valueTrailingThirtyDays: number | null;
  valueMonthToDate: number | null;
  valueQuarterToDate: number | null;
  valueYearToDate: number | null;
  averageMonthToDate: number | null;
  averageQuarterToDate: number | null;
  averageYearToDate: number | null;
  averageTrailingSevenDays: number | null;
  averageTrailingThirtyDays: number | null;
  delta: number | null;
  deltaMonthToDate: number | null;
  deltaQuarterToDate: number | null;
  deltaYearToDate: number | null;
  standardDeviation: number | null;
  person?: Person;
  company?: Company;
}
