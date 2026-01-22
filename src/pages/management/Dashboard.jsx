"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Line, Bar, Doughnut } from "react-chartjs-2";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    Users,
    CheckCircle,
    XCircle,
    Coffee,
    Clock,
    Bell,
    Search,
} from "lucide-react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

export default function Dashboard() {
    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-6">
            {/* HEADER */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Dashboard Overview</h1>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search employees, tasks..."
                            className="pl-9 w-64"
                        />
                    </div>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <StatCard
                    title="Total Employees"
                    value="124"
                    icon={<Users className="text-blue-600" />}
                    note="+2 new this month"
                />
                <StatCard
                    title="Present Today"
                    value="112"
                    icon={<CheckCircle className="text-green-600" />}
                    note="90% of workforce"
                />
                <StatCard
                    title="Absent Today"
                    value="4"
                    icon={<XCircle className="text-red-600" />}
                    note="+1 vs yesterday"
                />
                <StatCard
                    title="On Break"
                    value="8"
                    icon={<Coffee className="text-orange-500" />}
                    note="Currently inactive"
                />
                <StatCard
                    title="Total Hours"
                    value="842h"
                    icon={<Clock className="text-purple-600" />}
                    note="On track"
                />
            </div>

            {/* CHARTS ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LINE CHART */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Daily Productivity Trend</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Comparing expected vs actual output (Today)
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant="secondary">Today</Badge>
                            <Badge variant="outline">Week</Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Line data={productivityData} options={lineOptions} />
                    </CardContent>
                </Card>

                {/* BAR CHART */}
                <Card>
                    <CardHeader>
                        <CardTitle>Attendance Overview</CardTitle>
                        <p className="text-sm text-muted-foreground">Weekly Report</p>
                    </CardHeader>
                    <CardContent>
                        <div style={{ height: '300px' }}>
                            <Bar data={attendanceData} options={barOptions} />
                        </div>
                        <p className="mt-3 text-sm text-right text-muted-foreground">
                            Avg Attendance <span className="font-semibold">94%</span>
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* DOUGHNUT */}
                <Card>
                    <CardHeader>
                        <CardTitle>Work Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Doughnut data={workData} />
                        <p className="mt-4 text-center font-medium">124 Employees</p>
                    </CardContent>
                </Card>

                {/* ACTIVITY */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-start justify-between">
                        <div>
                            <CardTitle className="text-lg font-semibold text-gray-900">Real-Time Activity</CardTitle>
                            <p className="text-sm text-gray-500 mt-1">
                                Live feed of employee actions
                            </p>
                        </div>
                        <Button variant="link" className="text-blue-600 hover:text-blue-700">View All</Button>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <ActivityItem
                            name="Michael Scott"
                            action="clocked in"
                            dept="Engineering Dept"
                            time="Just now"
                            status="online"
                        />
                        <ActivityItem
                            name="Sarah Connor"
                            action="started break"
                            dept="Sales Dept"
                            time="5m ago"
                            status="away"
                        />
                        <ActivityItem
                            name="James Bond"
                            action="clocked out"
                            dept="Security Dept"
                            time="12m ago"
                            status="offline"
                        />
                        <ActivityItem
                            name="Emily Blunt"
                            action='completed task "Q3 Report"'
                            dept="Finance Dept"
                            time="24m ago"
                            status="online"
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ title, value, icon, note }) => (
    <Card>
        <CardContent className="p-4 space-y-1">
            <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{title}</p>
                {icon}
            </div>
            <h2 className="text-2xl font-bold">{value}</h2>
            <p className="text-xs text-muted-foreground">{note}</p>
        </CardContent>
    </Card>
);

const ActivityItem = ({ name, action, dept, time, status = 'online' }) => {
    const statusColors = {
        online: 'bg-green-500',
        away: 'bg-orange-500',
        offline: 'bg-red-500'
    };

    return (
        <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <Avatar className="h-10 w-10">
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${statusColors[status]}`}></span>
                </div>
                <div>
                    <p className="text-sm">
                        <span className="font-semibold text-gray-900">{name}</span>{' '}
                        <span className="text-gray-500">{action}</span>
                    </p>
                    <p className="text-xs text-gray-400">{dept}</p>
                </div>
            </div>
            <span className="text-xs text-gray-400">{time}</span>
        </div>
    );
};

/* ---------------- CHART DATA ---------------- */

const productivityData = {
    labels: ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM"],
    datasets: [
        {
            label: "Actual",
            data: [20, 35, 50, 45, 55],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59,130,246,0.15)",
            fill: true,
            tension: 0.4,
        },
        {
            label: "Expected",
            data: [25, 30, 40, 42, 48],
            borderColor: "#94a3b8",
            borderDash: [5, 5],
        },
    ],
};

const attendanceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
        {
            data: [92, 95, 88, 93, 96],
            backgroundColor: "#3b82f6",
        },
    ],
};

const workData = {
    labels: ["Engineering", "Sales", "HR"],
    datasets: [
        {
            data: [45, 30, 25],
            backgroundColor: ["#3b82f6", "#22c55e", "#f59e0b"],
        },
    ],
};

/* ---------------- OPTIONS ---------------- */

const lineOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
        y: { grid: { display: false } },
        x: { grid: { display: false } },
    },
};

const barOptions = {
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
        y: { display: false },
        x: { grid: { display: false } },
    },
};
