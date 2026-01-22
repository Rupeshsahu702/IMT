"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import {
    Clock,
    Coffee,
    LogOut,
    Timer,
    TrendingUp,
    Megaphone,
    CheckSquare,
} from "lucide-react";

export default function Dashboard() {
    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-4">
            {/* TOP ROW: Header + Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* LEFT: Header */}
                <div className="lg:col-span-2">
                    <h1 className="text-4xl font-bold text-gray-900">Good Morning, Alex</h1>
                    <p className="text-sm text-gray-500 italic mt-1">
                        Here is your daily activity overview.
                    </p>
                </div>

                {/* RIGHT: Side Stats */}
                <div className="flex flex-col gap-2">
                    <MiniStat
                        icon={<Clock className="h-5 w-5 text-blue-600" />}
                        label="Weekly Hours"
                        value="32.5h"
                        bgColor="bg-blue-50"
                    />
                </div>
            </div>

            {/* TIMER ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Timer Card */}
                <Card className="lg:col-span-2">
                    <CardContent className="p-6 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 text-green-600 text-xs font-semibold uppercase tracking-wide mb-2">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                Currently Working
                            </div>

                            <div className="flex items-baseline gap-1">
                                <TimeBlock value="04" label="HRS" />
                                <span className="text-4xl font-bold text-gray-300 mx-1">:</span>
                                <TimeBlock value="12" label="MIN" />
                                <span className="text-4xl font-bold text-gray-300 mx-1">:</span>
                                <TimeBlock value="35" label="SEC" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Button className="bg-blue-500 hover:bg-blue-600">
                                <Coffee className="h-4 w-4 mr-2" />
                                Start Break
                            </Button>
                            <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                                <LogOut className="h-4 w-4 mr-2" />
                                Clock Out
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* More Stats */}
                <div className="flex flex-col gap-2">
                    <MiniStat
                        icon={<Timer className="h-5 w-5 text-orange-500" />}
                        label="Break Time Today"
                        value="30m"
                        bgColor="bg-orange-50"
                    />
                    <MiniStat
                        icon={<TrendingUp className="h-5 w-5 text-purple-600" />}
                        label="Efficiency Score"
                        value="94%"
                        bgColor="bg-purple-50"
                    />
                </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* ASSIGNED TASKS */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between py-3 px-4 border-b">
                        <CardTitle className="flex items-center gap-2 text-base">
                            <CheckSquare className="h-4 w-4 text-blue-600" />
                            Assigned Tasks
                        </CardTitle>
                        <Button variant="link" size="sm" className="text-blue-600">View All</Button>
                    </CardHeader>

                    <CardContent className="p-4 space-y-3">
                        <TaskItem
                            title="Update UI Components for Dashboard"
                            meta="Due Today • Design System"
                            status="High Priority"
                        />
                        <TaskItem
                            title="Review PR #402 from Frontend Team"
                            meta="Due Tomorrow • Development"
                            status="In Progress"
                        />
                        <TaskItem
                            title="Prepare Q3 Productivity Report"
                            meta="Due Fri, Oct 24 • Management"
                            status="Pending"
                        />
                        <TaskItem
                            title="Client Meeting Notes Distribution"
                            meta="Completed Yesterday"
                            status="Done"
                            completed
                        />
                    </CardContent>
                </Card>

                {/* ANNOUNCEMENTS */}
                <Card>
                    <CardHeader className="py-3 px-4 border-b">
                        <CardTitle className="flex items-center gap-2 text-base">
                            <Megaphone className="h-4 w-4 text-orange-500" />
                            Announcements
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="p-4 space-y-4">
                        <Announcement
                            tag="Event"
                            title="All Hands Meeting"
                            date="Oct 25, 2:00 PM"
                            desc="Join us for the quarterly all-hands meeting in the main auditorium or via Zoom. We will discuss Q4 goals."
                        />
                        <Announcement
                            tag="Notice"
                            title="Office Maintenance"
                            date="Oct 28"
                            desc="The office AC system will undergo maintenance this weekend. Please ensure all devices are powered off."
                        />

                        <Button variant="outline" className="w-full">
                            View Archive
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const TimeBlock = ({ value, label }) => (
    <div className="text-center">
        <p className="text-5xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-400 uppercase">{label}</p>
    </div>
);

const MiniStat = ({ icon, label, value, bgColor }) => (
    <Card>
        <CardContent className="p-3 flex items-center gap-3">
            <div className={`p-2 rounded-lg ${bgColor}`}>{icon}</div>
            <div>
                <p className="text-xs text-gray-500">{label}</p>
                <p className="text-xl font-bold text-gray-900">{value}</p>
            </div>
        </CardContent>
    </Card>
);

const TaskItem = ({ title, meta, status, completed }) => {
    const statusStyles = {
        "High Priority": "bg-red-500 text-white",
        "In Progress": "bg-blue-100 text-blue-700",
        Pending: "bg-gray-100 text-gray-600",
        Done: "bg-green-100 text-green-700",
    };

    return (
        <div className="flex items-start gap-3">
            <Checkbox checked={completed} className="mt-1" />
            <div className="flex-1">
                <p className={`text-sm font-medium ${completed ? "line-through text-gray-400" : "text-gray-900"}`}>
                    {title}
                </p>
                <p className="text-xs text-gray-500">{meta}</p>
            </div>
            <Badge className={`text-xs ${statusStyles[status]}`}>
                {status}
            </Badge>
        </div>
    );
};

const Announcement = ({ tag, title, date, desc }) => (
    <div className="space-y-1">
        <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs text-orange-600 border-orange-200">{tag}</Badge>
            <span className="text-xs text-gray-400">{date}</span>
        </div>
        <p className="font-semibold text-sm text-gray-900">{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
);
