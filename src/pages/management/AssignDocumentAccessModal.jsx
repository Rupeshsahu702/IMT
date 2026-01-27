"use client";

import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
    FileText,
    X,
    Users,
    ShieldCheck,
} from "lucide-react";

export default function AssignDocumentAccessModal({ open, onOpenChange }) {
    const [access, setAccess] = useState("edit");

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                {/* HEADER */}
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        Assign Document Access
                    </DialogTitle>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <FileText className="h-4 w-4 text-red-500" />
                        SLA_Agreement_v2.pdf
                    </div>
                </DialogHeader>

                {/* ASSIGN TYPE */}
                <Tabs defaultValue="team" className="mt-2">
                    <TabsList className="grid grid-cols-2 w-full">
                        <TabsTrigger value="team">Assign to Team</TabsTrigger>
                        <TabsTrigger value="user">Assign to Individual Member</TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* SELECT TEAMS */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground uppercase">
                        Select Teams
                    </label>

                    <div className="flex flex-wrap items-center gap-2 border rounded-md p-2">
                        <TeamChip label="DevOps" />
                        <TeamChip label="QA" />

                        <Input
                            placeholder="Search teams..."
                            className="border-none shadow-none focus-visible:ring-0 p-0 h-6 text-sm"
                        />
                    </div>
                </div>

                {/* ACCESS LEVEL */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground uppercase">
                        Set Access Level
                    </label>

                    <Select value={access} onValueChange={setAccess}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="edit">Full Edit Access</SelectItem>
                            <SelectItem value="view">View Only</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* CURRENT ACCESS */}
                <div className="space-y-3">
                    <label className="text-xs font-medium text-muted-foreground uppercase">
                        Current Access
                    </label>

                    <AccessRow
                        name="DevOps Team"
                        members="6 Members"
                        access="EDIT ACCESS"
                        editable
                    />

                    <AccessRow
                        name="Security Team"
                        members="3 Members"
                        access="VIEW ONLY"
                    />
                </div>

                {/* FOOTER */}
                <div className="flex justify-end gap-3 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        Save Permissions
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

/* ---------------- COMPONENTS ---------------- */

const TeamChip = ({ label }) => (
    <Badge
        variant="secondary"
        className="flex items-center gap-1 bg-blue-50 text-blue-700"
    >
        {label}
        <X className="h-3 w-3 cursor-pointer" />
    </Badge>
);

const AccessRow = ({ name, members, access, editable }) => (
    <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
        <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
                <AvatarFallback>
                    <Users className="h-4 w-4" />
                </AvatarFallback>
            </Avatar>

            <div>
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-muted-foreground">{members}</p>
            </div>
        </div>

        {editable ? (
            <Button size="sm" variant="outline">
                Edit Access
            </Button>
        ) : (
            <Badge variant="secondary" className="bg-slate-200 text-slate-600">
                {access}
            </Badge>
        )}
    </div>
);
