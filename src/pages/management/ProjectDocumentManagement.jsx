"use client";

import { useState } from "react";

import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Upload,
    Folder,
    FileText,
    Users,
    ChevronLeft,
    ChevronRight,
    LayoutList,
    LayoutGrid,
    AlertCircle,
    Lock,
    ChevronDown,
    MoreHorizontal,
    Pencil,
    Trash2,
} from "lucide-react";

import UploadProjectDocumentModal from "./UploadProjectDocumentModal";
import AssignDocumentAccessModal from "./AssignDocumentAccessModal";

export default function ProjectDocumentManagement() {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState(null);

    const handleEditClick = (doc) => {
        setSelectedDocument(doc);
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = (doc) => {
        // Handle delete logic here
        console.log("Delete document:", doc);
    };

    return (
        <div className="p-8 bg-slate-50 min-h-screen">
            {/* HEADER */}
            <div className="flex items-start justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Project Document Management</h1>
                    <p className="text-base text-gray-500 mt-1">
                        Manage client documents and team access permissions
                    </p>
                </div>

                <Button
                    className="bg-blue-600 hover:bg-blue-700 gap-2"
                    onClick={() => setIsUploadModalOpen(true)}
                >
                    <Upload className="h-4 w-4" />
                    Upload Document
                </Button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                    icon={<Folder className="h-5 w-5 text-blue-600" />}
                    label="TOTAL PROJECTS"
                    value="42"
                />
                <StatCard
                    icon={<FileText className="h-5 w-5 text-blue-600" />}
                    label="DOCUMENTS"
                    value="1,240"
                />
                <StatCard
                    icon={<Users className="h-5 w-5 text-blue-600" />}
                    label="ACTIVE TEAMS"
                    value="8"
                />
            </div>

            {/* FILTER BAR */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap gap-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-1 rounded-full px-4">
                        All Documents
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="text-gray-600 gap-1 rounded-full px-4 bg-white border-0 shadow-sm">
                        Recently Added
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="text-gray-600 gap-2 rounded-full px-4 bg-white border-0 shadow-sm">
                        High Priority
                        <AlertCircle className="h-4 w-4 text-red-500" />
                    </Button>
                    <Button variant="outline" className="text-gray-600 gap-2 rounded-full px-4 bg-white border-0 shadow-sm">
                        Confidential
                        <Lock className="h-4 w-4 text-yellow-500" />
                    </Button>
                </div>

                <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="text-gray-500 bg-white border-0 shadow-sm">
                        <LayoutList className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="text-gray-500 bg-white border-0 shadow-sm">
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* TABLE */}
            <Card className="shadow-sm border-0 bg-white rounded-xl overflow-hidden">
                <CardContent className="p-0">
                    {/* TABLE HEADER */}
                    <div className="grid grid-cols-6 gap-4 px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        <div>Project Name</div>
                        <div>Client</div>
                        <div>Document Name</div>
                        <div>Upload Date</div>
                        <div>Assigned Team</div>
                        <div className="text-right">Actions</div>
                    </div>

                    {/* TABLE ROWS */}
                    <DocRow
                        project="Cloud Migration Alpha"
                        client="NexGen Systems"
                        doc="SLA_Agreement_v2.pdf"
                        docType="pdf"
                        date="Oct 24, 2023"
                        teams={[
                            { name: "DEVOPS", color: "bg-violet-200", textColor: "text-violet-900" },
                            { name: "SECURITY", color: "bg-green-200", textColor: "text-green-700" }
                        ]}
                        onEdit={handleEditClick}
                        onDelete={handleDeleteClick}
                    />
                    <DocRow
                        project="Mobile UI Kit Refactor"
                        client="Globex Corp"
                        doc="Assets_Landing_Final.png"
                        docType="image"
                        date="Oct 26, 2023"
                        teams={[
                            { name: "DESIGN", color: "bg-indigo-100", textColor: "text-indigo-700" }
                        ]}
                        onEdit={handleEditClick}
                        onDelete={handleDeleteClick}
                    />
                    <DocRow
                        project="API Integration v4"
                        client="DataStream Inc."
                        doc="API_Documentation.docx"
                        docType="doc"
                        date="Nov 02, 2023"
                        teams={[
                            { name: "BACKEND", color: "bg-blue-100", textColor: "text-blue-600" },
                            { name: "QA", color: "bg-amber-100", textColor: "text-amber-600" }
                        ]}
                        onEdit={handleEditClick}
                        onDelete={handleDeleteClick}
                        isLast
                    />

                    {/* FOOTER */}
                    <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-500">
                        <span>Showing <span className="font-medium text-gray-700">1-10</span> of 1,240 documents</span>
                        <div className="flex gap-2">
                            <Button size="icon" variant="outline" className="h-8 w-8 bg-white">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="outline" className="h-8 w-8 bg-white">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* UPLOAD MODAL - Imported from separate component */}
            <UploadProjectDocumentModal
                open={isUploadModalOpen}
                onOpenChange={setIsUploadModalOpen}
            />

            {/* EDIT/ASSIGN ACCESS MODAL */}
            <AssignDocumentAccessModal
                open={isEditModalOpen}
                onOpenChange={setIsEditModalOpen}
            />
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ icon, label, value }) => (
    <Card className="shadow-sm border-0 bg-white rounded-xl">
        <CardContent className="p-5">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                {icon}
                <span className="uppercase tracking-wide font-medium text-xs">{label}</span>
            </div>
            <p className="text-4xl font-bold text-gray-900">{value}</p>
        </CardContent>
    </Card>
);

const DocRow = ({ project, client, doc, docType, date, teams, isLast, onEdit, onDelete }) => {
    const getDocIcon = () => {
        switch (docType) {
            case "pdf":
                return <FileText className="h-4 w-4 text-red-500" />;
            case "image":
                return <FileText className="h-4 w-4 text-purple-500" />;
            default:
                return <FileText className="h-4 w-4 text-blue-500" />;
        }
    };

    const documentData = { project, client, doc, docType, date, teams };

    return (
        <div className={`grid grid-cols-6 gap-4 px-6 py-5 items-center hover:bg-gray-50/50 ${!isLast ? 'border-b border-gray-100' : ''}`}>
            {/* Project Name */}
            <div className="flex items-start gap-2">
                <Folder className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                <span className="font-semibold text-gray-900 text-sm">{project}</span>
            </div>

            {/* Client */}
            <div className="text-gray-500 text-sm">{client}</div>

            {/* Document Name */}
            <div className="flex items-center gap-2">
                {getDocIcon()}
                <span className="text-gray-700 text-sm">{doc}</span>
            </div>

            {/* Upload Date */}
            <div className="text-gray-500 text-sm">{date}</div>

            {/* Assigned Team */}
            <div className="flex flex-col gap-1">
                {teams.map((team) => (
                    <Badge
                        key={team.name}
                        className={`${team.color} ${team.textColor} text-xs px-2.5 py-0.5 font-medium w-fit`}
                    >
                        {team.name}
                    </Badge>
                ))}
            </div>

            {/* Actions - Dropdown Menu */}
            <div className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => onEdit && onEdit(documentData)}
                            className="cursor-pointer"
                        >
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => onDelete && onDelete(documentData)}
                            className="cursor-pointer text-red-600 focus:text-red-600"
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
