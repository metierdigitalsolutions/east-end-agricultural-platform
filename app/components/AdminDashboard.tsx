import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Users,
  FileText,
  Calendar,
  MessageSquare,
  UserPlus,
  Settings,
} from "lucide-react";
import { User } from "../types";
import { UserManagement } from "./admin/UserManagement";
import { FormSubmissions } from "./admin/FormSubmissions";
import { EventManagement } from "./admin/EventManagement";
import { ContactSubmissions } from "./admin/ContactSubmissions";
import { EMEMembershipSubmissions } from "./admin/EMEMembershipSubmissions";
import { useRouter } from "next/navigation";
interface AdminDashboardProps {
  user: User;
}

export function AdminDashboard({ user }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock stats data
  const stats = {
    totalUsers: 156,
    pendingSubmissions: 12,
    upcomingEvents: 3,
    newContacts: 8,
    pendingEME: 5,
  };

  const canAccessUserManagement = user.role === "admin";
  const canAccessFormSubmissions =
    user.role === "admin" || user.role === "eme_subscriber";
  const canManageEvents = user.role === "admin";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}</p>
          <Badge
            variant={user.role === "admin" ? "default" : "secondary"}
            className="mt-2"
          >
            {user.role === "admin" ? "Administrator" : "EME Subscriber"}
          </Badge>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {canAccessUserManagement && (
              <TabsTrigger value="users">Users</TabsTrigger>
            )}
            {canAccessFormSubmissions && (
              <TabsTrigger value="submissions">Submissions</TabsTrigger>
            )}
            {canManageEvents && (
              <TabsTrigger value="events">Events</TabsTrigger>
            )}
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="eme">EME Club</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalUsers}</div>
                  <p className="text-xs text-muted-foreground">
                    +12 from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pending Submissions
                  </CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {stats.pendingSubmissions}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Require review
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Events
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {stats.upcomingEvents}
                  </div>
                  <p className="text-xs text-muted-foreground">Next 30 days</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    New Contacts
                  </CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.newContacts}</div>
                  <p className="text-xs text-muted-foreground">
                    Awaiting response
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pending EME
                  </CardTitle>
                  <UserPlus className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.pendingEME}</div>
                  <p className="text-xs text-muted-foreground">Applications</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Latest actions in the system
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New user registered</p>
                      <p className="text-xs text-muted-foreground">
                        John Doe - 2 minutes ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Project proposal submitted
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Sarah Smith - 15 minutes ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        EME membership application
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Mike Johnson - 1 hour ago
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {canManageEvents && (
                    <Button
                      onClick={() => setActiveTab("events")}
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Create New Event
                    </Button>
                  )}
                  {canAccessUserManagement && (
                    <Button
                      onClick={() => setActiveTab("users")}
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Manage Users
                    </Button>
                  )}
                  <Button
                    onClick={() => setActiveTab("contacts")}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Review Contacts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {canAccessUserManagement && (
            <TabsContent value="users">
              <UserManagement currentUser={user} />
            </TabsContent>
          )}

          {canAccessFormSubmissions && (
            <TabsContent value="submissions">
              <FormSubmissions currentUser={user} />
            </TabsContent>
          )}

          {canManageEvents && (
            <TabsContent value="events">
              <EventManagement currentUser={user} />
            </TabsContent>
          )}

          <TabsContent value="contacts">
            <ContactSubmissions currentUser={user} />
          </TabsContent>

          <TabsContent value="eme">
            <EMEMembershipSubmissions currentUser={user} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
