import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, User } from "../../../types";
export async function POST(request: NextRequest) {
  try {
    const { name, email, whatsapp, password } = await request.json();

    // Simulate validation
    if (!name || !email || !whatsapp || !password) {
      const response: ApiResponse = {
        success: false,
        error: "All fields are required",
      };
      return NextResponse.json(response, { status: 400 });
    }

    if (password.length < 6) {
      const response: ApiResponse = {
        success: false,
        error: "Password must be at least 6 characters",
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Check if user already exists (simulate database check)
    if (email === "john@farmer.com") {
      const response: ApiResponse = {
        success: false,
        error: "User with this email already exists",
      };
      return NextResponse.json(response, { status: 409 });
    }

    // Create new user (simulate database creation)
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      whatsapp,
      isEMEMember: false,
      participationAmount: 0,
      nextWithdrawal: "",
      referralBonus: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Create mock JWT token
    const token = `mock-jwt-token-${newUser.id}-${Date.now()}`;

    const response: ApiResponse<{ user: User; token: string }> = {
      success: true,
      data: {
        user: newUser,
        token,
      },
      message: "Registration successful",
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: "Server error occurred",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
