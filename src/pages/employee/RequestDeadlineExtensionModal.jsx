"use client";

import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar } from "@/components/ui/calendar";

import {
    Info,
    Calendar as CalendarIcon,
    Send,
} from "lucide-react";

export default function RequestDeadlineExtensionModal({
    open,
    onOpenChange,
    taskName = "Develop API Authentication Module",
    currentDeadline = "Oct 24, 2023"
}) {
    const [date, setDate] = useState(new Date());
    const [reason, setReason] = useState("");

    const handleSubmit = () => {
        // Handle form submission
        console.log({ taskName, currentDeadline, newDeadline: date, reason });
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md p-5">
                {/* HEADER */}
                <DialogHeader className="pb-1">
                    <DialogTitle className="text-lg font-semibold">Request Deadline Extension</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    {/* INFO ALERT */}
                    <Alert className="bg-blue-50 border-blue-100 py-2">
                        <Info className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-xs text-blue-700 ml-2">
                            Extension requests are subject to approval by your project manager.
                            Please ensure your justification is clear to avoid processing delays.
                        </AlertDescription>
                    </Alert>

                    {/* TASK INFO - Side by Side Layout */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs text-gray-500 mb-0.5">Task Name</p>
                            <p className="text-sm font-medium text-gray-900">{taskName}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-0.5">Current Deadline</p>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
                                <CalendarIcon className="h-3.5 w-3.5 text-gray-500" />
                                {currentDeadline}
                            </div>
                        </div>
                    </div>

                    {/* PROPOSED DEADLINE - Inline Calendar */}
                    <div className="space-y-1">
                        <Label className="text-xs font-medium">
                            Proposed New Deadline <span className="text-red-500">*</span>
                        </Label>

                        <div className="border rounded-lg p-2">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="mx-auto"
                                classNames={{
                                    months: "flex flex-col sm:flex-row",
                                    month: "space-y-2",
                                    caption: "flex justify-center pt-0.5 relative items-center",
                                    caption_label: "text-sm font-medium",
                                    nav: "space-x-1 flex items-center",
                                    nav_button: "h-6 w-6 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md border border-input",
                                    nav_button_previous: "absolute left-1",
                                    nav_button_next: "absolute right-1",
                                    table: "w-full border-collapse",
                                    head_row: "flex",
                                    head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.7rem]",
                                    row: "flex w-full mt-1",
                                    cell: "h-8 w-8 text-center text-xs p-0 relative focus-within:relative focus-within:z-20",
                                    day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-full inline-flex items-center justify-center text-xs",
                                    day_selected: "bg-blue-600 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white rounded-full",
                                    day_today: "bg-gray-100 text-gray-900",
                                    day_outside: "text-muted-foreground opacity-50",
                                    day_disabled: "text-muted-foreground opacity-50",
                                    day_hidden: "invisible",
                                }}
                            />
                        </div>
                    </div>

                    {/* REASON */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-center">
                            <Label className="text-xs font-medium">
                                Reason for Extension <span className="text-red-500">*</span>
                            </Label>
                            <span className="text-xs text-gray-400">
                                {reason.length} / 500 characters
                            </span>
                        </div>

                        <Textarea
                            placeholder="Please provide a detailed explanation why an extension is necessary (e.g., scope changes, technical blockers, dependency delays)..."
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            maxLength={500}
                            rows={3}
                            className="resize-none text-xs"
                        />
                    </div>

                    {/* FOOTER */}
                    <div className="flex justify-end gap-2 pt-1">
                        <Button
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            className="px-5 h-9 text-sm"
                        >
                            Cancel
                        </Button>
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 px-5 h-9 text-sm gap-1.5"
                            onClick={handleSubmit}
                            disabled={!date || !reason.trim()}
                        >
                            <Send className="h-3.5 w-3.5" />
                            Submit Request
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
