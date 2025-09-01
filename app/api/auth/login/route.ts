import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, User } from "../../../types";
// Mock user data
const mockUsers = [
  {
    id: "1",
    name: "John Farmer",
    email: "john@farmer.com",
    password: "password123", // In real app, this would be hashed
    whatsapp: "+1234567890",
    isEMEMember: true,
    participationAmount: 500,
    nextWithdrawal: "2024-09-15",
    referralBonus: 75,
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-08-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Sarah Investor",
    email: "sarah@investor.com",
    password: "invest2024",
    whatsapp: "+0987654321",
    isEMEMember: false,
    participationAmount: 250,
    nextWithdrawal: "2024-09-20",
    referralBonus: 25,
    createdAt: "2024-02-10T00:00:00Z",
    updatedAt: "2024-08-05T00:00:00Z",
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Simulate database lookup
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      const response: ApiResponse = {
        success: false,
        error: "Invalid email or password",
      };
      return NextResponse.json(response, { status: 401 });
    }

    // Create mock JWT token (in real app, use proper JWT)
    const token = `mock-jwt-token-${user.id}-${Date.now()}`;

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    const response: ApiResponse<{ user: User; token: string }> = {
      success: true,
      data: {
        user: userWithoutPassword as User,
        token,
      },
      message: "Login successful",
    };

    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: "Server error occurred",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
