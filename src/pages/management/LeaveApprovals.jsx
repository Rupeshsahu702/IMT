"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    Filter,
    Download,
    CheckCircle2,
    XCircle,
    ClipboardList,
    Calendar,
    Check,
    Users,
    Eye,
    ChevronLeft,
    ChevronRight,
    Briefcase,
} from "lucide-react";

export default function LeaveApprovals() {
    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-5">
            {/* HEADER */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Leave Approvals</h1>
                    <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
                        <Calendar className="h-4 w-4" />
                        Reporting Period: October 2023
                    </p>
                </div>

                <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Filter className="h-4 w-4" />
                        Filter
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 gap-2" size="sm">
                        <Download className="h-4 w-4" />
                        Export Report
                    </Button>
                </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    title="Total Pending"
                    value="24"
                    tag="ACTIVE"
                    icon={<ClipboardList className="h-6 w-6 text-blue-600" />}
                    bgColor="bg-blue-50"
                    decorColor="text-blue-200"
                />
                <StatCard
                    title="MTD Approved"
                    value="142"
                    change="+12.5%"
                    changeColor="text-green-600"
                    icon={<CheckCircle2 className="h-6 w-6 text-green-600" />}
                    bgColor="bg-green-50"
                    decorColor="text-green-200"
                />
                <StatCard
                    title="MTD Rejected"
                    value="12"
                    change="-2%"
                    changeColor="text-red-500"
                    icon={<XCircle className="h-6 w-6 text-red-500" />}
                    bgColor="bg-red-50"
                    decorColor="text-red-200"
                />
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {/* PENDING REQUESTS */}
                <Card className="lg:col-span-3 bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <div>
                            <CardTitle className="text-xl font-bold">Pending Leave Requests</CardTitle>
                            <p className="text-sm text-gray-500">
                                Review and manage employee leave applications from across all departments
                            </p>
                        </div>
                        <Button variant="link" size="sm" className="text-blue-600 p-0 gap-1.5">
                            <Eye className="h-4 w-4" />
                            View History
                        </Button>
                    </CardHeader>

                    <CardContent className="p-0">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wide font-medium">
                            <div className="col-span-3">Employee Profile</div>
                            <div className="col-span-2">Department</div>
                            <div className="col-span-3">Leave Details</div>
                            <div className="col-span-2">Days Left</div>
                            <div className="col-span-2 text-right">Actions</div>
                        </div>

                        {/* Rows */}
                        <EmployeeRow
                            name="Sarah Chen"
                            email="sarah.c@techco.com"
                            avatar="SC"
                            dept="Engineering"
                            deptColor="bg-blue-500"
                            leave="Annual Leave"
                            leaveIcon="calendar"
                            dates="Oct 12 - Oct 15 (4 Days)"
                            balance="15/20"
                            progress={75}
                            progressColor="bg-blue-500"
                        />
                        <EmployeeRow
                            name="James Wilson"
                            email="j.wilson@techco.com"
                            avatar="JW"
                            dept="Creative Design"
                            deptColor="bg-cyan-500"
                            leave="Sick Leave"
                            leaveIcon="calendar"
                            dates="Oct 10 - Oct 11 (2 Days)"
                            balance="12/12"
                            progress={100}
                            progressColor="bg-orange-400"
                        />
                        <EmployeeRow
                            name="Elena Rodriguez"
                            email="e.rod@techco.com"
                            avatar="ER"
                            dept="Marketing"
                            deptColor="bg-orange-500"
                            leave="Personal Leave"
                            leaveIcon="briefcase"
                            dates="Oct 20 - Oct 21 (1 Day)"
                            balance="5/10"
                            progress={50}
                            progressColor="bg-blue-500"
                        />
                        <EmployeeRow
                            name="Marcus Thorne"
                            email="m.thorne@techco.com"
                            avatar="MT"
                            dept="Engineering"
                            deptColor="bg-blue-500"
                            leave="Annual Leave"
                            leaveIcon="plane"
                            dates="Nov 01 - Nov 05 (5 Days)"
                            balance="18/25"
                            progress={72}
                            progressColor="bg-blue-500"
                        />

                        {/* Footer */}
                        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100  ">
                            <p className="text-sm text-gray-500">
                                Showing 4 of 24 pending requests
                            </p>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* RIGHT PANEL */}
                <div className="space-y-5">
                    {/* TEAM AVAILABILITY */}
                    <Card className="bg-white">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                <Users className="h-5 w-5 text-blue-600" />
                                Team Availability
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            {/* Out Today Header */}
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                OUT TODAY (OCT 11)
                            </p>

                            {/* Engineering */}
                            <TeamAvailabilityRow
                                team="Engineering"
                                percentage={85}
                                avatars={[
                                    { initials: "AP", color: "bg-blue-600" },
                                    { initials: "MT", color: "bg-teal-600" },
                                ]}
                                extraCount={4}
                                absentees="Alex P., Mark T. on Annual Leave"
                            />

                            {/* Separator */}
                            <div className="border-t border-gray-100" />

                            {/* Design */}
                            <TeamAvailabilityRow
                                team="Design"
                                percentage={92}
                                avatars={[
                                    { initials: "JK", color: "bg-gray-700" },
                                ]}
                                absentees="Jessica K. on Sick Leave"
                            />

                            {/* Upcoming Section */}
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <Calendar className="h-4 w-4 text-blue-600" />
                                    <p className="text-sm font-semibold text-blue-600">
                                        Upcoming (Next 7 days)
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Marcus Thorne</p>
                                    <p className="text-xs text-gray-500">
                                        Nov 01 - Nov 05 (Annual)
                                    </p>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full gap-2">
                                Full Availability Calendar
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ title, value, change, changeColor, tag, icon, bgColor, decorColor }) => (
    <Card className={`${bgColor} overflow-hidden relative`}>
        <CardContent className="p-5">
            <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white shadow-sm">
                    {icon}
                </div>
                <div className="flex-1">
                    {tag && (
                        <Badge className="bg-green-500 text-white hover:bg-green-500 text-xs mb-1">
                            {tag}
                        </Badge>
                    )}
                    <p className="text-sm text-gray-600">{title}</p>
                    <p className="text-4xl font-bold text-gray-900 mt-1">{value}</p>
                </div>
                {change && (
                    <span className={`text-sm font-semibold ${changeColor}`}>{change}</span>
                )}
            </div>
            {/* Decorative checkmark/x */}
            <div className={`absolute bottom-2 right-4 ${decorColor}`}>
                <Check className="h-16 w-16 opacity-30" />
            </div>
        </CardContent>
    </Card>
);

const EmployeeRow = ({
    name,
    email,
    avatar,
    dept,
    deptColor,
    leave,
    leaveIcon,
    dates,
    balance,
    progress,
    progressColor,
}) => (
    <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 items-center hover:bg-gray-50 transition">
        {/* Employee Profile */}
        <div className="col-span-3 flex items-center gap-3">
            <Avatar className="h-11 w-11 border-2 border-gray-100">
                <AvatarFallback className="bg-gray-200 text-gray-600 font-medium">
                    {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-xs text-gray-500">{email}</p>
            </div>
        </div>

        {/* Department */}
        <div className="col-span-2">
            <Badge className={`${deptColor} text-white text-xs font-medium px-3 py-1 hover:${deptColor}`}>
                {dept}
            </Badge>
        </div>

        {/* Leave Details */}
        <div className="col-span-3">
            <p className="font-semibold text-gray-900">{leave}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                <Calendar className="h-3 w-3" />
                {dates}
            </p>
        </div>

        {/* Days Left */}
        <div className="col-span-2">
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 uppercase">BALANCE</span>
                    <span className="text-sm font-semibold text-gray-900">{balance}</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden w-20">
                    <div
                        className={`h-full ${progressColor} rounded-full`}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>

        {/* Actions */}
        <div className="col-span-2 flex items-center justify-end gap-2">
            <Button
                variant="outline"
                size="sm"
                className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 h-8 px-4"
            >
                Reject
            </Button>
            <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 h-8 px-4"
            >
                Approve
            </Button>
        </div>
    </div>
);

const TeamAvailabilityRow = ({ team, percentage, avatars, extraCount, absentees }) => (
    <div className="space-y-2">
        {/* Header with team name and percentage */}
        <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-900">{team}</p>
            <p className="text-sm text-green-600 font-medium">{percentage}% present</p>
        </div>

        {/* Avatars */}
        <div className="flex items-center gap-1">
            {avatars.map((avatar, idx) => (
                <Avatar key={idx} className="h-8 w-8 border-2 border-white -ml-1 first:ml-0">
                    <AvatarFallback className={`${avatar.color} text-white text-xs`}>
                        {avatar.initials}
                    </AvatarFallback>
                </Avatar>
            ))}
            {extraCount && (
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-medium -ml-1">
                    +{extraCount}
                </div>
            )}
        </div>

        {/* Absentees text */}
        <p className="text-xs text-gray-500 italic">{absentees}</p>
    </div>
);
