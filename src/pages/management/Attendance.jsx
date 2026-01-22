"use client";

import {
    Card,
    CardContent,
} from "@/components/ui/card";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
    CheckCircle,
    XCircle,
    Clock,
    Timer,
    Download,
    Calendar,
    User,
} from "lucide-react";

export default function Attendance() {
    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-6">
            {/* HEADER */}
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-gray-500 mb-2">
                        Staff &gt; <span className="text-gray-900">Attendance & Productivity</span>
                    </p>
                    <h1 className="text-3xl font-bold mb-1">
                        Attendance & Productivity
                    </h1>
                    <p className="text-sm text-gray-500">
                        Monitor daily logs, breaks, and productive hours across the organization.
                    </p>
                </div>

                <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                </Button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                    label="PRESENT TODAY"
                    value="142"
                    icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                    bgColor="bg-green-50"
                />
                <StatCard
                    label="ABSENT"
                    value="8"
                    icon={<XCircle className="h-5 w-5 text-red-500" />}
                    bgColor="bg-red-50"
                />
                <StatCard
                    label="AVG. BREAK TIME"
                    value="42m"
                    icon={<Clock className="h-5 w-5 text-yellow-600" />}
                    bgColor="bg-yellow-50"
                />
                <StatCard
                    label="AVG. PRODUCTIVITY"
                    value="7h 12m"
                    icon={<Clock className="h-5 w-5 text-blue-600" />}
                    bgColor="bg-blue-50"
                />
            </div>

            {/* FILTER BAR */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Filter by Employee"
                            className="pl-10 w-64"
                        />
                    </div>

                    <Input
                        type="date"
                        className="w-48"
                    />
                </div>

                <div className="flex gap-2">
                    <Button size="sm">Daily</Button>
                    <Button size="sm" variant="outline">Weekly</Button>
                    <Button size="sm" variant="outline">Monthly</Button>
                </div>
            </div>

            {/* TABLE */}
            <Card className="overflow-hidden p-0">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-50">
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Employee</TableHead>
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Date</TableHead>
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Login Time</TableHead>
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Logout Time</TableHead>
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Break Duration</TableHead>
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Productive Time</TableHead>
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Status</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {records.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <div className="flex items-center gap-3 py-2">
                                        <Avatar className="h-10 w-10 bg-gray-200">
                                            <AvatarFallback className="text-sm font-medium">{row.initials}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium text-sm text-gray-900">{row.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {row.role}
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="text-sm">{row.date}</TableCell>
                                <TableCell className="text-sm font-medium">{row.login}</TableCell>
                                <TableCell className="text-sm">{row.logout}</TableCell>
                                <TableCell className="text-sm">{row.break}</TableCell>

                                <TableCell className="text-sm font-medium text-blue-600">
                                    {row.productive}
                                </TableCell>

                                <TableCell>
                                    <StatusBadge status={row.status} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* FOOTER */}
                <div className="flex items-center justify-between px-4 py-3 border-t text-sm text-gray-600">
                    <span>Showing 1 to 5 of 48 results</span>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline">‹</Button>
                        <Button size="sm" variant="outline">›</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ label, value, icon, bgColor }) => (
    <Card>
        <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${bgColor}`}>
                    {icon}
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
        </CardContent>
    </Card>
);

const StatusBadge = ({ status }) => {
    const styles = {
        Present: "bg-green-100 text-green-700",
        Active: "bg-blue-100 text-blue-700",
        Absent: "bg-red-100 text-red-700",
    };

    return (
        <Badge variant="secondary" className={styles[status]}>
            {status}
        </Badge>
    );
};

/* ---------------- DATA ---------------- */

const records = [
    {
        initials: "SJ",
        name: "Sarah Jenkins",
        role: "UX Designer",
        date: "Oct 24, 2023",
        login: "08:55 AM",
        logout: "05:30 PM",
        break: "45m",
        productive: "7h 50m",
        status: "Present",
    },
    {
        initials: "MC",
        name: "Michael Chen",
        role: "Backend Dev",
        date: "Oct 24, 2023",
        login: "09:10 AM",
        logout: "06:15 PM",
        break: "1h 00m",
        productive: "8h 05m",
        status: "Present",
    },
    {
        initials: "DA",
        name: "David Allen",
        role: "Project Manager",
        date: "Oct 24, 2023",
        login: "09:30 AM",
        logout: "--",
        break: "30m",
        productive: "In Progress",
        status: "Active",
    },
    {
        initials: "EM",
        name: "Emily Martinez",
        role: "Marketing Lead",
        date: "Oct 24, 2023",
        login: "--",
        logout: "--",
        break: "--",
        productive: "0h 00m",
        status: "Absent",
    },
];
