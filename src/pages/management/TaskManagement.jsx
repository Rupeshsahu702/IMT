"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import AssignTaskModal from "./AssignTaskModal";

import {
    Plus,
    Search,
    AlertTriangle,
    TrendingUp,
    ListChecks,
    Filter,
    CalendarDays,
    LayoutGrid,
    List,
    MoreHorizontal,
    Check,
} from "lucide-react";

export default function TaskManagement() {
    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-6">
            {/* HEADER */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-1">Task Overview</h1>
                    <p className="text-sm text-gray-500">
                        Monitor team productivity and project statuses.
                    </p>
                </div>
                <AssignTaskModal />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    title="Total Tasks"
                    value="142"
                    change="+12%"
                    icon={<ListChecks className="h-5 w-5 text-blue-600" />}
                    bgColor="bg-blue-50"
                />
                <StatCard
                    title="Overdue Tasks"
                    value="8"
                    change="+2%"
                    negative
                    icon={<AlertTriangle className="h-5 w-5 text-orange-500" />}
                    bgColor="bg-orange-50"
                />
                <StatCard
                    title="Completion Rate"
                    value="94%"
                    change="+5%"
                    icon={<TrendingUp className="h-5 w-5 text-green-600" />}
                    bgColor="bg-green-50"
                />
            </div>

            {/* SEARCH BAR */}
            <div className="flex flex-col lg:flex-row gap-3 justify-between">
                <div className="relative flex-1 max-w-xl">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search tasks by name, assignee, or tag..."
                        className="pl-10"
                    />
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                    </Button>
                    <Button variant="outline" size="sm">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        Sort by Date
                    </Button>
                    <Button variant="outline" size="icon" className="bg-blue-600 text-white hover:bg-blue-700">
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <List className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* KANBAN */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <TaskColumn title="ASSIGNED" count={5} color="red">
                    <TaskCard
                        tag="DESIGN"
                        tagColor="bg-purple-100 text-purple-700"
                        title="Update Homepage Hero Assets"
                        user="Anna K."
                        date="Oct 24"
                    />
                    <TaskCard
                        tag="FINANCE"
                        tagColor="bg-blue-100 text-blue-700"
                        title="Q3 Expense Report Review"
                        user="James L."
                        date="Oct 28"
                    />
                </TaskColumn>

                <TaskColumn title="IN PROGRESS" count={3} color="blue">
                    <TaskCard
                        tag="DEV"
                        tagColor="bg-blue-100 text-blue-700"
                        title="API Authentication Refactor"
                        user="Mike R."
                        progress={70}
                        priority="HIGH PRIORITY"
                        dueToday
                    />
                    <TaskCard
                        tag="MARKETING"
                        tagColor="bg-green-100 text-green-700"
                        title="Social Media Campaign - Q4"
                        user="Sarah M."
                        progress={40}
                        date="Nov 02"
                    />
                </TaskColumn>

                <TaskColumn title="COMPLETED" count={12} color="green">
                    <TaskCard
                        tag="HR"
                        tagColor="bg-green-100 text-green-700"
                        title="Onboard New Interns"
                        user="Mike R."
                        done="Done yesterday"
                        completed
                    />
                    <TaskCard
                        tag="DESIGN"
                        tagColor="bg-purple-100 text-purple-700"
                        title="Mobile App Icons"
                        user="Anna K."
                        done="Done 2 days ago"
                        completed
                    />
                </TaskColumn>
            </div>
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ title, value, change, icon, negative, bgColor }) => (
    <Card>
        <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-gray-600">{title}</p>
                <div className={`p-2 rounded-lg ${bgColor}`}>{icon}</div>
            </div>
            <div className="flex items-end gap-2">
                <p className="text-4xl font-bold text-gray-900">{value}</p>
                <p className={`text-sm font-medium mb-1 ${negative ? "text-red-600" : "text-green-600"}`}>
                    {change}
                </p>
            </div>
        </CardContent>
    </Card>
);

const TaskColumn = ({ title, count, children, color }) => {
    const colorClasses = {
        red: "bg-red-500",
        blue: "bg-blue-500",
        green: "bg-green-500",
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${colorClasses[color]}`}></div>
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{title}</h3>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-600">{count}</Badge>
                </div>
                <div className="flex items-center gap-1">
                    <Button size="icon" variant="ghost" className="h-6 w-6">
                        <Plus className="h-4 w-4 text-gray-400" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-6 w-6">
                        <MoreHorizontal className="h-4 w-4 text-gray-400" />
                    </Button>
                </div>
            </div>

            <div className="space-y-3">{children}</div>
        </div>
    );
};

const TaskCard = ({
    tag,
    tagColor,
    title,
    user,
    date,
    progress,
    priority,
    dueToday,
    done,
    completed,
}) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 space-y-3">
            {priority ? (
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Badge className="bg-red-500 text-white text-xs font-semibold">{priority}</Badge>
                        <Badge variant="secondary" className={`${tagColor} text-xs font-semibold`}>{tag}</Badge>
                    </div>
                    {completed && (
                        <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex items-center justify-between">
                    <Badge variant="secondary" className={`${tagColor} text-xs font-semibold`}>{tag}</Badge>
                    {completed && (
                        <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                        </div>
                    )}
                </div>
            )}

            <p className={`font-medium text-sm ${completed ? "line-through text-gray-500" : "text-gray-900"}`}>
                {title}
            </p>

            {progress !== undefined && (
                <Progress value={progress} className="h-2" />
            )}

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6 bg-gray-300">
                        <AvatarFallback className="text-xs">{user[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-gray-600">{user}</span>
                </div>

                {date && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <CalendarDays className="h-3 w-3" />
                        <span>{date}</span>
                    </div>
                )}
                {dueToday && (
                    <div className="flex items-center gap-1 text-xs text-orange-600 font-medium">
                        <AlertTriangle className="h-3 w-3" />
                        <span>Due Today</span>
                    </div>
                )}
                {done && <span className="text-xs text-green-600 font-medium">{done}</span>}
            </div>
        </CardContent>
    </Card>
);
