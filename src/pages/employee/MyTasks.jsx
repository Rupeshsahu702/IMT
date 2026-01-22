"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
    MoreHorizontal,
    Calendar,
    Check,
    AlertTriangle,
    ClipboardList,
    MessageCircle,
    Flag,
    CheckCircle2,
    ArrowUpDown,
    Heart,
    Clock,
} from "lucide-react";

import RequestDeadlineExtensionModal from "./RequestDeadlineExtensionModal";

// Sample tasks data
const allTasks = [
    {
        id: 1,
        priority: "High",
        title: "Update API Documentation",
        desc: "Review the new endpoints for the v2.0 release and update the Swagger file...",
        due: "Due Today",
        dueDate: "Oct 24, 2023",
        status: "In Progress",
        isUrgent: true, // Due today or overdue
        avatars: [
            { initials: "JD", color: "bg-blue-500" },
            { initials: "AM", color: "bg-purple-500" },
        ],
    },
    {
        id: 2,
        priority: "Medium",
        title: "Refactor Login Component",
        desc: "Migrate the legacy class-based component to functional component...",
        date: "Oct 26, 2023",
        status: "To Do",
        isUrgent: false,
        avatars: [{ initials: "JS", color: "bg-green-500" }],
    },
    {
        id: 3,
        priority: "Low",
        title: "Design User Onboarding Flow",
        desc: "Create wireframes for the new user sign-up experience. Focus on reducin...",
        date: "Nov 02, 2023",
        status: "In Review",
        isUrgent: false,
        avatars: [],
    },
    {
        id: 4,
        priority: "High",
        title: "Fix iOS Crash in Payment Module",
        desc: "Urgent fix required for the crash reported in version 4.5.2 when users...",
        overdue: "Overdue (Oct 22)",
        dueDate: "Oct 22, 2023",
        status: "In Progress",
        isUrgent: true, // Overdue
        avatars: [{ initials: "RK", color: "bg-gray-600" }],
        showDoneButton: true,
    },
    {
        id: 5,
        priority: "Medium",
        title: "Quarterly Report Analysis",
        desc: "Compile the Q3 sales data into the standard presentation format for...",
        completed: "Completed Oct 20",
        status: "Done",
        done: true,
        isUrgent: false,
        showViewDetails: true,
        avatars: [],
    },
];

export default function MyTasks() {
    const [activeTab, setActiveTab] = useState("all");
    const [extensionModalOpen, setExtensionModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    // Filter tasks based on active tab
    const filteredTasks = allTasks.filter((task) => {
        if (activeTab === "all") return true;
        if (activeTab === "todo") return task.status === "To Do";
        if (activeTab === "progress") return task.status === "In Progress" || task.status === "In Review";
        if (activeTab === "done") return task.status === "Done";
        return true;
    });

    // Calculate stats
    const totalTasks = allTasks.length;
    const inProgressTasks = allTasks.filter(t => t.status === "In Progress" || t.status === "In Review").length;
    const todoTasks = allTasks.filter(t => t.status === "To Do").length;
    const doneTasks = allTasks.filter(t => t.status === "Done").length;

    // Handle request extension click
    const handleRequestExtension = (task) => {
        setSelectedTask(task);
        setExtensionModalOpen(true);
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-5">
            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Stat
                    title="Total Tasks"
                    value={totalTasks.toString()}
                    note="+2 new"
                    success
                    icon={<ClipboardList className="h-5 w-5 text-blue-600" />}
                    iconBg="bg-blue-100"
                />
                <Stat
                    title="In Progress"
                    value={inProgressTasks.toString()}
                    note="Active items"
                    icon={<MessageCircle className="h-5 w-5 text-green-600" />}
                    iconBg="bg-green-100"
                />
                <Stat
                    title="Pending Review"
                    value={todoTasks.toString()}
                    note="Needs approval"
                    warning
                    icon={<Flag className="h-5 w-5 text-orange-500" />}
                    iconBg="bg-orange-100"
                />
                <Stat
                    title="Completed"
                    value={doneTasks.toString()}
                    note="+5 this week"
                    success
                    icon={<CheckCircle2 className="h-5 w-5 text-green-600" />}
                    iconBg="bg-green-100"
                />
            </div>

            {/* FILTER BAR */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="bg-transparent p-0 gap-2">
                        <TabsTrigger
                            value="all"
                            className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-2 pb-2"
                        >
                            All Tasks
                            <span className="ml-1.5 bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px]">
                                {totalTasks}
                            </span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="todo"
                            className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-2 pb-2"
                        >
                            To Do
                        </TabsTrigger>
                        <TabsTrigger
                            value="progress"
                            className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-2 pb-2"
                        >
                            In Progress
                        </TabsTrigger>
                        <TabsTrigger
                            value="done"
                            className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-2 pb-2"
                        >
                            Done
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                <Button variant="outline" size="sm" className="gap-2">
                    <ArrowUpDown className="h-4 w-4" />
                    Sort by: Deadline
                </Button>
            </div>

            {/* TITLE */}
            <h2 className="text-lg font-semibold text-gray-900">Active Priority Items</h2>

            {/* TASK GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onRequestExtension={handleRequestExtension}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-10 text-gray-500">
                        No tasks found for this filter.
                    </div>
                )}
            </div>

            {/* Request Extension Modal */}
            <RequestDeadlineExtensionModal
                open={extensionModalOpen}
                onOpenChange={setExtensionModalOpen}
                taskName={selectedTask?.title}
                currentDeadline={selectedTask?.dueDate || selectedTask?.date || "N/A"}
            />
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const Stat = ({ title, value, note, success, warning, icon, iconBg }) => (
    <Card className="bg-white">
        <CardContent className="p-4">
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <p className="text-sm text-gray-500">{title}</p>
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                    <p
                        className={`text-sm flex items-center gap-1 ${success
                                ? "text-green-600"
                                : warning
                                    ? "text-orange-600"
                                    : "text-gray-500"
                            }`}
                    >
                        {success && "↗"}
                        {note}
                    </p>
                </div>
                <div className={`p-2.5 rounded-xl ${iconBg}`}>{icon}</div>
            </div>
        </CardContent>
    </Card>
);

const TaskCard = ({ task, onRequestExtension }) => {
    const {
        priority,
        title,
        desc,
        due,
        date,
        overdue,
        completed,
        status,
        done,
        avatars = [],
        showDoneButton,
        showViewDetails,
        isUrgent,
    } = task;

    const priorityStyle = {
        High: "bg-red-500 text-white hover:bg-red-500",
        Medium: "bg-yellow-500 text-white hover:bg-yellow-500",
        Low: "bg-cyan-500 text-white hover:bg-cyan-500",
    };

    return (
        <Card className="bg-white hover:shadow-md transition">
            <CardContent className="p-4 space-y-3">
                {/* TOP */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Badge className={`${priorityStyle[priority]} text-xs font-medium px-2.5 py-0.5`}>
                            {priority} Priority
                        </Badge>
                        {done && (
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3" />
                                Completed
                            </Badge>
                        )}
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="hover:bg-gray-100 rounded p-1">
                            <MoreHorizontal className="h-4 w-4 text-gray-400" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                            {/* Show Request Extension only for urgent tasks (due today or overdue) */}
                            {isUrgent && !done && (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() => onRequestExtension(task)}
                                        className="text-orange-600 focus:text-orange-600"
                                    >
                                        <Clock className="h-4 w-4 mr-2" />
                                        Request Extension
                                    </DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* CONTENT */}
                <div className="space-y-1">
                    <p
                        className={`font-semibold text-gray-900 ${done && "line-through text-gray-500"
                            }`}
                    >
                        {title}
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2">{desc}</p>
                </div>

                {/* META - Date and Avatars */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1.5 text-gray-500">
                        {due && (
                            <span className="text-red-500 flex items-center gap-1 font-medium">
                                <Heart className="h-3.5 w-3.5 fill-red-500" />
                                {due}
                            </span>
                        )}
                        {overdue && (
                            <span className="text-red-500 flex items-center gap-1 font-medium">
                                <AlertTriangle className="h-3.5 w-3.5" />
                                {overdue}
                            </span>
                        )}
                        {date && (
                            <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                {date}
                            </span>
                        )}
                        {completed && (
                            <span className="text-green-600 flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                {completed}
                            </span>
                        )}
                    </div>

                    {avatars.length > 0 && (
                        <div className="flex -space-x-2">
                            {avatars.map((avatar, index) => (
                                <Avatar key={index} className="h-7 w-7 border-2 border-white">
                                    <AvatarFallback className={`${avatar.color} text-white text-xs`}>
                                        {avatar.initials}
                                    </AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                    )}
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5">
                        <span
                            className={`h-2 w-2 rounded-full ${status === "In Progress"
                                    ? "bg-blue-500"
                                    : status === "To Do"
                                        ? "bg-gray-400"
                                        : status === "In Review"
                                            ? "bg-orange-500"
                                            : "bg-green-500"
                                }`}
                        />
                        <span className="text-sm text-gray-600">{status}</span>
                    </div>

                    {showViewDetails ? (
                        <Button variant="link" size="sm" className="text-blue-600 p-0 h-auto">
                            View Details
                        </Button>
                    ) : showDoneButton ? (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white gap-1">
                            <Check className="h-4 w-4" />
                            Done
                        </Button>
                    ) : (
                        <Button size="sm" variant="outline" className="gap-1">
                            <Check className="h-4 w-4" />
                            Complete
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
