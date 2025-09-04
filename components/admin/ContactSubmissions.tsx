import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Search, Eye, MessageSquare, Phone } from "lucide-react";
import { User, ContactSubmission } from "../../types";
import { toast } from "sonner";
interface ContactSubmissionsProps {
  currentUser: User;
}

export function ContactSubmissions({ currentUser }: ContactSubmissionsProps) {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<
    ContactSubmission[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] =
    useState<ContactSubmission | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data
  useEffect(() => {
    const mockSubmissions: ContactSubmission[] = [
      {
        id: "1",
        name: "Alice Johnson",
        email: "alice@example.com",
        whatsapp: "+1234567890",
        subject: "Investment Inquiry",
        message:
          "I am interested in learning more about your agricultural investment opportunities. Could you provide more details about the minimum investment amounts and expected returns?",
        submittedAt: "2024-08-15T10:30:00Z",
        status: "new",
      },
      {
        id: "2",
        name: "Robert Smith",
        email: "robert@example.com",
        whatsapp: "+1234567891",
        subject: "Partnership Proposal",
        message:
          "I represent a group of investors who are interested in partnering with East End Agro for large-scale agricultural projects. We would like to discuss potential collaboration opportunities.",
        submittedAt: "2024-08-14T14:15:00Z",
        status: "in_progress",
      },
      {
        id: "3",
        name: "Maria Garcia",
        email: "maria@example.com",
        whatsapp: "+1234567892",
        subject: "EME Club Information",
        message:
          "Hi, I would like to know more about the EME Club membership benefits and how to apply. What are the requirements and associated costs?",
        submittedAt: "2024-08-13T09:20:00Z",
        status: "resolved",
      },
      {
        id: "4",
        name: "David Wilson",
        email: "david@example.com",
        whatsapp: "+1234567893",
        subject: "Technical Support",
        message:
          "I am having trouble accessing my dashboard. Could you please help me reset my password or provide assistance with logging in?",
        submittedAt: "2024-08-12T16:45:00Z",
        status: "new",
      },
    ];
    setSubmissions(mockSubmissions);
    setFilteredSubmissions(mockSubmissions);
  }, []);

  useEffect(() => {
    let filtered = submissions;

    if (searchTerm) {
      filtered = filtered.filter(
        (submission) =>
          submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          submission.subject.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (submission) => submission.status === statusFilter,
      );
    }

    setFilteredSubmissions(filtered);
  }, [submissions, searchTerm, statusFilter]);

  const handleViewSubmission = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    setIsDialogOpen(true);
  };

  const handleUpdateStatus = (
    submissionId: string,
    newStatus: "new" | "in_progress" | "resolved",
  ) => {
    setSubmissions((prev) =>
      prev.map((submission) =>
        submission.id === submissionId
          ? { ...submission, status: newStatus }
          : submission,
      ),
    );
    toast.success(`Status updated to ${newStatus}`);
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "resolved":
        return "default";
      case "in_progress":
        return "secondary";
      case "new":
        return "outline";
      default:
        return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500";
      case "in_progress":
        return "bg-yellow-500";
      case "resolved":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Form Submissions</CardTitle>
          <CardDescription>
            Manage customer inquiries and support requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search submissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contact Info</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{submission.name}</div>
                        <div className="text-sm text-gray-500">
                          {submission.email}
                        </div>
                        <div className="text-xs text-gray-400 flex items-center mt-1">
                          <Phone className="h-3 w-3 mr-1" />
                          {submission.whatsapp}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs">
                        <div className="font-medium truncate">
                          {submission.subject}
                        </div>
                        <div className="text-sm text-gray-500 truncate">
                          {submission.message}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${getStatusColor(submission.status)}`}
                        ></div>
                        <Badge
                          variant={getStatusBadgeVariant(submission.status)}
                        >
                          {submission.status.replace("_", " ").toUpperCase()}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(submission.submittedAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewSubmission(submission)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Select
                          value={submission.status}
                          onValueChange={(
                            value: "new" | "in_progress" | "resolved",
                          ) => handleUpdateStatus(submission.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="in_progress">
                              In Progress
                            </SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Contact Submission Details</DialogTitle>
            <DialogDescription>
              Submitted by {selectedSubmission?.name} on{" "}
              {selectedSubmission &&
                new Date(selectedSubmission.submittedAt).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          {selectedSubmission && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedSubmission.name}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedSubmission.email}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">WhatsApp</label>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedSubmission.whatsapp}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <Badge
                    variant={getStatusBadgeVariant(selectedSubmission.status)}
                    className="mt-1"
                  >
                    {selectedSubmission.status.replace("_", " ").toUpperCase()}
                  </Badge>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Subject</label>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedSubmission.subject}
                </p>
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  value={selectedSubmission.message}
                  readOnly
                  className="mt-1 min-h-32"
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  onClick={() => setIsDialogOpen(false)}
                  variant="outline"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      `mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.subject}`,
                    );
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Reply
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      `https://wa.me/${selectedSubmission.whatsapp.replace("+", "")}`,
                    );
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
