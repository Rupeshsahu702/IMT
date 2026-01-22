"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Award, X, CheckCircle } from "lucide-react";

export default function AwardIncentiveModal({ open, onOpenChange, employee }) {
    // Default employee data if not provided
    const emp = employee || {
        name: "Sarah Chen",
        score: "98%",
        onTimeCompletion: "100%",
        projectStatus: "Exceeds Goals",
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[480px] p-0 gap-0">
                {/* Header */}
                <DialogHeader className="p-6 pb-4">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-indigo-100">
                            <Award className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                            <DialogTitle className="text-xl font-bold text-gray-900">
                                Award Incentive
                            </DialogTitle>
                            <p className="text-sm text-gray-500 mt-1">
                                Recognize excellence and motivate your team
                            </p>
                        </div>
                    </div>
                </DialogHeader>

                {/* Performance Summary */}
                <div className="mx-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                            Performance Summary
                        </p>
                        <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 text-xs">
                            Q3 PERIOD
                        </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Employee */}
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Employee</p>
                            <div className="flex items-center gap-2">
                                <Avatar className="h-7 w-7">
                                    <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                                        {emp.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="font-semibold text-gray-900 text-sm">{emp.name}</span>
                            </div>
                        </div>

                        {/* Performance Score */}
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Performance Score</p>
                            <p className="text-xl font-bold text-indigo-600">{emp.score}</p>
                        </div>

                        {/* On-Time Completion */}
                        <div>
                            <p className="text-xs text-gray-500 mb-1">On-Time Completion</p>
                            <p className="text-xl font-bold text-gray-900">{emp.onTimeCompletion}</p>
                        </div>

                        {/* Project Status */}
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Project Status</p>
                            <p className="font-semibold text-gray-900">{emp.projectStatus}</p>
                        </div>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="p-6 space-y-5">
                    {/* Select Incentive Type */}
                    <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-900">
                            Select Incentive Type
                        </Label>
                        <Select defaultValue="performance">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select incentive type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="performance">Performance Bonus</SelectItem>
                                <SelectItem value="spot">Spot Award</SelectItem>
                                <SelectItem value="recognition">Recognition Award</SelectItem>
                                <SelectItem value="gift">Gift Card</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Amount / Value */}
                    <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-900">
                            Amount / Value
                        </Label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                            <Input
                                type="text"
                                placeholder="e.g. 500"
                                className="pl-7"
                            />
                        </div>
                    </div>

                    {/* Personalized Appreciation Message */}
                    <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-900">
                            Personalized Appreciation Message
                        </Label>
                        <Textarea
                            placeholder="Sarah, your dedication to the Q3 deliverables was exceptional..."
                            rows={3}
                            className="resize-none"
                        />
                    </div>
                </div>

                {/* Footer */}
                <DialogFooter className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                    <Button
                        variant="ghost"
                        onClick={() => onOpenChange(false)}
                        className="text-gray-600"
                    >
                        Cancel
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Confirm & Award
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
