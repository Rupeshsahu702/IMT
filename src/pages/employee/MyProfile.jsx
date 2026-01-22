"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
    MoreHorizontal,
    User,
    Briefcase,
    Trophy,
    Award,
    CheckCircle,
} from "lucide-react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function MyProfile() {
    return (
        <div className="p-6 bg-slate-100 min-h-screen">
            {/* MAIN CARD CONTAINER */}
            <Card className="overflow-hidden shadow-sm">
                {/* BLUE HEADER BANNER */}
                <div className="h-28 bg-linear-to-r from-blue-600 to-blue-500 rounded-t-lg" />

                {/* PROFILE HEADER */}
                <div className="px-6 pb-6 -mt-14">
                    <div className="flex items-end justify-between">
                        {/* LEFT: Avatar + Info */}
                        <div className="flex items-end gap-4">
                            {/* Avatar with green badge */}
                            <div className="relative">
                                <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                                    <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                                    <AvatarFallback>AM</AvatarFallback>
                                </Avatar>
                                {/* Green verified badge */}
                                <div className="absolute -bottom-1 -left-1 bg-green-500 rounded-full p-1">
                                    <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                            </div>

                            {/* Name and details */}
                            <div className="mb-2">
                                <h2 className="text-2xl font-bold text-gray-900">Alex Morgan</h2>
                                <p className="text-base">
                                    <span className="text-blue-600 font-medium">Senior Product Designer</span>
                                    <span className="text-gray-400 mx-2">•</span>
                                    <span className="text-gray-500">Design & UX Department</span>
                                    <span className="text-gray-400 mx-2">•</span>
                                    <span className="text-gray-500">San Francisco, CA</span>
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Buttons */}
                        <div className="flex gap-2 mb-2">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Edit Profile
                            </Button>
                            <Button size="icon" variant="outline" className="border-gray-300">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* MAIN CONTENT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                {/* LEFT COLUMN - Personal + Professional + Skills */}
                <div className="lg:col-span-2 space-y-5">
                    {/* PERSONAL + PROFESSIONAL ROW */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Personal Information */}
                        <Card className="shadow-sm">
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        <User className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">Personal Information</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <InfoRow label="EMAIL ADDRESS" value="alex.morgan@techcorp.com" />
                                <InfoRow label="PHONE NUMBER" value="+1 (555) 0123-4567" />
                                <InfoRow label="DATE OF BIRTH" value="May 14, 1992" />
                            </CardContent>
                        </Card>

                        {/* Professional Details */}
                        <Card className="shadow-sm">
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        <Briefcase className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">Professional Details</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <InfoRow label="EMPLOYEE ID" value="TC-84920" />
                                <InfoRow label="DATE OF JOINING" value="October 12, 2021" />
                                <InfoRowWithAvatar
                                    label="DIRECT MANAGER"
                                    value="Sarah Jenkins"
                                    avatarSrc="https://i.pravatar.cc/40?img=5"
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* SKILLS & EXPERTISE */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <Award className="h-5 w-5 text-blue-600" />
                                </div>
                                <CardTitle className="text-lg font-semibold">Skills & Expertise</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {[
                                "Product Strategy",
                                "UI/UX Design",
                                "Figma Professional",
                                "Design Systems",
                                "User Research",
                                "Prototyping",
                                "Agile Methodology",
                            ].map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-normal px-4 py-1.5 text-base"
                                >
                                    {skill}
                                </Badge>
                            ))}
                            <Badge
                                variant="outline"
                                className="text-gray-500 border-dashed cursor-pointer hover:bg-gray-50 text-base px-4 py-1.5"
                            >
                                + Add Skill
                            </Badge>
                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT COLUMN - Performance */}
                <div>
                    <Card className="shadow-sm">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg font-semibold">Performance</CardTitle>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Overall rating for Q3 2023
                                    </p>
                                </div>
                                <div className="p-2 bg-orange-50 rounded-lg">
                                    <Trophy className="h-5 w-5 text-orange-500" />
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            {/* CIRCULAR RATING */}
                            <div className="flex justify-center py-4">
                                <div className="h-28 w-28 relative">
                                    <CircularProgressbar
                                        value={96}
                                        styles={buildStyles({
                                            pathColor: "#2563EB",
                                            trailColor: "#E5E7EB",
                                            strokeLinecap: "round",
                                        })}
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-4xl font-bold text-gray-900">4.8</span>
                                        <span className="text-sm text-gray-500">OF 5.0</span>
                                    </div>
                                </div>
                            </div>

                            {/* METRICS */}
                            <div className="space-y-3">
                                <MetricRow label="Task Completion" value="96%" valueColor="text-green-600" />
                                <MetricRow label="Team Feedback" value="4.9/5" valueColor="text-blue-600" />
                            </div>

                            {/* ACHIEVEMENTS */}
                            <div className="pt-2">
                                <p className="text-base font-semibold text-gray-900 mb-3">Recent Achievements</p>

                                <Achievement
                                    icon={<Trophy className="h-5 w-5 text-orange-500" />}
                                    bgColor="bg-orange-50"
                                    title="Employee of the Month"
                                    desc="September 2023"
                                />

                                <Achievement
                                    icon={<Award className="h-5 w-5 text-blue-600" />}
                                    bgColor="bg-blue-50"
                                    title="Design Sprint Lead"
                                    desc="Q2 Main Project"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const InfoRow = ({ label, value }) => (
    <div>
        <p className="text-sm text-gray-400 font-medium tracking-wide">{label}</p>
        <p className="text-base text-gray-900 font-medium mt-0.5">{value}</p>
    </div>
);

const InfoRowWithAvatar = ({ label, value, avatarSrc }) => (
    <div>
        <p className="text-sm text-gray-400 font-medium tracking-wide">{label}</p>
        <div className="flex items-center gap-2 mt-0.5">
            <Avatar className="h-6 w-6">
                <AvatarImage src={avatarSrc} />
                <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <p className="text-base text-gray-900 font-medium">{value}</p>
        </div>
    </div>
);

const MetricRow = ({ label, value, valueColor }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
        <span className="text-base text-gray-600">{label}</span>
        <span className={`text-base font-semibold ${valueColor}`}>{value}</span>
    </div>
);

const Achievement = ({ icon, bgColor, title, desc }) => (
    <div className="flex items-center gap-3 mb-3">
        <div className={`p-2.5 rounded-lg ${bgColor}`}>{icon}</div>
        <div>
            <p className="text-base font-medium text-gray-900">{title}</p>
            <p className="text-sm text-gray-500">{desc}</p>
        </div>
    </div>
);
