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
import { Search, Eye, Check, X, Clock } from "lucide-react";
import { User, FormSubmission } from "../../types";
import { toast } from "sonner";
interface FormSubmissionsProps {
  currentUser: User;
}

export function FormSubmissions({ currentUser }: FormSubmissionsProps) {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<
    FormSubmission[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] =
    useState<FormSubmission | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data
  useEffect(() => {
    const mockSubmissions: FormSubmission[] = [
      {
        id: "1",
        type: "project_proposal",
        submittedBy: "John Farmer",
        submittedAt: "2024-08-15T10:30:00Z",
        status: "pending",
        data: {
          projectTitle: "Organic Rice Farm Expansion",
          capitalRequired: 50000,
          expectedROI: "25% annually",
          location: "Delta State",
          duration: "12 months",
          description:
            "Expansion of existing organic rice farm to increase production capacity...",
        },
      },
      {
        id: "2",
        type: "project_proposal",
        submittedBy: "Sarah Smith",
        submittedAt: "2024-08-14T14:15:00Z",
        status: "reviewed",
        data: {
          projectTitle: "Poultry Farm Modernization",
          capitalRequired: 75000,
          expectedROI: "30% annually",
          location: "Lagos State",
          duration: "8 months",
          description:
            "Upgrading existing poultry farm with modern equipment and facilities...",
        },
      },
      {
        id: "3",
        type: "project_proposal",
        submittedBy: "Mike Johnson",
        submittedAt: "2024-08-13T09:20:00Z",
        status: "approved",
        data: {
          projectTitle: "Cassava Processing Plant",
          capitalRequired: 120000,
          expectedROI: "35% annually",
          location: "Ogun State",
          duration: "15 months",
          description:
            "Establishment of a modern cassava processing plant for starch production...",
        },
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
          submission.submittedBy
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          (submission.data.projectTitle &&
            submission.data.projectTitle
              .toLowerCase()
              .includes(searchTerm.toLowerCase())),
      );
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter(
        (submission) => submission.type === typeFilter,
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (submission) => submission.status === statusFilter,
      );
    }

    setFilteredSubmissions(filtered);
  }, [submissions, searchTerm, typeFilter, statusFilter]);

  const handleViewSubmission = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setIsDialogOpen(true);
  };

  const handleUpdateStatus = (
    submissionId: string,
    newStatus: "pending" | "reviewed" | "approved" | "rejected",
  ) => {
    setSubmissions((prev) =>
      prev.map((submission) =>
        submission.id === submissionId
          ? { ...submission, status: newStatus }
          : submission,
      ),
    );
    toast.success(`Submission ${newStatus}`);
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "approved":
        return "default";
      case "reviewed":
        return "secondary";
      case "pending":
        return "outline";
      case "rejected":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getTypeDisplayName = (type: string) => {
    switch (type) {
      case "project_proposal":
        return "Project Proposal";
      case "contact":
        return "Contact Form";
      case "eme_membership":
        return "EME Membership";
      default:
        return type;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Form Submissions</CardTitle>
          <CardDescription>
            Review and manage all form submissions
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
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="project_proposal">
                  Project Proposals
                </SelectItem>
                <SelectItem value="contact">Contact Forms</SelectItem>
                <SelectItem value="eme_membership">EME Membership</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Submitted By</TableHead>
                  <TableHead>Title/Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>
                      <Badge variant="outline">
                        {getTypeDisplayName(submission.type)}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      {submission.submittedBy}
                    </TableCell>
                    <TableCell>
                      {submission.data.projectTitle ||
                        submission.data.subject ||
                        "N/A"}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(submission.status)}>
                        {submission.status.toUpperCase()}
                      </Badge>
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
                        {submission.status === "pending" && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleUpdateStatus(submission.id, "approved")
                              }
                              className="text-green-600 hover:text-green-700"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleUpdateStatus(submission.id, "rejected")
                              }
                              className="text-red-600 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        {submission.status === "reviewed" && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleUpdateStatus(submission.id, "approved")
                            }
                            className="text-green-600 hover:text-green-700"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
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
            <DialogTitle>
              {getTypeDisplayName(selectedSubmission?.type || "")} Details
            </DialogTitle>
            <DialogDescription>
              Submitted by {selectedSubmission?.submittedBy} on{" "}
              {selectedSubmission &&
                new Date(selectedSubmission.submittedAt).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          {selectedSubmission && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <Badge
                    variant={getStatusBadgeVariant(selectedSubmission.status)}
                    className="mt-1"
                  >
                    {selectedSubmission.status.toUpperCase()}
                  </Badge>
                </div>
                <div>
                  <label className="text-sm font-medium">Type</label>
                  <Badge variant="outline" className="mt-1">
                    {getTypeDisplayName(selectedSubmission.type)}
                  </Badge>
                </div>
              </div>

              {selectedSubmission.type === "project_proposal" && (
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Project Title</label>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedSubmission.data.projectTitle}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">
                        Capital Required
                      </label>
                      <p className="text-sm text-gray-600 mt-1">
                        $
                        {selectedSubmission.data.capitalRequired?.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">
                        Expected ROI
                      </label>
                      <p className="text-sm text-gray-600 mt-1">
                        {selectedSubmission.data.expectedROI}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Location</label>
                      <p className="text-sm text-gray-600 mt-1">
                        {selectedSubmission.data.location}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Duration</label>
                      <p className="text-sm text-gray-600 mt-1">
                        {selectedSubmission.data.duration}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      value={selectedSubmission.data.description}
                      readOnly
                      className="mt-1 min-h-24"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                <Button
                  onClick={() => setIsDialogOpen(false)}
                  variant="outline"
                >
                  Close
                </Button>
                {selectedSubmission.status === "pending" && (
                  <>
                    <Button
                      onClick={() => {
                        handleUpdateStatus(selectedSubmission.id, "approved");
                        setIsDialogOpen(false);
                      }}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => {
                        handleUpdateStatus(selectedSubmission.id, "rejected");
                        setIsDialogOpen(false);
                      }}
                      variant="destructive"
                    >
                      Reject
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
