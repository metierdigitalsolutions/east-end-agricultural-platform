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
import { Search, Eye, Check, X, DollarSign, Phone } from "lucide-react";
import { User, EMEMembershipSubmission } from "../../types";
import { toast } from "sonner";
interface EMEMembershipSubmissionsProps {
  currentUser: User;
}

export function EMEMembershipSubmissions({
  currentUser,
}: EMEMembershipSubmissionsProps) {
  const [submissions, setSubmissions] = useState<EMEMembershipSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<
    EMEMembershipSubmission[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] =
    useState<EMEMembershipSubmission | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data
  useEffect(() => {
    const mockSubmissions: EMEMembershipSubmission[] = [
      {
        id: "1",
        name: "Jennifer Adams",
        email: "jennifer@example.com",
        whatsapp: "+1234567890",
        tier: "gold",
        participationAmount: 5000,
        submittedAt: "2024-08-15T10:30:00Z",
        status: "pending",
        documents: ["id_card.pdf", "bank_statement.pdf"],
      },
      {
        id: "2",
        name: "Michael Brown",
        email: "michael@example.com",
        whatsapp: "+1234567891",
        tier: "silver",
        participationAmount: 2500,
        submittedAt: "2024-08-14T14:15:00Z",
        status: "approved",
        documents: ["id_card.pdf", "proof_of_address.pdf"],
      },
      {
        id: "3",
        name: "Sarah Wilson",
        email: "sarah@example.com",
        whatsapp: "+1234567892",
        tier: "platinum",
        participationAmount: 10000,
        submittedAt: "2024-08-13T09:20:00Z",
        status: "pending",
        documents: [
          "id_card.pdf",
          "bank_statement.pdf",
          "investment_proof.pdf",
        ],
      },
      {
        id: "4",
        name: "James Rodriguez",
        email: "james@example.com",
        whatsapp: "+1234567893",
        tier: "bronze",
        participationAmount: 1000,
        submittedAt: "2024-08-12T16:45:00Z",
        status: "rejected",
        documents: ["id_card.pdf"],
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
          submission.email.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (submission) => submission.status === statusFilter,
      );
    }

    if (tierFilter !== "all") {
      filtered = filtered.filter(
        (submission) => submission.tier === tierFilter,
      );
    }

    setFilteredSubmissions(filtered);
  }, [submissions, searchTerm, statusFilter, tierFilter]);

  const handleViewSubmission = (submission: EMEMembershipSubmission) => {
    setSelectedSubmission(submission);
    setIsDialogOpen(true);
  };

  const handleUpdateStatus = (
    submissionId: string,
    newStatus: "pending" | "approved" | "rejected",
  ) => {
    setSubmissions((prev) =>
      prev.map((submission) =>
        submission.id === submissionId
          ? { ...submission, status: newStatus }
          : submission,
      ),
    );
    toast.success(`Application ${newStatus}`);
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "approved":
        return "default";
      case "pending":
        return "secondary";
      case "rejected":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getTierBadgeVariant = (tier: string) => {
    switch (tier) {
      case "platinum":
        return "default";
      case "gold":
        return "secondary";
      case "silver":
        return "outline";
      case "bronze":
        return "outline";
      default:
        return "outline";
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "platinum":
        return "text-purple-600";
      case "gold":
        return "text-yellow-600";
      case "silver":
        return "text-gray-600";
      case "bronze":
        return "text-orange-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>EME Membership Applications</CardTitle>
          <CardDescription>
            Review and manage EME Club membership applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={tierFilter} onValueChange={setTierFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Filter by tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tiers</SelectItem>
                <SelectItem value="bronze">Bronze</SelectItem>
                <SelectItem value="silver">Silver</SelectItem>
                <SelectItem value="gold">Gold</SelectItem>
                <SelectItem value="platinum">Platinum</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead>Participation</TableHead>
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
                      <Badge
                        variant={getTierBadgeVariant(submission.tier)}
                        className={getTierColor(submission.tier)}
                      >
                        {submission.tier.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm font-medium">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {submission.participationAmount.toLocaleString()}
                      </div>
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
            <DialogTitle>EME Membership Application</DialogTitle>
            <DialogDescription>
              Application from {selectedSubmission?.name} submitted on{" "}
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
                    {selectedSubmission.status.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Membership Tier</label>
                  <Badge
                    variant={getTierBadgeVariant(selectedSubmission.tier)}
                    className={`mt-1 ${getTierColor(selectedSubmission.tier)}`}
                  >
                    {selectedSubmission.tier.toUpperCase()}
                  </Badge>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Participation Amount
                  </label>
                  <div className="flex items-center text-lg font-semibold mt-1">
                    <DollarSign className="h-5 w-5 mr-1" />
                    {selectedSubmission.participationAmount.toLocaleString()}
                  </div>
                </div>
              </div>

              {selectedSubmission.documents &&
                selectedSubmission.documents.length > 0 && (
                  <div>
                    <label className="text-sm font-medium">
                      Uploaded Documents
                    </label>
                    <div className="mt-2 space-y-2">
                      {selectedSubmission.documents.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                        >
                          <span className="text-sm">{doc}</span>
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                      ))}
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
                      <Check className="mr-2 h-4 w-4" />
                      Approve
                    </Button>
                    <Button
                      onClick={() => {
                        handleUpdateStatus(selectedSubmission.id, "rejected");
                        setIsDialogOpen(false);
                      }}
                      variant="destructive"
                    >
                      <X className="mr-2 h-4 w-4" />
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
