import { create } from "zustand";
import axios from "axios";

export interface Agency {
  Id: number;
  AgencyName: string;
  AgencyLic: string | null;
  AgentLic: string | null;
  Address: string;
  City: string;
  Zip: string;
  State: string;
  Phone: string;
  Email: string;
  DisplayName: string | null;
  Logo: string;
  termsCondition: string | null;
  StartDate: string;
  Status: string;
  AboutUs: string;
  Googlemapurl: string | null;
  Website: string;
  Base64Logo: string | null;
  PaymentGateway: string | null;
  PaymentUrl: string | null;
  SmsServiceNumber: string | null;
  PackageType: string;
  ApplicationId: string;
  BillingType: string;
  CloseDate: string | null;
  ImpersonationKey: string | null;
  totalAgents: number;
  totalLeads: number;
  subscriptionPlan: string;
}

interface AgencyStats {
  totalSubscribedPlans: number;
  totalAgencies: number;
  totalAgents: number;
  totalLeads: number;
}

interface AgencyStoreState {
  stats: AgencyStats;
  agencies: Agency[];
  loading: boolean;
  error: string | null;
  fetchAgencies: () => Promise<void>;
}

export const useAgencyStore = create<AgencyStoreState>((set) => ({
  stats: {
    totalSubscribedPlans: 0,
    totalAgencies: 0,
    totalAgents: 0,
    totalLeads: 0,
  },
  agencies: [],
  loading: false,
  error: null,
  
  /* eslint-disable @typescript-eslint/no-explicit-any */

  fetchAgencies: async () => {
    const API_BASE_URL = "https://dev-api.bindrocket.com";
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${API_BASE_URL}/api/admin/overview`);

      if (res.data && res.data.success) {
        const {
          totalSubscribedPlans,
          totalAgencies,
          totalAgents,
          totalLeads,
          topAgencies,
        } = res.data.data;

        set({
          stats: {
            totalSubscribedPlans,
            totalAgencies,
            totalAgents,
            totalLeads,
          },
          agencies: topAgencies,
          loading: false,
        });
      } else {
        set({ error: "Invalid API response", loading: false });
      }
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch", loading: false });
    }
  },
}));
