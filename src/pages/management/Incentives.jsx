"use client";

import { useState } from "react";
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
    TrendingUp,
    CreditCard,
    Users,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import AwardIncentiveModal from "./AwardIncentiveModal";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function Incentives() {
    const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleAward = (employee) => {
        setSelectedEmployee(employee);
        setIsAwardModalOpen(true);
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-5">
            {/* HEADER */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Incentive & Performance</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Track productivity milestones and award top contributors across the company.
                    </p>
                </div>

                <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Filter className="h-4 w-4" />
                        Filters
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 gap-2">
                        <Download className="h-4 w-4" />
                        Export CSV
                    </Button>
                </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    title="Total Incentives Awarded"
                    value="$42,850.00"
                    change="+12%"
                    icon={<CreditCard className="h-5 w-5 text-blue-600" />}
                    iconBg="bg-blue-100"
                />
                <StatCard
                    title="Avg. Productivity Score"
                    value="92.4%"
                    change="+5%"
                    icon={<CheckCircle2 className="h-5 w-5 text-blue-600" />}
                    iconBg="bg-blue-100"
                />
                <StatCard
                    title="Eligible for Rewards"
                    value="14 Staff"
                    tag="High"
                    icon={<Users className="h-5 w-5 text-orange-500" />}
                    iconBg="bg-orange-100"
                />
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* PERFORMANCE TREND */}
                <Card className="lg:col-span-2 bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-0">
                        <CardTitle className="text-lg font-semibold">Performance Trends</CardTitle>
                        <span className="text-sm text-gray-500">Last 6 Months</span>
                    </CardHeader>

                    <CardContent className="pt-2 pb-4">
                        <Bar
                            data={{
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                                datasets: [
                                    {
                                        data: [65, 78, 74, 88, 95, 102],
                                        backgroundColor: "#3b82f6",
                                        borderRadius: 6,
                                    },
                                ],
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: { legend: { display: false } },
                                scales: {
                                    y: { display: false },
                                    x: {
                                        grid: { display: false },
                                        ticks: { font: { size: 12 } },
                                    },
                                },
                            }}
                            height={260}
                        />
                    </CardContent>
                </Card>

                {/* TOP PERFORMERS */}
                <Card className="bg-white">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-semibold">Top Performers</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <TopUser
                            name="Sarah Chen"
                            score="98.2"
                            rank="#1"
                            avatarColor="bg-blue-100"
                        />
                        <TopUser
                            name="Marcus Wright"
                            score="96.5"
                            rank="#2"
                            avatarColor="bg-orange-100"
                        />
                        <TopUser
                            name="Elena Rodriguez"
                            score="94.1"
                            rank="#3"
                            avatarColor="bg-green-100"
                        />

                        <Button variant="outline" className="w-full mt-4">
                            View Leaderboard
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* STAFF TABLE */}
            <Card className="bg-white">
                <CardContent className="p-0">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-2 px-6 py-4 border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wide font-medium">
                        <div className="col-span-2">Employee Name</div>
                        <div className="col-span-1">Department</div>
                        <div className="col-span-1 text-center">Total Tasks</div>
                        <div className="col-span-2">On-Time Rate (%)</div>
                        <div className="col-span-1 text-center">Delayed</div>
                        <div className="col-span-1 text-center">Score</div>
                        <div className="col-span-2 text-center">Eligibility Status</div>
                        <div className="col-span-2 text-right">Action</div>
                    </div>

                    {/* Rows */}
                    <StaffRow
                        name="Sarah Chen"
                        email="sarah.c@techcorp.com"
                        dept="Engineering"
                        tasks={142}
                        rate={98}
                        delayed={0}
                        score={98.2}
                        status="Eligible"
                        onAward={() => handleAward({ name: "Sarah Chen", score: "98.2%", onTimeCompletion: "98%", projectStatus: "Exceeds Goals" })}
                    />
                    <StaffRow
                        name="Marcus Wright"
                        email="m.wright@techcorp.com"
                        dept="Sales"
                        tasks={89}
                        rate={92}
                        delayed={1}
                        score={96.5}
                        status="Eligible"
                        onAward={() => handleAward({ name: "Marcus Wright", score: "96.5%", onTimeCompletion: "92%", projectStatus: "Exceeds Goals" })}
                    />
                    <StaffRow
                        name="Elena Rodriguez"
                        email="elena.r@techcorp.com"
                        dept="Marketing"
                        tasks={104}
                        rate={89}
                        delayed={3}
                        score={94.1}
                        status="Eligible"
                        onAward={() => handleAward({ name: "Elena Rodriguez", score: "94.1%", onTimeCompletion: "89%", projectStatus: "Exceeds Goals" })}
                    />
                    <StaffRow
                        name="David Kim"
                        email="d.kim@techcorp.com"
                        dept="Product"
                        tasks={112}
                        rate={72}
                        delayed={8}
                        score={76.8}
                        status="Ineligible"
                        onAward={() => handleAward({ name: "David Kim", score: "76.8%", onTimeCompletion: "72%", projectStatus: "Needs Improvement" })}
                    />
                    <StaffRow
                        name="Lisa Wang"
                        email="lisa.w@techcorp.com"
                        dept="HR"
                        tasks={65}
                        rate={95}
                        delayed={0}
                        score={97.0}
                        status="Eligible"
                        onAward={() => handleAward({ name: "Lisa Wang", score: "97.0%", onTimeCompletion: "95%", projectStatus: "Exceeds Goals" })}
                    />

                    {/* Footer with Pagination */}
                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500">
                            Showing 1 to 5 of 124 employees
                        </p>
                        <div className="flex items-center gap-1">
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-8 w-8 p-0">
                                1
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                2
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                3
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <AwardIncentiveModal
                open={isAwardModalOpen}
                onOpenChange={setIsAwardModalOpen}
                employee={selectedEmployee}
            />
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ title, value, change, tag, icon, iconBg }) => (
    <Card className="bg-white">
        <CardContent className="p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl ${iconBg}`}>
                        {icon}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">{title}</p>
                        <p className="text-2xl font-bold text-gray-900">{value}</p>
                    </div>
                </div>
                {change && (
                    <span className="text-sm font-medium text-green-600">{change}</span>
                )}
                {tag && (
                    <Badge className="bg-red-100 text-red-600 hover:bg-red-100 font-medium">
                        {tag}
                    </Badge>
                )}
            </div>
        </CardContent>
    </Card>
);

const TopUser = ({ name, score, rank, avatarColor }) => (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
                <AvatarFallback className={`${avatarColor} text-gray-700 font-medium`}>
                    {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-xs text-gray-500">{score} Score</p>
            </div>
        </div>
        <span className="text-lg font-bold text-blue-600">{rank}</span>
    </div>
);

const StaffRow = ({ name, email, dept, tasks, rate, delayed, score, status, onAward }) => (
    <div className="grid grid-cols-12 gap-2 px-6 py-4 border-b border-gray-100 items-center hover:bg-gray-50 transition">
        {/* Employee Name */}
        <div className="col-span-2 flex items-center gap-3">
            <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-blue-100 text-blue-700 font-medium text-sm">
                    {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold text-gray-900 text-sm">{name}</p>
                <p className="text-xs text-gray-500">{email}</p>
            </div>
        </div>

        {/* Department */}
        <div className="col-span-1">
            <span className="text-sm text-gray-700">{dept}</span>
        </div>

        {/* Total Tasks */}
        <div className="col-span-1 text-center">
            <span className="text-sm font-medium text-gray-900">{tasks}</span>
        </div>

        {/* On-Time Rate */}
        <div className="col-span-2 flex items-center gap-2">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden w-16">
                <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${rate}%` }}
                />
            </div>
            <span className="text-sm text-gray-600">{rate}%</span>
        </div>

        {/* Delayed */}
        <div className="col-span-1 text-center">
            <span className={`text-sm font-medium ${delayed >= 5 ? 'text-red-500' : 'text-gray-900'}`}>
                {delayed}
            </span>
        </div>

        {/* Score */}
        <div className="col-span-1 text-center">
            <span className="text-sm font-semibold text-gray-900">{score}</span>
        </div>

        {/* Eligibility Status */}
        <div className="col-span-2 text-center">
            <div className="flex items-center justify-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${status === "Eligible" ? "bg-green-500" : "bg-gray-400"
                    }`} />
                <span className={`text-sm ${status === "Eligible" ? "text-green-600" : "text-gray-500"
                    }`}>
                    {status}
                </span>
            </div>
        </div>

        {/* Action */}
        <div className="col-span-2 flex justify-end">
            <Button
                size="sm"
                className={`h-8 px-5 ${status === "Eligible"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                    }`}
                disabled={status !== "Eligible"}
                onClick={onAward}
            >
                Award
            </Button>
        </div>
    </div>
);
