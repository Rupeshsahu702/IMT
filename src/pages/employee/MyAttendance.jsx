"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
    Calendar,
    Download,
    ChevronLeft,
    ChevronRight,
    Clock,
    Sun,
    TrendingUp,
    Zap,
} from "lucide-react";

export default function MyAttendance() {
    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-5">
            {/* HEADER */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        My Attendance
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Track your work hours, history, and daily productivity breakdown.
                    </p>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        Oct 2023
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Download className="h-4 w-4 mr-2" />
                        Export Report
                    </Button>
                </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                    title="Total Hours (Oct)"
                    value="142.5 hrs"
                    change="+2.5%"
                    changeColor="text-green-600"
                    icon={<Clock className="h-5 w-5 text-blue-600" />}
                    bgColor="bg-blue-50"
                />
                <StatCard
                    title="Avg Check-in"
                    value="09:05 AM"
                    change="+5m late"
                    changeColor="text-orange-500"
                    icon={<Sun className="h-5 w-5 text-orange-500" />}
                    bgColor="bg-orange-50"
                />
                <StatCard
                    title="Attendance Rate"
                    value="98%"
                    change="+1%"
                    changeColor="text-green-600"
                    icon={<TrendingUp className="h-5 w-5 text-purple-600" />}
                    bgColor="bg-purple-50"
                />
                <StatCard
                    title="Overtime"
                    value="4.5 hrs"
                    change="Target: 0h"
                    changeColor="text-gray-500"
                    icon={<Zap className="h-5 w-5 text-yellow-600" />}
                    bgColor="bg-yellow-50"
                />
            </div>

            {/* VIEW TOGGLE */}
            <div className="flex gap-6 text-sm font-medium border-b">
                <span className="text-blue-600 border-b-2 border-blue-600 pb-2 cursor-pointer">
                    Calendar View
                </span>
                <span className="text-gray-500 pb-2 cursor-pointer hover:text-gray-700">
                    Table View
                </span>
            </div>

            {/* MAIN CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* CALENDAR */}
                <Card className="lg:col-span-2">
                    <CardContent className="p-5 space-y-4">
                        {/* CAL HEADER */}
                        <div className="flex items-center justify-between">
                            <Button size="icon" variant="ghost">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <p className="font-semibold text-gray-900">October 2023</p>
                            <Button size="icon" variant="ghost">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* WEEK DAYS */}
                        <div className="grid grid-cols-7 text-xs text-center text-gray-500 uppercase font-medium">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
                                <span key={d}>{d}</span>
                            ))}
                        </div>

                        {/* DAYS GRID */}
                        <div className="grid grid-cols-7 gap-1">
                            {/* Empty cells for days before month starts (Oct 2023 starts on Sunday) */}
                            {calendarDays.map((day, idx) => (
                                <div
                                    key={idx}
                                    className={`h-12 flex flex-col bg-gray-50 items-center justify-center rounded-lg relative
                                        ${day.active ? "bg-blue-600 text-white" : "hover:bg-gray-100"}
                                        ${day.isWeekend && !day.active ? "text-gray-400" : "text-gray-700"}
                                    `}
                                >
                                    <span className={`text-sm ${day.active ? "font-semibold" : ""}`}>
                                        {day.date}
                                    </span>
                                    {day.status && (
                                        <span className={`h-1.5 w-1.5 rounded-full mt-1 ${statusColors[day.status]}`} />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* LEGEND */}
                        <div className="flex gap-6 text-xs text-gray-500 pt-2 justify-center">
                            <Legend color="bg-green-500" label="On Time" />
                            <Legend color="bg-orange-500" label="Late" />
                            <Legend color="bg-red-500" label="Absent" />
                            <Legend color="bg-gray-300" label="No Data" />
                        </div>
                    </CardContent>
                </Card>

                {/* DAILY INSIGHT */}
                <Card>
                    <CardContent className="p-6 space-y-6">
                        {/* HEADER */}
                        <div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-900">Daily Insight</h3>
                                <Badge className="bg-green-100 text-green-700 font-semibold px-3 py-1">PRESENT</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Thursday, Oct 5</p>
                        </div>

                        {/* CIRCULAR PROGRESS + BREAKDOWN */}
                        <div className="flex items-center gap-6">
                            {/* Circular Progress with multiple segments */}
                            <div className="relative h-24 w-24">
                                <svg className="h-24 w-24 -rotate-90" viewBox="0 0 36 36">
                                    {/* Background circle */}
                                    <circle
                                        cx="18" cy="18" r="14"
                                        fill="none"
                                        stroke="#E2E8F0"
                                        strokeWidth="4"
                                    />
                                    {/* Blue segment (Deep Work) */}
                                    <circle
                                        cx="18" cy="18" r="14"
                                        fill="none"
                                        stroke="#2563EB"
                                        strokeWidth="4"
                                        strokeDasharray="62, 100"
                                        strokeLinecap="round"
                                    />
                                    {/* Orange segment (Meetings) */}
                                    <circle
                                        cx="18" cy="18" r="14"
                                        fill="none"
                                        stroke="#F97316"
                                        strokeWidth="4"
                                        strokeDasharray="13, 100"
                                        strokeDashoffset="-62"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-xl font-bold text-gray-900">8h 15</span>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">Worked</span>
                                </div>
                            </div>

                            {/* Breakdown */}
                            <div className="flex-1 space-y-2">
                                <BreakdownItem color="bg-blue-600" label="Deep Work" value="5h 45m" />
                                <BreakdownItem color="bg-orange-500" label="Meetings" value="1h 15m" />
                                <BreakdownItem color="bg-gray-300" label="Breaks" value="1h 15m" />
                            </div>
                        </div>

                        {/* TIMELINE */}
                        <div className="space-y-4">
                            <TimelineItem
                                color="bg-blue-500"
                                time="09:00 AM"
                                title="Check In"
                                desc="Biometric Scan - Front Door"
                            />
                            <TimelineItem
                                color="bg-orange-500"
                                time="10:30 AM"
                                title="Product Sync"
                                desc="Meeting Room B"
                            />
                            <TimelineItem
                                color="bg-gray-300"
                                time="12:00 PM"
                                title="Lunch Break"
                                desc="1 hour duration"
                            />
                            <TimelineItem
                                color="bg-blue-500"
                                time="06:15 PM"
                                title="Check Out"
                                desc="Web Portal"
                            />
                        </div>

                        <Button variant="link" className="text-blue-600 bg-blue-100 w-full p-0 font-medium">
                            Request Correction
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ title, value, change, changeColor, icon, bgColor }) => (
    <Card>
        <CardContent className="p-4 flex items-center justify-between">
            <div>
                <p className="text-xs text-gray-500">{title}</p>
                <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                    <span className={`text-xs font-medium ${changeColor}`}>{change}</span>
                </div>
            </div>
            <div className={`p-2 rounded-lg ${bgColor}`}>{icon}</div>
        </CardContent>
    </Card>
);

const Legend = ({ color, label }) => (
    <div className="flex items-center gap-1.5">
        <span className={`h-2 w-2 rounded-full ${color}`} />
        <span>{label}</span>
    </div>
);

const BreakdownItem = ({ color, label, value }) => (
    <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${color}`} />
            <span className="text-gray-600">{label}</span>
        </div>
        <span className="font-semibold text-gray-900">{value}</span>
    </div>
);

const TimelineItem = ({ color, time, title, desc }) => (
    <div className="flex items-start gap-3">
        <div className={`h-2 w-2 rounded-full mt-1.5 ${color}`} />
        <div>
            <p className="text-xs text-gray-500">{time}</p>
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
    </div>
);

const statusColors = {
    ontime: "bg-green-500",
    late: "bg-orange-500",
    absent: "bg-red-500",
};

// Generate calendar days for October 2023 (starts on Sunday)
const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const date = i < 31 ? i + 1 : null;
    const isWeekend = i % 7 === 0 || i % 7 === 6;

    let status = null;
    if (date === 5 || date === 6 || date === 12 || date === 13 || date === 19 || date === 20 || date === 26 || date === 27) {
        status = "ontime";
    } else if (date === 9 || date === 16 || date === 23 || date === 30) {
        status = "late";
    } else if (date === 10) {
        status = "absent";
    }

    return {
        date,
        active: date === 5,
        isWeekend,
        status: date ? status : null,
    };
}).filter(day => day.date !== null);
