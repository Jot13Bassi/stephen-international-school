export type PortalModalType =
  | 'none'
  | 'tc'
  | 'admission'
  | 'fee'
  | 'books'
  | 'calendar'
  | 'disclosure'
  | 'sports-curriculum';

export interface BookOutlet {
  name: string;
  location: string;
  phone: string;
  timings: string;
}

export interface ZoneOutlets {
  zoneName: string;
  zoneRegion: string;
  outlets: BookOutlet[];
  classesCovered: string;
  tags: string[];
}

export interface FeeTier {
  category: string;
  grades: string;
  admissionFee: number;
  tuitionFeeQuarterly: number;
  annualCharges: number;
  activitiesFee: number;
}

export interface SampleTC {
  tcNumber: string;
  admissionNo: string;
  studentName: string;
  fatherName: string;
  motherName: string;
  dob: string;
  classPassed: string;
  issueDate: string;
  reason: string;
  conduct: string;
}

export interface CalendarEvent {
  month: string;
  title: string;
  date: string;
  category: 'academic' | 'sports' | 'holiday' | 'exam';
  description: string;
}
