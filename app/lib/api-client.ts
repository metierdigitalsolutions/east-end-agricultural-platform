import {
  User,
  Event,
  AuthCredentials,
  RegisterData,
  ApiResponse,
} from "../types";
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "/api";

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "API request failed");
      }

      return data;
    } catch (error) {
      console.error("API Error:", error);
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  }

  // Authentication endpoints
  async login(
    credentials: AuthCredentials,
  ): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  }

  async register(
    userData: RegisterData,
  ): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.request("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }

  async logout(): Promise<ApiResponse> {
    return this.request("/auth/logout", { method: "POST" });
  }

  async refreshToken(): Promise<ApiResponse<{ token: string }>> {
    return this.request("/auth/refresh", { method: "POST" });
  }

  // User endpoints
  async getProfile(): Promise<ApiResponse<User>> {
    return this.request("/users/profile");
  }

  async updateProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.request("/users/profile", {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  // Investment endpoints
  async getInvestments(): Promise<ApiResponse<any[]>> {
    return this.request("/investments");
  }

  async createInvestment(investment: any): Promise<ApiResponse<any>> {
    return this.request("/investments", {
      method: "POST",
      body: JSON.stringify(investment),
    });
  }

  async getProfitHistory(): Promise<ApiResponse<any[]>> {
    return this.request("/investments/profits");
  }

  // Events endpoints
  async getEvents(): Promise<ApiResponse<Event[]>> {
    return this.request("/events");
  }

  async registerForEvent(eventId: string): Promise<ApiResponse> {
    return this.request(`/events/${eventId}/register`, { method: "POST" });
  }

  async unregisterFromEvent(eventId: string): Promise<ApiResponse> {
    return this.request(`/events/${eventId}/unregister`, { method: "DELETE" });
  }

  // Contact endpoints
  async sendContactMessage(message: any): Promise<ApiResponse<any>> {
    return this.request("/contact", {
      method: "POST",
      body: JSON.stringify(message),
    });
  }

  // EME Club endpoints
  async submitEMEApplication(application: any): Promise<ApiResponse<any>> {
    return this.request("/eme-club/apply", {
      method: "POST",
      body: JSON.stringify(application),
    });
  }

  async getEMEApplicationStatus(): Promise<ApiResponse<any>> {
    return this.request("/eme-club/status");
  }

  // Withdrawal endpoints
  async requestWithdrawal(
    amount: number,
    method: string,
  ): Promise<ApiResponse> {
    return this.request("/withdrawals", {
      method: "POST",
      body: JSON.stringify({ amount, method }),
    });
  }

  async getWithdrawalHistory(): Promise<ApiResponse<any[]>> {
    return this.request("/withdrawals");
  }
}

export const apiClient = new ApiClient();
