"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

import {
    Calendar,
    Download,
    Clock,
    CheckSquare,
    Zap,
    User,
} from "lucide-react";

export default function Payroll() {
    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-5">
            {/* BREADCRUMB */}
            <p className="text-sm text-gray-500">
                Staff <span className="mx-2">›</span> Payroll <span className="mx-2">›</span>
                <span className="text-gray-900 font-medium">Salary Details</span>
            </p>

            {/* HEADER */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Salary Calculation</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Review attendance, calculate salary, and generate slips.
                    </p>
                </div>

                <div className="flex gap-3">
                    <Select defaultValue="oct">
                        <SelectTrigger className="w-40">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="oct">October 2023</SelectItem>
                            <SelectItem value="sep">September 2023</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button className="bg-blue-600 hover:bg-blue-700">
                        <Download className="h-4 w-4 mr-2" />
                        Generate Salary Slip
                    </Button>
                </div>
            </div>

            {/* EMPLOYEE CARD */}
            <Card>
                <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                            <User className="h-6 w-6 text-gray-400" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Alex Morgan</p>
                            <p className="text-sm text-gray-500">
                                Senior Developer • ID: TC-0042
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-12">
                        <div className="text-right">
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Department</p>
                            <p className="font-semibold text-gray-900">Engineering</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Bank Account</p>
                            <p className="font-semibold text-gray-900">**** 4589</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                    icon={<Calendar className="h-5 w-5 text-blue-600" />}
                    bgColor="bg-blue-50"
                    label="Total Working Days"
                    value="22"
                    note="out of 22 days"
                />
                <StatCard
                    icon={<Clock className="h-5 w-5 text-orange-500" />}
                    bgColor="bg-orange-50"
                    label="Total Hours"
                    value="176h"
                    note="Avg 8h / day"
                />
                <StatCard
                    icon={<CheckSquare className="h-5 w-5 text-green-600" />}
                    bgColor="bg-green-50"
                    label="Paid Leaves"
                    value="1"
                    note="Casual Leave"
                />
                <StatCard
                    icon={<Zap className="h-5 w-5 text-purple-600" />}
                    bgColor="bg-purple-50"
                    label="Overtime"
                    value="4h 30m"
                    note="Approved"
                />
            </div>

            {/* MAIN CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* LEFT - EARNINGS & DEDUCTIONS */}
                <div className="lg:col-span-2 space-y-5">
                    {/* EARNINGS */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between h-[20px] px-6">
                            <CardTitle className="text-lg">Earnings</CardTitle>
                            <Badge className="bg-green-100 text-green-700 font-medium">Taxable Income</Badge>
                        </CardHeader>

                        <CardContent className="p-0">
                            {/* Table Header */}
                            <div className="flex justify-between px-6 py-2 text-xs text-gray-500 uppercase tracking-wide border-b bg-gray-50">
                                <span>Description</span>
                                <span>Amount</span>
                            </div>

                            <TableRow label="Basic Salary" value="$4,500.00" />
                            <TableRow label="House Rent Allowance (HRA)" value="$1,200.00" />
                            <TableRow label="Transport Allowance" value="$300.00" />
                            <TableRow label="Special Allowance" value="$500.00" />
                            <TableRow label="Overtime Pay" value="+$150.00" highlight />

                            <div className="flex justify-between px-6 py-3 text-sm font-semibold border-t bg-gray-50">
                                <span>Total Earnings</span>
                                <span>$6,650.00</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* DEDUCTIONS */}
                    <Card>
                        <CardHeader className="py-0 h-[20px] px-6">
                            <CardTitle className="text-lg">Deductions</CardTitle>
                        </CardHeader>

                        <CardContent className="p-0">
                            {/* Table Header */}
                            <div className="flex justify-between px-6 py-4 text-xs text-gray-500 uppercase tracking-wide border-b bg-gray-50">
                                <span>Description</span>
                                <span>Amount</span>
                            </div>

                            <TableRow label="Income Tax (TDS)" value="$450.00" />
                            <TableRow label="Provident Fund" value="$200.00" />

                            <div className="flex justify-between px-6 py-3 text-sm font-semibold border-t bg-gray-50">
                                <span>Total Deductions</span>
                                <span>$650.00</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT - NET PAY & ATTENDANCE */}
                <div className="space-y-5">
                    {/* NET PAY */}
                    <Card className="bg-linear-to-br from-blue-600 to-blue-500 text-white overflow-hidden">
                        <CardContent className="px-6 space-y-1">
                            <div>
                                <p className="text text-semibold text-blue-100">Net Salary Payable</p>
                                <p className="text-4xl font-bold my-2">$5,900.00</p>
                            </div>

                            <div className="flex justify-between text-sm py-2 border-t border-white">
                                <span className="text-blue-100 text-lg text-semibold">Pay Date</span>
                                <span className="font-semibold text-lg">Oct 31, 2023</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* ATTENDANCE LOG */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-base">Attendance Log</CardTitle>
                            <Button variant="link" size="sm" className="text-blue-600 p-0">View All</Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <AttendanceRow label="Present" value={92} color="bg-green-500" />
                            <AttendanceRow label="Late Arrival" value={5} color="bg-orange-500" />
                            <AttendanceRow label="Absent" value={3} color="bg-red-500" />

                            <div className="pt-2">
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Recent Days</p>
                                <div className="space-y-2">
                                    <RecentDay color="bg-green-500" date="Oct 24, Mon" time="09:02 - 18:05" />
                                    <RecentDay color="bg-green-500" date="Oct 23, Sun" time="08:55 - 17:58" />
                                    <RecentDay color="bg-orange-500" date="Oct 22, Sat" time="09:45 - 18:00" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ icon, bgColor, label, value, note }) => (
    <Card>
        <CardContent className="p-3">
            <div className="flex items-center justify-between mb-1">
                <p className="text-xs text-gray-500">{label}</p>
                <div className={`p-1.5 rounded-lg ${bgColor}`}>{icon}</div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-xs text-gray-500">{note}</p>
        </CardContent>
    </Card>
);

const TableRow = ({ label, value, highlight }) => (
    <div className="flex justify-between px-6 py-3 text-sm">
        <span className="text-gray-700">{label}</span>
        <span className={highlight ? "text-green-600 font-medium" : "text-gray-900"}>
            {value}
        </span>
    </div>
);

const AttendanceRow = ({ label, value, color }) => (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${color}`} />
            <span className="text-sm text-gray-600">{label}</span>
        </div>
        <span className="text-sm font-semibold text-gray-900">{value}%</span>
    </div>
);

const RecentDay = ({ color, date, time }) => (
    <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${color}`} />
            <span className="text-gray-700">{date}</span>
        </div>
        <span className="text-gray-500">{time}</span>
    </div>
);
