"use client";

import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

import {
    UploadCloud,
    X,
    Check,
    Users,
    Palette,
} from "lucide-react";

export default function UploadProjectDocumentModal({ open, onOpenChange }) {
    const [priority, setPriority] = useState("high");

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md p-5">
                {/* HEADER */}
                <DialogHeader className="pb-1">
                    <DialogTitle className="text-lg font-semibold">Upload Project Document</DialogTitle>
                    <p className="text-sm text-blue-500">
                        Link new documentation to your existing project workflows.
                    </p>
                </DialogHeader>

                {/* UPLOAD AREA */}
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-5 text-center bg-gray-50/50 mt-2">
                    <div className="flex justify-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <UploadCloud className="h-5 w-5 text-blue-600" />
                        </div>
                    </div>

                    <p className="text-sm font-semibold text-gray-900">Drag and drop files here</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                        or click to browse from your computer (Max 10MB)
                    </p>

                    <Button size="sm" className="mt-3 bg-blue-600 hover:bg-blue-700 px-5">
                        Upload File
                    </Button>
                </div>

                {/* FORM */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                    <div>
                        <label className="text-xs font-medium text-gray-900">Project Name</label>
                        <Select>
                            <SelectTrigger className="mt-1 bg-white h-9">
                                <SelectValue placeholder="Search and select project" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="alpha">Project Alpha</SelectItem>
                                <SelectItem value="beta">Project Beta</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="text-xs font-medium text-gray-900">Client Name</label>
                        <Input
                            className="mt-1 bg-white h-9"
                            value="Global Tech Corp"
                            readOnly
                        />
                    </div>
                </div>

                {/* ASSIGNED TEAM */}
                <div className="mt-3">
                    <label className="text-xs font-medium text-gray-900">Assigned Team</label>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                        <TeamChip
                            label="Engineering"
                            icon={<Users className="h-3 w-3" />}
                        />
                        <TeamChip
                            label="Design"
                            icon={<Palette className="h-3 w-3" />}
                        />
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-gray-600 border-gray-300 hover:bg-gray-50 h-7 text-xs"
                        >
                            + Add Team
                        </Button>
                    </div>
                </div>

                {/* PRIORITY */}
                <div className="mt-3">
                    <label className="text-xs font-medium text-gray-900">Project Priority</label>
                    <div className="grid grid-cols-4 gap-2 mt-1.5">
                        {["Low", "Medium", "High", "Critical"].map((p) => (
                            <Button
                                key={p}
                                size="sm"
                                variant={priority === p.toLowerCase() ? "default" : "outline"}
                                onClick={() => setPriority(p.toLowerCase())}
                                className={
                                    priority === p.toLowerCase()
                                        ? "bg-blue-600 hover:bg-blue-700 text-white h-8 text-xs"
                                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 h-8 text-xs"
                                }
                            >
                                {p}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex justify-center gap-3 pt-4">
                    <Button
                        variant="outline"
                        size="sm"
                        className="px-6 text-gray-600 border-gray-300"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 px-5 gap-1.5">
                        <Check className="h-3.5 w-3.5" />
                        Confirm Upload
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

/* ---------------- COMPONENTS ---------------- */

const TeamChip = ({ label, icon }) => (
    <Badge
        variant="secondary"
        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full"
    >
        {icon}
        {label}
        <X className="h-3.5 w-3.5 cursor-pointer ml-1 text-gray-500 hover:text-gray-700" />
    </Badge>
);
