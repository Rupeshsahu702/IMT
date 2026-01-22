"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import {
    MoreHorizontal,
    MapPin,
    Trophy,
    Award,
} from "lucide-react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function EmployeeProfile() {
    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-5">
            {/* COVER + HEADER */}
            <Card className="overflow-hidden">
                <div className="h-32 bg-linear-to-r from-blue-600 to-blue-500" />

                <CardContent className="flex items-center justify-between -mt-12">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20 border-4 border-white">
                            <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                            <AvatarFallback>AM</AvatarFallback>
                        </Avatar>

                        <div>
                            <h2 className="text-xl font-semibold">Alex Morgan</h2>
                            <p className="text-sm text-muted-foreground">
                                Senior Product Designer &nbsp;•&nbsp; Design & UX Department
                            </p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                <MapPin className="h-3 w-3" />
                                San Francisco, CA
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button size="sm">Edit Profile</Button>
                        <Button size="icon" variant="outline">
                            <MoreHorizontal />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-5">
                    {/* PERSONAL + PROFESSIONAL */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoCard title="Personal Information">
                            <InfoRow label="Email Address" value="alex.morgan@techcorp.com" />
                            <InfoRow label="Phone Number" value="+1 (555) 0123-4567" />
                            <InfoRow label="Date of Birth" value="May 14, 1992" />
                        </InfoCard>

                        <InfoCard title="Professional Details">
                            <InfoRow label="Employee ID" value="TC-84920" />
                            <InfoRow label="Date of Joining" value="October 12, 2021" />
                            <InfoRow label="Direct Manager" value="Sarah Jenkins" />
                        </InfoCard>
                    </div>

                    {/* SKILLS */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Skills & Expertise</CardTitle>
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
                                <Badge key={skill} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                            <Badge variant="outline">+ Add Skill</Badge>
                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-5">
                    {/* PERFORMANCE */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Performance</CardTitle>
                            <p className="text-xs text-muted-foreground">
                                Overall rating for Q3 2023
                            </p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            {/* CIRCULAR RATING */}
                            <div className="flex justify-center">
                                <div className="h-32 w-32">
                                    <CircularProgressbar
                                        value={96}
                                        text="4.8"
                                        styles={buildStyles({
                                            pathColor: "#2563EB",
                                            textColor: "#0F172A",
                                            trailColor: "#E5E7EB",
                                        })}
                                    />
                                    <p className="text-center text-xs text-muted-foreground mt-1">
                                        out of 5.0
                                    </p>
                                </div>
                            </div>

                            <Metric label="Task Completion" value="96%" />
                            <Metric label="Team Feedback" value="4.9 / 5" />

                            <Separator />

                            {/* ACHIEVEMENTS */}
                            <div>
                                <p className="text-sm font-medium mb-2">Recent Achievements</p>

                                <Achievement
                                    icon={<Trophy className="text-orange-500" />}
                                    title="Employee of the Month"
                                    desc="September 2023"
                                />

                                <Achievement
                                    icon={<Award className="text-blue-600" />}
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

const InfoCard = ({ title, children }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-sm">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">{children}</CardContent>
    </Card>
);

const InfoRow = ({ label, value }) => (
    <div>
        <p className="text-xs text-muted-foreground uppercase">{label}</p>
        <p className="text-sm font-medium">{value}</p>
    </div>
);

const Metric = ({ label, value }) => (
    <div>
        <div className="flex justify-between text-sm mb-1">
            <span>{label}</span>
            <span className="font-medium">{value}</span>
        </div>
        <Progress value={label === "Task Completion" ? 96 : 98} />
    </div>
);

const Achievement = ({ icon, title, desc }) => (
    <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-slate-100">{icon}</div>
        <div>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
    </div>
);
