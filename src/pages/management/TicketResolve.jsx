"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Plus,
  Search,
  Paperclip,
  Send,
  CheckCircle,
} from "lucide-react";

// Mock data for tickets
const allTickets = [
  { id: "#TIC-2024", title: "Server Access Issue", priority: "High", status: "open" },
  { id: "#TIC-2023", title: "Software License Request", priority: "Medium", status: "open" },
  { id: "#TIC-2022", title: "Monitor Flickering", priority: "Low", status: "progress" },
  { id: "#TIC-2021", title: "VPN Connectivity Lost", priority: "High", status: "progress" },
  { id: "#TIC-2020", title: "Email Configuration Help", priority: "Medium", status: "progress" },
  { id: "#TIC-2019", title: "Password Reset Request", priority: "Low", status: "resolved" },
  { id: "#TIC-2018", title: "Printer Not Working", priority: "Medium", status: "resolved" },
  { id: "#TIC-2017", title: "Database Connection Issue", priority: "High", status: "resolved" },
];

export default function TicketResolve() {
  const [selectedTab, setSelectedTab] = useState("open");
  const [selectedTicket, setSelectedTicket] = useState(allTickets[0]);

  // Filter tickets based on selected tab
  const filteredTickets = allTickets.filter(ticket => ticket.status === selectedTab);

  return (
    <div className="h-screen bg-slate-50 p-4">
      <div className="h-full bg-white rounded-xl border border-slate-200 grid grid-cols-[300px_1fr] overflow-hidden">

        {/* LEFT SIDEBAR – INBOX */}
        <div className="border-r border-slate-200 flex flex-col">
          <div className="p-4 flex items-center justify-between">
            <h2 className="font-semibold">Inbox</h2>
            <Button size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="px-4 pb-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search ID or keyword..."
                className="pl-9"
              />
            </div>
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="px-4">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="open">Open</TabsTrigger>
              <TabsTrigger value="progress">In Progress</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>
          </Tabs>

          <Separator />

          {/* TICKET LIST */}
          <div className="flex-1 overflow-y-auto">
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket) => (
                <TicketItem
                  key={ticket.id}
                  active={selectedTicket.id === ticket.id}
                  id={ticket.id}
                  title={ticket.title}
                  priority={ticket.priority}
                  onClick={() => setSelectedTicket(ticket)}
                />
              ))
            ) : (
              <div className="p-4 text-center text-muted-foreground text-sm">
                No tickets in this category
              </div>
            )}
          </div>
        </div>

        {/* RIGHT – CONVERSATION */}
        <div className="flex flex-col">
          {/* HEADER */}
          <div className="p-4 border-b border-slate-200">
            <h2 className="font-semibold text-lg">
              {selectedTicket.title}
            </h2>
            <p className="text-xs text-muted-foreground">
              {selectedTicket.id} · Opened 2m ago · Infrastructure
            </p>
          </div>

          {/* CHAT */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
            <DateDivider text="Today, Oct 24" />

            {/* USER MESSAGE */}
            <Message
              name="John Doe"
              time="10:30 AM"
              text="Hi IT support, I'm currently traveling and trying to access the internal file server. I'm getting a '403 Forbidden' error when I try to connect via VPN. I've attached a screenshot of the error."
              attachment="error_screenshot.png"
              size="245 KB"
            />

            {/* SYSTEM NOTE */}
            <p className="text-xs text-muted-foreground text-center">
              ⚙ Automated: Priority set to High based on keywords
            </p>

            {/* ADMIN MESSAGE */}
            <AdminMessage
              name="Alex Admin"
              time="10:32 AM"
              text="Hi John, thanks for reporting this. It looks like your roaming profile might be out of sync. Let me check your permissions on the gateway."
            />
          </div>

          {/* REPLY BOX */}
          <div className="border-t border-slate-200 p-4 space-y-3">
            <Textarea
              rows={3}
              placeholder="Type your reply here... Use @ to mention someone."
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="cursor-pointer flex items-center gap-1">
                  <Paperclip className="h-4 w-4" /> Attach
                </span>
                <Badge variant="secondary">Internal Note</Badge>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700">
                Send Reply <Send className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const TicketItem = ({ id, title, priority, active, onClick }) => {
  const priorityStyles = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div
      onClick={onClick}
      className={`p-4 border-l-4 cursor-pointer hover:bg-slate-50 transition-colors ${
        active ? "border-blue-500 bg-blue-50" : "border-slate-200"
      }`}
    >
      <p className="text-xs text-muted-foreground">{id}</p>
      <p className="font-medium">{title}</p>
      <Badge className={`mt-1 ${priorityStyles[priority]}`}>
        {priority}
      </Badge>
    </div>
  );
};

const Message = ({ name, time, text, attachment, size }) => (
  <div className="flex gap-3">
    <Avatar>
      <AvatarFallback>{name[0]}</AvatarFallback>
    </Avatar>

    <div className="bg-white rounded-lg p-4 max-w-xl shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <p className="font-medium text-sm">{name}</p>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>
      <p className="text-sm">{text}</p>

      {attachment && (
        <div className="mt-3 border border-slate-200 rounded-md p-2 text-sm text-muted-foreground bg-slate-50">
          📎 {attachment} ({size})
        </div>
      )}
    </div>
  </div>
);

const AdminMessage = ({ name, time, text }) => (
  <div className="flex gap-3 justify-end">
    <div className="bg-blue-600 text-white rounded-lg p-4 max-w-xl">
      <p className="text-sm">{text}</p>
      <p className="text-xs text-blue-200 text-right mt-1">
        Seen {time}
      </p>
    </div>

    <Avatar>
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
  </div>
);

const DateDivider = ({ text }) => (
  <div className="flex items-center gap-4 text-xs text-muted-foreground">
    <Separator className="flex-1" />
    {text}
    <Separator className="flex-1" />
  </div>
);
