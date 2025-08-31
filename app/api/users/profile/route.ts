import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, User } from "../../../types";
// Mock function to verify token and get user
function getUserFromToken(token: string): User | null {
  // In real app, verify JWT token
  if (token?.startsWith("mock-jwt-token-")) {
    return {
      id: "1",
      name: "John Farmer",
      email: "john@farmer.com",
      whatsapp: "+1234567890",
      isEMEMember: true,
      participationAmount: 500,
      nextWithdrawal: "2024-09-15",
      referralBonus: 75,
      createdAt: "2024-01-15T00:00:00Z",
      updatedAt: "2024-08-01T00:00:00Z",
    };
  }
  return null;
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      const response: ApiResponse = {
        success: false,
        error: "No token provided",
      };
      return NextResponse.json(response, { status: 401 });
    }

    const user = getUserFromToken(token);
    if (!user) {
      const response: ApiResponse = {
        success: false,
        error: "Invalid token",
      };
      return NextResponse.json(response, { status: 401 });
    }

    const response: ApiResponse<User> = {
      success: true,
      data: user,
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

export async function PUT(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      const response: ApiResponse = {
        success: false,
        error: "No token provided",
      };
      return NextResponse.json(response, { status: 401 });
    }

    const currentUser = getUserFromToken(token);
    if (!currentUser) {
      const response: ApiResponse = {
        success: false,
        error: "Invalid token",
      };
      return NextResponse.json(response, { status: 401 });
    }

    const updateData = await request.json();

    // Update user (simulate database update)
    const updatedUser: User = {
      ...currentUser,
      ...updateData,
      updatedAt: new Date().toISOString(),
    };

    const response: ApiResponse<User> = {
      success: true,
      data: updatedUser,
      message: "Profile updated successfully",
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
