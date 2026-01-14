export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'camera' | 'fire' | 'shield' | 'lock';
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SecurityType {
  HOME = 'HOME',
  BUSINESS = 'BUSINESS'
}

export interface LeadForm {
  name: string;
  phone: string;
  email: string;
  type: SecurityType;
  interest: string;
}