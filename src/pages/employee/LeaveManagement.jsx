"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import {
    Calendar as CalendarIcon,
    Plus,
    Info,
    Star,
    Send,
    ChevronDown,
    Briefcase,
    CheckCircle,
} from "lucide-react";

export default function LeaveManagement() {
    const { toast } = useToast();

    const handleSubmit = () => {
        toast({
            title: "Leave Application Submitted",
            description: "Your leave request has been sent to your manager for approval.",
            className: "bg-green-50 border-green-200",
            action: <CheckCircle className="h-5 w-5 text-green-600" />,
        });
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-5">
            {/* BREADCRUMB */}
            <p className="text-sm text-gray-500">
                Portal / <span className="text-blue-600">Apply for Leave</span>
            </p>

            {/* HEADER */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Leave Management</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Monitor your availability and plan your time off.
                    </p>
                </div>

                <Button variant="outline" size="sm" className="gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    View Calendar
                </Button>
            </div>

            {/* LEAVE BALANCE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <LeaveBalance
                    title="SICK LEAVE"
                    value="05 Days"
                    note="Remaining for this cycle"
                    icon={<Plus className="h-5 w-5 text-blue-600" />}
                    iconBg="bg-blue-100"
                />
                <LeaveBalance
                    title="CASUAL LEAVE"
                    value="08 Days"
                    note="Remaining for this cycle"
                    icon={<Briefcase className="h-5 w-5 text-blue-600" />}
                    iconBg="bg-blue-100"
                />
                <LeaveBalance
                    title="EARNED LEAVE"
                    value="12 Days"
                    note="Carry forward enabled"
                    icon={<Star className="h-5 w-5 text-blue-600 fill-blue-600" />}
                    iconBg="bg-blue-100"
                />
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* APPLY LEAVE */}
                <Card className="bg-white lg:col-span-2">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-semibold">Apply New Leave</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <SelectField label="Leave Type" placeholder="Select Leave Type" />
                            <SelectField label="Delegated To" placeholder="Select Colleague" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DateField label="Start Date" />
                            <DateField label="End Date" />
                        </div>

                        <div className="space-y-1">
                            <Label className="text-sm text-gray-700">Reason for Leave</Label>
                            <Textarea
                                placeholder="Please provide a brief explanation for your leave request..."
                                rows={4}
                                className="resize-none"
                            />
                        </div>

                        <Alert className="bg-blue-50 border-blue-100">
                            <Info className="h-4 w-4 text-blue-600" />
                            <AlertDescription className="text-sm text-blue-700 ml-2">
                                This request will be sent to your manager for approval. You will
                                receive a notification once the status is updated.
                            </AlertDescription>
                        </Alert>

                        <div className="flex justify-center">
                            <Button 
                                className="bg-blue-600 hover:bg-blue-700 gap-2 px-8"
                                onClick={handleSubmit}
                            >
                                <Send className="h-4 w-4" />
                                Submit Application
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* RIGHT COLUMN */}
                <div className="space-y-5">
                    {/* LEAVE STATUS */}
                    <Card className="bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-4">
                            <CardTitle className="text-lg font-semibold">Leave Status Tracker</CardTitle>
                            <Button variant="link" size="sm" className="text-blue-600 p-0">View All</Button>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <LeaveItem
                                type="CASUAL LEAVE"
                                date="Oct 12 - Oct 14, 2023"
                                note="Visiting parents for the weekend..."
                                status="Approved"
                            />
                            <LeaveItem
                                type="EARNED LEAVE"
                                date="Dec 20 - Dec 28, 2023"
                                note="Annual winter vacation trip to Colorado..."
                                status="Pending"
                            />
                            <LeaveItem
                                type="SICK LEAVE"
                                date="Sep 05, 2023"
                                note="Sudden viral fever and migraine symptoms..."
                                status="Rejected"
                                error="Reason: Insufficient medical documentation provided."
                            />
                            <LeaveItem
                                type="CASUAL LEAVE"
                                date="Aug 15, 2023"
                                note="Personal administrative errands..."
                                status="Approved"
                            />

                            <p className="text-xs text-gray-400 text-center pt-2">
                                History shown for last 6 months
                            </p>
                        </CardContent>
                    </Card>

                    {/* CTA */}
                    <Card className="bg-blue-600 text-white overflow-hidden relative">
                        <CardContent className="p-5 space-y-2">
                            <p className="font-semibold text-lg">Planning a long leave?</p>
                            <p className="text-sm text-blue-100">
                                Make sure to sync with your team leads at least 2 weeks in
                                advance for better handovers.
                            </p>
                            <Button
                                variant="outline"
                                className="mt-2 bg-white text-blue-600 hover:bg-gray-100 border-white"
                            >
                                Policy Handbook
                            </Button>
                        </CardContent>
                        {/* Decorative chevron */}
                        <div className="absolute bottom-2 right-2">
                            <ChevronDown className="h-8 w-8 text-blue-400 opacity-50" />
                        </div>
                    </Card>
                </div>
            </div>
            <Toaster />
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const LeaveBalance = ({ title, value, note, icon, iconBg }) => (
    <Card className="bg-white">
        <CardContent className="p-5 flex items-start justify-between">
            <div className="space-y-1">
                <p className="text-xs text-gray-400 font-medium tracking-wide">{title}</p>
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                <p className="text-xs text-gray-400 italic">{note}</p>
            </div>
            <div className={`p-2.5 rounded-xl ${iconBg}`}>{icon}</div>
        </CardContent>
    </Card>
);

const SelectField = ({ label, placeholder }) => (
    <div className="space-y-1">
        <Label className="text-sm text-gray-700">{label}</Label>
        <Select>
            <SelectTrigger className="bg-white">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="sick">Sick Leave</SelectItem>
                <SelectItem value="casual">Casual Leave</SelectItem>
                <SelectItem value="earned">Earned Leave</SelectItem>
            </SelectContent>
        </Select>
    </div>
);

const DateField = ({ label }) => (
    <div className="space-y-1">
        <Label className="text-sm text-gray-700">{label}</Label>
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full justify-between text-left font-normal text-gray-500 bg-white"
                >
                    mm/dd/yyyy
                    <CalendarIcon className="h-4 w-4 text-gray-400" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="start">
                <Calendar mode="single" />
            </PopoverContent>
        </Popover>
    </div>
);

const LeaveItem = ({ type, date, note, status, error }) => {
    const statusConfig = {
        Approved: { color: "text-green-600", dot: "bg-green-500" },
        Pending: { color: "text-orange-500", dot: "bg-orange-500" },
        Rejected: { color: "text-red-500", dot: "bg-red-500" },
    };

    const config = statusConfig[status];

    return (
        <div className="space-y-1 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-xs text-gray-400 font-medium tracking-wide">{type}</p>
                    <p className="text-sm font-semibold text-gray-900">{date}</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
                    <span className={`text-sm font-medium ${config.color}`}>{status}</span>
                </div>
            </div>
            <p className="text-xs text-gray-400 italic">"{note}"</p>
            {error && (
                <p className="text-xs text-red-600 bg-red-50 p-2 rounded mt-2">
                    {error}
                </p>
            )}
        </div>
    );
};
