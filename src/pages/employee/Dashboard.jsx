"use client";

import { useState } from "react";
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
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Update UI Components for Dashboard",
            meta: "Due Today • Design System",
            status: "High Priority",
            completed: false
        },
        {
            id: 2,
            title: "Review PR #402 from Frontend Team",
            meta: "Due Tomorrow • Development",
            status: "In Progress",
            completed: false
        },
        {
            id: 3,
            title: "Prepare Q3 Productivity Report",
            meta: "Due Fri, Oct 24 • Management",
            status: "Pending",
            completed: false
        },
        {
            id: 4,
            title: "Client Meeting Notes Distribution",
            meta: "Completed Yesterday",
            status: "Done",
            completed: true
        }
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen space-y-6">
            {/* TOP SECTION: Header + Timer + Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT SIDE: Header and Timer */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Good Morning, Alex</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Here is your daily activity overview.
                        </p>
                    </div>

                    {/* Timer Card */}
                    <Card className="shadow-sm border-gray-200">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-green-600 text-xs font-semibold uppercase tracking-wider mb-4">
                                        <span className="h-2 w-2 rounded-full bg-green-500" />
                                        Currently Working
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <TimeBlock value="04" label="HRS" />
                                        <TimeBlock value="12" label="MIN" />
                                        <TimeBlock value="35" label="SEC" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Button className="bg-blue-600 hover:bg-blue-700 h-11 px-6 text-sm font-medium shadow-sm">
                                        <Coffee className="h-4 w-4 mr-2" />
                                        Start Break
                                    </Button>
                                    <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50 h-11 px-6 text-sm font-medium">
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Clock Out
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT SIDE: Stats */}
                <div className="flex flex-col gap-4">
                    <MiniStat
                        icon={<Clock className="h-5 w-5 text-blue-600" />}
                        label="Weekly Hours"
                        value="32.5h"
                        bgColor="bg-blue-50"
                    />
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

            {/* BOTTOM SECTION: Tasks + Announcements */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* ASSIGNED TASKS */}
                <Card className="lg:col-span-2 shadow-sm border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold text-gray-900">
                            <CheckSquare className="h-5 w-5 text-blue-600" />
                            Assigned Tasks
                        </CardTitle>
                        <Button variant="link" size="sm" className="text-blue-600 hover:text-blue-700 font-medium h-auto p-0">
                            View All
                        </Button>
                    </CardHeader>

                    <CardContent className="p-6 space-y-4">
                        {tasks.map((task) => (
                            <TaskItem
                                key={task.id}
                                title={task.title}
                                meta={task.meta}
                                status={task.status}
                                completed={task.completed}
                                onToggle={() => toggleTask(task.id)}
                            />
                        ))}
                    </CardContent>
                </Card>

                {/* ANNOUNCEMENTS */}
                <Card className="shadow-sm border-gray-200">
                    <CardHeader className="py-4 px-6 border-b border-gray-100">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold text-gray-900">
                            <Megaphone className="h-5 w-5 text-orange-500" />
                            Announcements
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 space-y-5">
                        <Announcement
                            tag="Event"
                            title="All Hands Meeting"
                            date="Oct 25 2:06 PM"
                            desc="Join us for the quarterly all-hands meeting in the main auditorium or via Zoom. We will discuss Q4 goals."
                        />
                        <Announcement
                            tag="Notice"
                            title="Office Maintenance"
                            date="Oct 28"
                            desc="The office AC system will undergo maintenance this weekend. Please ensure all devices are powered off."
                        />

                        <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
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
        <p className="text-5xl font-bold text-gray-900 tabular-nums">{value}</p>
        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1 font-medium">{label}</p>
    </div>
);

const MiniStat = ({ icon, label, value, bgColor }) => (
    <Card className="shadow-sm border-gray-200">
        <CardContent className="p-4 flex items-center gap-3">
            <div className={`p-2.5 rounded-lg ${bgColor}`}>{icon}</div>
            <div>
                <p className="text-xs text-gray-600 font-medium mb-0.5">{label}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
        </CardContent>
    </Card>
);

const TaskItem = ({ title, meta, status, completed, onToggle }) => {
    const statusStyles = {
        "High Priority": "bg-red-600 text-white hover:bg-red-600 border-0",
        "In Progress": "bg-blue-600 text-white hover:bg-blue-600 border-0",
        Pending: "bg-gray-200 text-gray-700 hover:bg-gray-200 border-0",
        Done: "bg-green-600 text-white hover:bg-green-600 border-0",
    };

    return (
        <div className="flex items-start gap-3 py-1">
            <Checkbox 
                checked={completed} 
                onCheckedChange={onToggle} 
                className="mt-1 border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" 
            />
            <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium leading-snug ${completed ? "line-through text-gray-400" : "text-gray-900"}`}>
                    {title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{meta}</p>
            </div>
            <Badge className={`text-xs font-medium px-2.5 py-1 ${statusStyles[status]} whitespace-nowrap`}>
                {status}
            </Badge>
        </div>
    );
};

const Announcement = ({ tag, title, date, desc }) => (
    <div className="space-y-2">
        <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs text-blue-600 border-blue-200 bg-blue-50 hover:bg-blue-50 font-medium px-2 py-0.5">
                {tag}
            </Badge>
            <span className="text-xs text-gray-500">{date}</span>
        </div>
        <p className="font-semibold text-sm text-gray-900">{title}</p>
        <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
    </div>
);
