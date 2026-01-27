"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

import {
  Mail,
  MessageSquare,
  Edit,
  Trophy,
  TrendingUp,
  TrendingDown,
  Users,
  Calendar,
  BarChart3,
  User,
  Briefcase,
} from "lucide-react";

export default function EmployeeDetailsAdmin() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      {/* BREADCRUMB */}
      <p className="text-sm text-muted-foreground">
        Employees &nbsp;›&nbsp;{" "}
        <span className="text-slate-900 font-medium">
          Alex Rivera Profile
        </span>
      </p>

      {/* HEADER */}
      <Card>
        <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://i.pravatar.cc/150?img=15" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>

            <div>
              <h1 className="text-xl font-semibold">Alex Rivera</h1>
              <p className="text-sm text-muted-foreground">
                Senior Software Engineer
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary">Engineering Department</Badge>
                <Badge className="bg-green-100 text-green-700">
                  ● In Office
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Edit className="h-4 w-4 mr-2" />
              Edit Employee
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* PERFORMANCE OVERVIEW */}
      <div>
        <h2 className="text-base font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Performance Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Stat title="Task Completion Rate" value="94%" delta="+2.4%" />
          <Stat title="Productivity Score" value="88/100" delta="-1.2%" down />
          <Stat title="Active Projects" value="4" note="Across 2 teams" />
          <Stat title="Company Tenure" value="24 Months" note="Joined Oct 2021" />
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <InfoCard title={<><User className="h-4 w-4 inline mr-2" />Personal Information</>}>
            <InfoRow label="EMAIL ADDRESS" value="alex.rivera@techcorp.com" />
            <InfoRow label="PHONE NUMBER" value="+1 (555) 123-4567" />
            <InfoRow
              label="ADDRESS"
              value="123 Silicon Drive, Mountain View, CA 94043"
            />
            <InfoRow
              label="EMERGENCY CONTACT"
              value="Maria Rivera (Spouse) - +1 (555) 987-6543"
            />
          </InfoCard>

          <InfoCard title={<><Briefcase className="h-4 w-4 inline mr-2" />Employment Record</>}>
            <InfoRow label="EMPLOYEE ID" value="TC-8042" />
            <InfoRow label="DEPARTMENT" value="Engineering / Core Platform" />
            <InfoRow label="REPORTING MANAGER" value="Sarah Jenkins" />
            <InfoRow label="JOINING DATE" value="October 14, 2021" />
          </InfoCard>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          {/* TABS */}
          <Card>
            <CardHeader className="pb-0">
              <Tabs defaultValue="attendance">
                <TabsList>
                  <TabsTrigger value="attendance">
                    Attendance History
                  </TabsTrigger>
                  <TabsTrigger value="tasks">Current Tasks</TabsTrigger>
                  <TabsTrigger value="incentives">
                    Incentive Records
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>

            <CardContent>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50 border-b border-slate-200">
                      <TableHead className="border-r border-slate-200 font-semibold text-slate-700">DATE</TableHead>
                      <TableHead className="border-r border-slate-200 font-semibold text-slate-700">CLOCK IN</TableHead>
                      <TableHead className="border-r border-slate-200 font-semibold text-slate-700">CLOCK OUT</TableHead>
                      <TableHead className="border-r border-slate-200 font-semibold text-slate-700">TOTAL HOURS</TableHead>
                      <TableHead className="font-semibold text-slate-700">STATUS</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <AttendanceRow
                      date="Oct 24, 2023"
                      inTime="08:55 AM"
                      outTime="05:45 PM"
                      hours="8h 50m"
                      status="Present"
                    />
                    <AttendanceRow
                      date="Oct 23, 2023"
                      inTime="09:02 AM"
                      outTime="06:15 PM"
                      hours="9h 13m"
                      status="Present"
                    />
                    <AttendanceRow
                      date="Oct 20, 2023"
                      inTime="08:45 AM"
                      outTime="05:30 PM"
                      hours="8h 45m"
                      status="Remote"
                    />
                    <AttendanceRow
                      date="Oct 19, 2023"
                      inTime="--"
                      outTime="--"
                      hours="0h 00m"
                      status="Sick Leave"
                    />
                    <AttendanceRow
                      date="Oct 18, 2023"
                      inTime="08:10 AM"
                      outTime="05:00 PM"
                      hours="7h 50m"
                      status="Present"
                    />
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-center mt-4">
                <Button variant="link" className="text-blue-600">
                  View Full Attendance History
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* BOTTOM CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-semibold">Active Task</CardTitle>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    PRIORITY
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-sm">
                  Migration of API infrastructure to Kubernetes clusters (Phase 2)
                </p>

                <Progress value={75} className="mt-4 h-2" />

                <div className="flex justify-between text-xs mt-2 text-muted-foreground">
                  <span>75% Complete</span>
                  <span>Due in 3 days</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">
                  Recent Incentive
                </CardTitle>
                <Trophy className="h-5 w-5 text-blue-600" />
              </CardHeader>

              <CardContent>
                <p className="font-medium text-sm">Q3 Star Performer Award</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Recognized for exceptional leadership in the Microservices project.
                </p>
                <div className="mt-4">
                  <p className="text-green-600 font-semibold text-lg">
                    +$500.00
                  </p>
                  <p className="text-xs text-muted-foreground">Processed Oct 1, 2023</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <p className="text-xs text-center text-muted-foreground pt-6">
        © 2023 TechCorp Internal Portal · For administrative use only · Privacy Policy
      </p>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const Stat = ({ title, value, delta, note, down }) => (
  <Card>
    <CardContent className="p-5">
      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{title}</p>
      <p className="text-2xl font-bold mb-1">{value}</p>
      {delta && (
        <p
          className={`text-sm font-medium flex items-center gap-1 ${
            down ? "text-red-600" : "text-green-600"
          }`}
        >
          {down ? <TrendingDown className="h-3 w-3" /> : <TrendingUp className="h-3 w-3" />}
          {delta}
        </p>
      )}
      {note && (
        <p className="text-xs text-muted-foreground mt-1">{note}</p>
      )}
    </CardContent>
  </Card>
);

const InfoCard = ({ title, children }) => (
  <Card>
    <CardHeader className="pb-4">
      <CardTitle className="text-sm font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {children}
    </CardContent>
  </Card>
);

const InfoRow = ({ label, value }) => (
  <div>
    <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide mb-1">{label}</p>
    <p className="text-sm">{value}</p>
  </div>
);

const AttendanceRow = ({ date, inTime, outTime, hours, status }) => {
  const statusStyles = {
    Present: "bg-green-100 text-green-700 border-green-200",
    Remote: "bg-blue-100 text-blue-700 border-blue-200",
    "Sick Leave": "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <TableRow className="border-b border-slate-200 last:border-b-0">
      <TableCell className="border-r border-slate-200 font-medium">{date}</TableCell>
      <TableCell className="border-r border-slate-200">{inTime}</TableCell>
      <TableCell className="border-r border-slate-200">{outTime}</TableCell>
      <TableCell className="border-r border-slate-200 font-medium">{hours}</TableCell>
      <TableCell>
        <Badge variant="outline" className={statusStyles[status]}>
          {status.toUpperCase()}
        </Badge>
      </TableCell>
    </TableRow>
  );
};

