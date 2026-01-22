"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

import { useState } from "react";
import {
    ClipboardList,
    Calendar,
    ArrowRight,
    Plus,
} from "lucide-react";

export default function AssignTaskModal() {
    const [priority, setPriority] = useState("medium");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Task
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl">
                {/* HEADER */}
                <DialogHeader className="space-y-2">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-50">
                            <ClipboardList className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <DialogTitle className="text-xl font-bold">Assign New Task</DialogTitle>
                            <p className="text-sm text-gray-500">
                                Create and allocate tasks to team members.
                            </p>
                        </div>
                    </div>
                </DialogHeader>

                {/* FORM */}
                <div className="space-y-4 py-4">
                    {/* EMPLOYEE */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">
                            Select Employee <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Search or select an employee..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="anna">Anna K.</SelectItem>
                                <SelectItem value="mike">Mike R.</SelectItem>
                                <SelectItem value="sarah">Sarah M.</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* TITLE */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">
                            Task Title <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="e.g. Redesign User Dashboard" />
                    </div>

                    {/* DESCRIPTION */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">Description</Label>
                        <Textarea
                            placeholder="Provide detailed instructions for this task..."
                            rows={4}
                            className="resize-none"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>Markdown supported</span>
                            <span>0/500 characters</span>
                        </div>
                    </div>

                    {/* PRIORITY + DATE */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* PRIORITY */}
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Priority Level</Label>
                            <div className="flex gap-2">
                                <PriorityButton
                                    label="Low"
                                    active={priority === "low"}
                                    onClick={() => setPriority("low")}
                                />
                                <PriorityButton
                                    label="Medium"
                                    active={priority === "medium"}
                                    onClick={() => setPriority("medium")}
                                />
                                <PriorityButton
                                    label="High"
                                    active={priority === "high"}
                                    onClick={() => setPriority("high")}
                                />
                            </div>
                        </div>

                        {/* DUE DATE */}
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">
                                Due Date <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input type="date" placeholder="mm/dd/yyyy" className="pl-10" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex justify-end gap-3 pt-2 border-t">
                    <Button variant="outline" className="px-6">Cancel</Button>
                    <Button className="bg-black hover:bg-gray-800 px-6">
                        Assign Task
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

/* ---------------- COMPONENTS ---------------- */

const PriorityButton = ({ label, active, onClick }) => (
    <Button
        type="button"
        variant="outline"
        className={`flex-1 ${active
                ? "bg-black text-white hover:bg-gray-800 border-black"
                : "hover:bg-gray-50"
            }`}
        onClick={onClick}
    >
        {label}
    </Button>
);
