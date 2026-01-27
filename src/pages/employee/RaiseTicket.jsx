"use client";

import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Info,
  X,
  FileText,
} from "lucide-react";

export default function RaiseTicket() {
  const [priority, setPriority] = useState("Medium");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const validTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'application/pdf'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      return validTypes.includes(file.type) && file.size <= maxSize;
    });

    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* BREADCRUMB */}
      <p className="text-sm text-muted-foreground mb-2">
        Home &nbsp;›&nbsp; Help Desk &nbsp;›&nbsp;{" "}
        <span className="text-slate-900 font-medium">Raise Ticket</span>
      </p>

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Raise a Support Ticket</h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-xl">
          Experiencing an issue? Fill out the details below and our IT or HR team
          will assist you shortly.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT FORM */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6 space-y-5">
            {/* TITLE */}
            <div>
              <label className="text-sm font-medium">Ticket Title</label>
              <Input
                className="mt-1"
                placeholder="Briefly summarize the issue (e.g. Cannot access VPN)"
              />
            </div>

            {/* DEPT + PRIORITY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Department</label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Priority Level</label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <Priority 
                    label="Low" 
                    active={priority === "Low"}
                    onClick={() => setPriority("Low")}
                  />
                  <Priority 
                    label="Medium" 
                    active={priority === "Medium"}
                    onClick={() => setPriority("Medium")}
                  />
                  <Priority 
                    label="High" 
                    active={priority === "High"}
                    onClick={() => setPriority("High")}
                  />
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                rows={5}
                className="mt-1"
                placeholder="Please provide detailed steps to reproduce the issue..."
              />
              <p className="text-xs text-muted-foreground text-right mt-1">
                0 / 500 characters
              </p>
            </div>

            {/* ATTACHMENT */}
            <div>
              <label className="text-sm font-medium">
                Attachments (Optional)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".svg,.png,.jpg,.jpeg,.pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div 
                onClick={handleClickUpload}
                className="mt-2 border-2 border-dashed rounded-lg p-6 text-center bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors"
              >
                <UploadCloud className="mx-auto h-6 w-6 text-blue-600 mb-2" />
                <p className="text-sm">
                  <span className="text-blue-600 font-medium">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  SVG, PNG, JPG or PDF (Max. 5MB)
                </p>
              </div>
              
              {/* Display uploaded files */}
              {uploadedFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-2 bg-slate-100 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">{file.name}</span>
                        <span className="text-xs text-muted-foreground">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFile(index);
                        }}
                        className="h-6 w-6 p-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Submit Ticket →
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {/* STATS */}
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Open Tickets" value="3" />
            <Stat label="Resolved (30d)" value="12" />
          </div>

          {/* HISTORY */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm">Recent History</CardTitle>
              <Button variant="link" size="sm">View All</Button>
            </CardHeader>

            <CardContent className="divide-y divide-slate-200">
              <HistoryItem
                id="#TK-2942"
                title="Figma License Access Issue"
                time="2 hours ago"
                status="In Progress"
              />
              <HistoryItem
                id="#TK-2938"
                title="Monitor flicker on HDMI"
                time="Yesterday"
                status="Resolved"
              />
              <HistoryItem
                id="#TK-2910"
                title="Update Payroll Info"
                time="Oct 24, 2023"
                status="Closed"
              />
              <HistoryItem
                id="#TK-2899"
                title="Request New Keyboard"
                time="Oct 20, 2023"
                status="Open"
              />
            </CardContent>
          </Card>

          {/* URGENT */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4 flex gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <p className="text-sm text-blue-700">
                <strong>Urgent Issues?</strong>
                <br />
                For critical system outages affecting the entire team, please
                call the IT Emergency Line at{" "}
                <span className="font-medium">Ext. 5555</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const Priority = ({ label, active, onClick }) => (
  <Button
    variant={active ? "default" : "outline"}
    className={active ? "bg-blue-600 hover:bg-blue-700" : ""}
    onClick={onClick}
  >
    {label}
  </Button>
);

const Stat = ({ label, value }) => (
  <Card>
    <CardContent className="p-4">
      <p className="text-xs text-muted-foreground uppercase">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </CardContent>
  </Card>
);

const HistoryItem = ({ id, title, time, status }) => {
  const statusStyles = {
    "In Progress": "bg-yellow-100 text-yellow-700",
    Resolved: "bg-green-100 text-green-700",
    Closed: "bg-slate-200 text-slate-600",
    Open: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="space-y-1 py-4 first:pt-0 last:pb-0">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{id}</span>
        <Badge className={statusStyles[status]}>{status}</Badge>
      </div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-muted-foreground">{time}</p>
    </div>
  );
};
