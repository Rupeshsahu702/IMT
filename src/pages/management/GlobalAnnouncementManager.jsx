"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Eye,
  Send,
  Filter,
  Bold,
  Italic,
  List,
  Link,
  Image,
  TrendingUp,
  EyeIcon,
  PercentIcon,
} from "lucide-react";

export default function GlobalAnnouncementManager() {
  const [category, setCategory] = useState("policy-update");
  const [priority, setPriority] = useState("standard");
  const [pushNotification, setPushNotification] = useState(true);
  const [emailNotification, setEmailNotification] = useState(false);

  const announcements = [
    {
      id: 1,
      badge: "POLICY UPDATE",
      status: "ACTIVE",
      badgeColor: "bg-blue-100 text-blue-700",
      statusColor: "bg-green-100 text-green-700",
      title: "Updated Remote Work Guidelines for Q4",
      description: "Please review the updated policy regarding flexible working...",
      views: "1,240",
      percentage: "85% Open",
      date: "Oct 24, 08:15 AM",
    },
    {
      id: 2,
      badge: "IT ALERT",
      status: "ARCHIVED",
      badgeColor: "bg-red-100 text-red-700",
      statusColor: "bg-gray-100 text-gray-600",
      title: "Scheduled Server Maintenance",
      description: "The main database cluster will be undergoing maintenance...",
      views: "943",
      percentage: "",
      date: "Oct 22, 11:30 AM",
    },
    {
      id: 3,
      badge: "EVENT",
      status: "ENDED",
      badgeColor: "bg-purple-100 text-purple-700",
      statusColor: "bg-gray-100 text-gray-600",
      title: "Annual Town Hall Q&A Sessions",
      description: "Join us for the live stream and interactive Q&A with the...",
      views: "3,112",
      percentage: "",
      date: "Oct 18, 02:00 PM",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* BREADCRUMB */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          <span className="text-gray-400">Home</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-medium text-gray-900">Announcements</span>
        </p>
      </div>

      {/* HEADER */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Global Announcement Manager
          </h1>
          <p className="text-sm text-gray-600">
            Create and manage company-wide broadcasts for your employees.
          </p>
        </div>
        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
          <Eye className="h-4 w-4 mr-2" />
          Live Preview
        </Button>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN - Create New Announcement */}
        <div className="lg:col-span-2">
          <Card className="shadow-sm border-gray-200">
            <CardHeader className="border-b border-gray-100 pb-4">
              <CardTitle className="text-xl font-bold text-gray-900">
                Create New Announcement
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Announcement Title */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">
                  Announcement Title
                </Label>
                <Input
                  placeholder="Enter headline..."
                  className="border-gray-300 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {/* Category and Priority */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-900">
                    Category
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="policy-update">Policy Update</SelectItem>
                      <SelectItem value="it-alert">IT Alert</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-900">
                    Priority
                  </Label>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">
                  Content
                </Label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  {/* Toolbar */}
                  <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-white">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-gray-100"
                    >
                      <Bold className="h-4 w-4 text-gray-700" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-gray-100"
                    >
                      <Italic className="h-4 w-4 text-gray-700" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-gray-100"
                    >
                      <List className="h-4 w-4 text-gray-700" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-gray-100"
                    >
                      <Link className="h-4 w-4 text-gray-700" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-gray-100"
                    >
                      <Image className="h-4 w-4 text-gray-700" />
                    </Button>
                  </div>
                  {/* Text Area */}
                  <Textarea
                    placeholder="Describe the announcement details..."
                    className="min-h-[120px] border-0 focus-visible:ring-0 resize-none rounded-none"
                  />
                </div>
              </div>

              {/* Delivery Channels */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-900">
                  Delivery Channels
                </Label>
                <div className="flex items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="push"
                      checked={pushNotification}
                      onCheckedChange={setPushNotification}
                      className="border-gray-300 data-[state=checked]:bg-blue-600"
                    />
                    <label
                      htmlFor="push"
                      className="text-sm text-gray-700 font-medium cursor-pointer"
                    >
                      Push Notification
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="email"
                      checked={emailNotification}
                      onCheckedChange={setEmailNotification}
                      className="border-gray-300 data-[state=checked]:bg-blue-600"
                    />
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-700 font-medium cursor-pointer"
                    >
                      Email Notification
                    </label>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-sm">
                  <Send className="h-4 w-4 mr-2" />
                  Broadcast Announcement
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6">
                  Save Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN - Announcement History */}
        <div>
          <Card className="shadow-sm border-gray-200">
            <CardHeader className="border-b border-gray-100 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-gray-900">
                  Announcement History
                </CardTitle>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Filter className="h-4 w-4 text-gray-600" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-5">
              {/* Announcement Cards */}
              {announcements.map((announcement) => (
                <AnnouncementCard key={announcement.id} {...announcement} />
              ))}

              {/* View Full Archive Link */}
              <div className="pt-2">
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-700 font-medium h-auto p-0 w-full"
                >
                  View Full Broadcast Archive
                </Button>
              </div>

              {/* Average Reach Card */}
              <Card className="bg-blue-600 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-blue-100 text-xs font-medium mb-1">
                        Avg. Announcement Reach
                      </p>
                      <p className="text-white text-4xl font-bold">92.4%</p>
                    </div>
                    <div className="bg-blue-500 rounded-lg p-2">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const AnnouncementCard = ({
  badge,
  status,
  badgeColor,
  statusColor,
  title,
  description,
  views,
  percentage,
  date,
}) => (
  <div className="space-y-3 pb-5 border-b border-gray-100 last:border-0 last:pb-0">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Badge className={`${badgeColor} border-0 hover:${badgeColor} text-xs font-semibold px-2 py-0.5`}>
          {badge}
        </Badge>
        <Badge className={`${statusColor} border-0 hover:${statusColor} text-xs font-semibold px-2 py-0.5`}>
          ● {status}
        </Badge>
      </div>
      <span className="text-xs text-gray-500">{date}</span>
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-xs text-blue-600 leading-relaxed">{description}</p>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 text-xs text-gray-600">
        <span className="flex items-center gap-1">
          <EyeIcon className="h-3.5 w-3.5" />
          {views}
        </span>
        {percentage && (
          <span className="flex items-center gap-1 text-green-600 font-medium">
            <PercentIcon className="h-3.5 w-3.5" />
            {percentage}
          </span>
        )}
      </div>
      <Button
        variant="link"
        className="text-blue-600 hover:text-blue-700 font-medium h-auto p-0 text-xs"
      >
        View Details
      </Button>
    </div>
  </div>
);
