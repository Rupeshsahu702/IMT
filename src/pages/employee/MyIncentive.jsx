"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import {
  CheckCircle2,
  AlertCircle,
  DollarSign,
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  Award,
  ShieldCheck,
} from "lucide-react";

export default function MyIncentive() {

  const transparencyLog = [
    {
      date: "Oct 24, 2023",
      actionType: "Early Completion",
      actionColor: "bg-blue-100 text-blue-700",
      resource: "API Integration Module #4",
      impact: "+5 pts",
      impactColor: "text-blue-600",
    },
    {
      date: "Oct 22, 2023",
      actionType: "Peer Review",
      actionColor: "bg-blue-100 text-blue-700",
      resource: "Frontend Refactor PR #112",
      impact: "+2 pts",
      impactColor: "text-blue-600",
    },
    {
      date: "Oct 20, 2023",
      actionType: "Deadline Miss",
      actionColor: "bg-orange-100 text-orange-700",
      resource: "Documentation Update",
      impact: "-3 pts",
      impactColor: "text-red-600",
    },
    {
      date: "Oct 18, 2023",
      actionType: "Internal Talk",
      actionColor: "bg-purple-100 text-purple-700",
      resource: "Security Best Practices Share",
      impact: "+10 pts",
      impactColor: "text-blue-600",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Performance & Rewards
          </h1>
          <p className="text-sm text-gray-600">
            Real-time overview of your productivity and incentive eligibility.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Calendar className="h-4 w-4 mr-2" />
            This Month
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>

      {/* TOP STATS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
        {/* Performance Score - Circular */}
        <div className="md:row-span-2">
          <Card className="shadow-sm border border-gray-200 bg-white h-full">
            <CardContent className="p-6 flex flex-col items-center">
              <p className="text-sm font-bold text-gray-900 mb-6 text-center">
                Current Performance<br />Score
              </p>
              <div className="relative w-36 h-36 mb-5">
                {/* Circular Progress */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="16"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="16"
                    strokeDasharray={`${(85 / 100) * 427} 427`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-6xl font-bold text-gray-900">85</span>
                  <span className="text-xs text-gray-400 mt-1">out of 100</span>
                </div>
              </div>
              <Badge className="bg-blue-600 text-white hover:bg-blue-600 mb-3 font-bold text-xs px-3 py-1">
                Excellent Status
              </Badge>
              <p className="text-xs text-gray-500 italic text-center">
                You are in the top 10% this month!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* On-Time Tasks */}
        <Card className="shadow-sm border border-gray-200 bg-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-8">
              <p className="text-sm font-medium text-gray-600">On-Time Tasks</p>
              <div className="p-1.5 bg-blue-600 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-white" />
              </div>
            </div>
            <p className="text-5xl font-bold text-gray-900 mb-6">24</p>
            <div className="flex items-center gap-1 text-sm text-blue-600 font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>+12% vs last month</span>
            </div>
          </CardContent>
        </Card>

        {/* Delayed Tasks */}
        <Card className="shadow-sm border border-gray-200 bg-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-8">
              <p className="text-sm font-medium text-gray-600">Delayed Tasks</p>
              <div className="p-1.5 bg-orange-500 rounded-full">
                <AlertCircle className="h-4 w-4 text-white" />
              </div>
            </div>
            <p className="text-5xl font-bold text-gray-900 mb-6">2</p>
            <div className="flex items-center gap-1 text-sm text-orange-500 font-medium">
              <TrendingDown className="h-4 w-4" />
              <span>-5% improved</span>
            </div>
          </CardContent>
        </Card>

        {/* Active Incentives */}
        <Card className="shadow-sm border border-gray-200 bg-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-8">
              <p className="text-sm font-medium text-gray-600">Active Incentives</p>
              <div className="p-1.5 bg-blue-600 rounded-full">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
            </div>
            <p className="text-5xl font-bold text-gray-900 mb-6">$450.00</p>
            <div className="flex items-center gap-1 text-sm text-blue-600 font-medium">
              <DollarSign className="h-3.5 w-3.5" />
              <span>+$150 pending</span>
            </div>
          </CardContent>
        </Card>

        {/* GOAL TRACKER - Spans 3 columns on the right */}
        <div className="md:col-span-3">
          <Card className="shadow-sm border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Goal Tracker: Platinum Tier</h3>
                  <p className="text-sm text-gray-500">Next Milestone: Quarterly Bonus</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-blue-600">Silver → Gold Tier</span>
                  <span className="text-sm font-bold text-gray-900">75% Complete</span>
                </div>
              </div>
              <Progress value={75} className="h-2.5 bg-gray-200 mb-3" />
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <div className="p-0.5 bg-blue-600 rounded-full mt-0.5 flex-shrink-0">
                  <CheckCircle2 className="h-3 w-3 text-white" />
                </div>
                <span>Complete 3 more tasks on time for a <span className="font-bold text-gray-900">$100 bonus</span>.</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* TRANSPARENCY LOG */}
      <Card className="shadow-sm border border-gray-200 bg-white">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                Transparency Log
              </CardTitle>
              <p className="text-sm text-gray-500 font-normal">
                How your performance score is calculated
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span>VERIFIED BY AI ORACLE</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 px-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-t border-b border-gray-200 bg-gray-50">
                <TableHead className="text-xs font-bold text-gray-500 uppercase tracking-wide py-3 px-6">
                  DATE
                </TableHead>
                <TableHead className="text-xs font-bold text-gray-500 uppercase tracking-wide py-3 px-6">
                  ACTION TYPE
                </TableHead>
                <TableHead className="text-xs font-bold text-gray-500 uppercase tracking-wide py-3 px-6">
                  RESOURCE / PROJECT
                </TableHead>
                <TableHead className="text-xs font-bold text-gray-500 uppercase tracking-wide py-3 px-6 text-right">
                  IMPACT
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transparencyLog.map((log, index) => (
                <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-100">
                  <TableCell className="text-sm text-gray-600 font-normal py-4 px-6">
                    {log.date}
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <Badge className={`${log.actionColor} border-0 hover:${log.actionColor} text-xs font-semibold px-2.5 py-1`}>
                      {log.actionType}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-900 py-4 px-6">
                    {log.resource}
                  </TableCell>
                  <TableCell className={`text-sm font-bold ${log.impactColor} text-right py-4 px-6`}>
                    {log.impact}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-center py-6">
            <Button variant="link" className="text-gray-700 hover:text-gray-900 font-medium h-auto p-0">
              View Full History Log
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
