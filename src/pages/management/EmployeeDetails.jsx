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
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* HEADER */}
      <Card className="shadow-sm">
        <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://i.pravatar.cc/150?img=15" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">Alex Rivera</h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Senior Software Engineer
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50 text-xs px-2 py-0.5">
                  Engineering Department
                </Badge>
                <Badge className="bg-green-50 text-green-700 hover:bg-green-50 text-xs px-2 py-0.5">
                  ● In Office
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Mail className="h-4 w-4 mr-2" />
              Message
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Edit className="h-4 w-4 mr-2" />
              Edit Employee
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* PERFORMANCE OVERVIEW */}
      <div>
        <h2 className="text-base font-semibold mb-4 flex items-center gap-2 text-gray-900">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          Performance Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Stat title="Task Completion Rate" value="94%" delta="+2.4%" />
          <Stat title="Productivity Score" value="88/100" delta="-1.2%" down />
          <Stat title="Active Projects" value="4" note="Across 2 teams" />
          <Stat title="Company Tenure" value="24 Months" note="Joined Oct 2021" />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN - Personal Info & Employment Record */}
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
            <InfoRow label="EMPLOYEE ID" value="TC-9042" />
            <InfoRow label="DEPARTMENT" value="Engineering / Core Platform" />
            <InfoRow label="REPORTING MANAGER" value="Sarah Jenkins" badgeType="avatar" />
            <InfoRow label="JOINING DATE" value="October 14, 2021" />
          </InfoCard>
        </div>

        {/* RIGHT COLUMN - Tabs & Cards */}
        <div className="lg:col-span-2 space-y-6">
          {/* TABS WITH CONTENT */}
          <Card className="shadow-sm">
            <CardHeader className="border-b pb-0">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="w-full justify-start h-12 bg-transparent border-b-0 rounded-none p-0">
                  <TabsTrigger 
                    value="personal" 
                    className="relative data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none px-6 text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Personal Information
                  </TabsTrigger>
                  <TabsTrigger 
                    value="attendance" 
                    className="relative data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none px-6 text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Attendance History
                  </TabsTrigger>
                  <TabsTrigger 
                    value="tasks" 
                    className="relative data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none px-6 text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Current Tasks
                  </TabsTrigger>
                  <TabsTrigger 
                    value="incentives" 
                    className="relative data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none px-6 text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Incentive Records
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                      <TableHead className="font-semibold text-gray-700 text-xs uppercase">DATE</TableHead>
                      <TableHead className="font-semibold text-gray-700 text-xs uppercase">CLOCK IN</TableHead>
                      <TableHead className="font-semibold text-gray-700 text-xs uppercase">CLOCK OUT</TableHead>
                      <TableHead className="font-semibold text-gray-700 text-xs uppercase">TOTAL HOURS</TableHead>
                      <TableHead className="font-semibold text-gray-700 text-xs uppercase">STATUS</TableHead>
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
                      inTime="-"
                      outTime="-"
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
                <Button variant="link" className="text-blue-600 hover:text-blue-700">
                  View Full Attendance History
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* BOTTOM CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-gray-900">Active Task</CardTitle>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300 text-xs font-medium px-2 py-0.5">
                    PRIORITY
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-sm text-gray-900 leading-relaxed">
                  Migration of API infrastructure to Kubernetes clusters (Phase 2)
                </p>

                <div className="mt-4 space-y-2">
                  <Progress value={75} className="h-2 bg-gray-200" />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span className="font-medium">75% Complete</span>
                    <span>Due in 3 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-base font-semibold text-gray-900">
                  Recent Incentive
                </CardTitle>
                <Trophy className="h-5 w-5 text-blue-600" />
              </CardHeader>

              <CardContent>
                <p className="font-semibold text-sm text-gray-900">Q3 Star Performer Award</p>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Recognized for exceptional leadership in the Microservices project.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <p className="text-green-600 font-bold text-xl">
                    +$500.00
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Processed Oct 1, 2023</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const Stat = ({ title, value, delta, note, down }) => (
  <Card className="shadow-sm border-gray-200">
    <CardContent className="p-6">
      <p className="text-xs text-gray-600 uppercase tracking-wide mb-2 font-medium">{title}</p>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      {delta && (
        <p
          className={`text-sm font-semibold flex items-center gap-1 ${
            down ? "text-red-600" : "text-green-600"
          }`}
        >
          {down ? <TrendingDown className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}
          {delta}
        </p>
      )}
      {note && (
        <p className="text-xs text-gray-600 mt-2">{note}</p>
      )}
    </CardContent>
  </Card>
);

const InfoCard = ({ title, children }) => (
  <Card className="shadow-sm border-gray-200">
    <CardHeader className="pb-4 border-b border-gray-100">
      <CardTitle className="text-sm font-semibold text-gray-900">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-6 space-y-5">
      {children}
    </CardContent>
  </Card>
);

const InfoRow = ({ label, value, badgeType }) => (
  <div>
    <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1.5">{label}</p>
    {badgeType === "avatar" ? (
      <div className="flex items-center gap-2">
        <Avatar className="h-5 w-5">
          <AvatarImage src="https://i.pravatar.cc/150?img=8" />
          <AvatarFallback className="text-xs">SJ</AvatarFallback>
        </Avatar>
        <p className="text-sm text-gray-900">{value}</p>
      </div>
    ) : (
      <p className="text-sm text-gray-900">{value}</p>
    )}
  </div>
);

const AttendanceRow = ({ date, inTime, outTime, hours, status }) => {
  const statusStyles = {
    Present: "bg-green-100 text-green-700 border-0 hover:bg-green-100",
    Remote: "bg-blue-100 text-blue-700 border-0 hover:bg-blue-100",
    "Sick Leave": "bg-red-100 text-red-700 border-0 hover:bg-red-100",
  };

  return (
    <TableRow className="hover:bg-gray-50">
      <TableCell className="font-medium text-gray-900 text-sm">{date}</TableCell>
      <TableCell className="text-gray-700 text-sm">{inTime}</TableCell>
      <TableCell className="text-gray-700 text-sm">{outTime}</TableCell>
      <TableCell className="font-medium text-gray-900 text-sm">{hours}</TableCell>
      <TableCell>
        <Badge variant="outline" className={`${statusStyles[status]} text-xs font-semibold uppercase px-2 py-1`}>
          {status.toUpperCase()}
        </Badge>
      </TableCell>
    </TableRow>
  );
};


