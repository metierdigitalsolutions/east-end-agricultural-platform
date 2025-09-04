export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  whatsapp?: string;
  role?: "user" | "admin" | "eme_subscriber";
  isEMEMember: boolean;
  participationAmount: number;
  nextWithdrawal: string;
  referralBonus: number;
  createdAt: string;
  updatedAt: string;
  status?: "active" | "pending" | "suspended";
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  whatsapp?: string;
}

export interface FormSubmission {
  id: string;
  type: "project_proposal" | "contact" | "eme_membership";
  submittedBy: string;
  submittedAt: string;
  status: "pending" | "reviewed" | "approved" | "rejected";
  data: any;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "seminar" | "workshop" | "conference" | "training";
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  maxAttendees: number;
  currentAttendees: number;
  createdAt: string;
  updatedAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  subject: string;
  message: string;
  submittedAt: string;
  status: "new" | "in_progress" | "resolved";
}

export interface EMEMembershipSubmission {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  tier: "bronze" | "silver" | "gold" | "platinum";
  participationAmount: number;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  documents?: string[];
}
