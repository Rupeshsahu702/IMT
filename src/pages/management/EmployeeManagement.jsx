"use client";

import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Users,
    UserCheck,
    PlaneTakeoff,
    Plus,
    Search,
    MoreVertical,
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";

export default function EmployeeManagement() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");

    // Filter employees based on search and filters
    const filteredEmployees = useMemo(() => {
        return employees.filter((emp) => {
            // Search filter
            const matchesSearch = searchQuery === "" ||
                emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                emp.role.toLowerCase().includes(searchQuery.toLowerCase());

            // Department filter
            const matchesDepartment = departmentFilter === "all" ||
                emp.department.toLowerCase() === departmentFilter.toLowerCase();

            // Status filter
            const matchesStatus = statusFilter === "all" ||
                emp.status.toLowerCase() === statusFilter.toLowerCase();

            return matchesSearch && matchesDepartment && matchesStatus;
        });
    }, [searchQuery, departmentFilter, statusFilter]);

    return (
        <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
            {/* HEADER */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Employee Management</h1>
                    <p className="text-sm text-muted-foreground">
                        Monitor staff productivity, attendance, and roles.
                    </p>
                </div>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Employee
                </Button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    title="Total Employees"
                    value="142"
                    icon={<Users className="text-blue-600" />}
                    note="+12% from last month"
                    noteColor="text-green-600"
                />
                <StatCard
                    title="Online Now"
                    value="89"
                    icon={<UserCheck className="text-green-600" />}
                    note="63% of workforce active"
                />
                <StatCard
                    title="On Leave"
                    value="3"
                    icon={<PlaneTakeoff className="text-orange-500" />}
                    note="2 returning tomorrow"
                    noteColor="text-orange-600"
                />
            </div>

            {/* FILTER BAR */}
            <div className="flex flex-col lg:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search by name, email or role..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger className="w-full lg:w-48">
                        <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="human resources">Human Resources</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full lg:w-40">
                        <SelectValue placeholder="Any Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Any Status</SelectItem>
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="offline">Offline</SelectItem>
                        <SelectItem value="on break">On Break</SelectItem>
                    </SelectContent>
                </Select>

                <Button variant="outline">Date</Button>
            </div>

            {/* TABLE */}
            <Card className="overflow-hidden p-0">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-100">
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Employee</TableHead>
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Role</TableHead>
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Status</TableHead>
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase">Today's Working Time</TableHead>
                            <TableHead className="text-xs font-semibold text-gray-500 uppercase text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {filteredEmployees.length > 0 ? (
                            filteredEmployees.map((emp) => (
                                <TableRow key={emp.email}>
                                    <TableCell>
                                        <div className="flex items-center gap-3 py-2">
                                            <Avatar className="h-10 w-10">
                                                <AvatarFallback>{emp.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-sm">{emp.name}</p>
                                                <p className="text-xs text-gray-400">
                                                    {emp.email}
                                                </p>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <p className="font-medium text-sm">{emp.role}</p>
                                        <p className="text-xs text-gray-400">
                                            {emp.department}
                                        </p>
                                    </TableCell>

                                    <TableCell>
                                        <StatusBadge status={emp.status} />
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-medium w-14">{emp.time}</span>
                                            <div className="flex-1">
                                                <Progress
                                                    value={emp.percent}
                                                    className="h-2"
                                                    indicatorColor={getProgressColor(emp.percent)}
                                                />
                                            </div>
                                            <span className="text-sm text-gray-400 w-10 text-right">{emp.percent}%</span>
                                        </div>
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <MoreVertical className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-48">
                                                <DropdownMenuItem 
                                                    className="cursor-pointer"
                                                    onClick={() => navigate('/management/employee-detail')}
                                                >
                                                    <Eye className="h-4 w-4 mr-2 text-gray-600" />
                                                    <span>View Details</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <Pencil className="h-4 w-4 mr-2 text-gray-600" />
                                                    <span>Edit</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer text-red-600">
                                                    <Trash2 className="h-4 w-4 mr-2" />
                                                    <span>Remove</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                    No employees found matching your filters.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                {/* FOOTER */}
                <div className="flex items-center justify-between px-4 py-3 text-sm text-muted-foreground border-t">
                    <span>Showing {filteredEmployees.length} of {employees.length} employees</span>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

/* ---------------- HELPERS ---------------- */

const getProgressColor = (percent) => {
    if (percent >= 80) return "bg-green-600"; // 80%+ - green (close to 8 hours)
    if (percent >= 70) return "bg-green-500"; // 70-79% - lighter green
    if (percent >= 50) return "bg-yellow-500"; // 50-69% - yellow
    if (percent >= 30) return "bg-orange-500"; // 30-49% - orange
    return "bg-red-600"; // Below 30% - red
};

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ title, value, icon, note, noteColor }) => (
    <Card>
        <CardContent className="p-4 flex items-center justify-between">
            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
                <p className={`text-xs ${noteColor || "text-muted-foreground"}`}>
                    {note}
                </p>
            </div>
            <div className="p-2 rounded-lg bg-slate-100">{icon}</div>
        </CardContent>
    </Card>
);

const StatusBadge = ({ status }) => {
    const styles = {
        Online: "bg-green-100 text-green-700",
        Offline: "bg-slate-100 text-slate-600",
        "On Break": "bg-orange-100 text-orange-700",
    };

    return (
        <Badge className={styles[status]} variant="secondary">
            {status}
        </Badge>
    );
};

/* ---------------- DATA ---------------- */

const employees = [
    {
        name: "Sarah Jenkins",
        email: "sarah.j@company.com",
        role: "Senior Developer",
        department: "Engineering",
        status: "Online",
        time: "5h 12m",
        percent: 65,
        avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
        name: "Michael Chen",
        email: "m.chen@company.com",
        role: "Product Designer",
        department: "Design",
        status: "On Break",
        time: "3h 45m",
        percent: 42,
        avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
        name: "Emily Davis",
        email: "emily.d@company.com",
        role: "Marketing Lead",
        department: "Marketing",
        status: "Offline",
        time: "0h 0m",
        percent: 0,
        avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
        name: "David Wilson",
        email: "david.w@company.com",
        role: "DevOps Engineer",
        department: "Engineering",
        status: "Online",
        time: "7h 15m",
        percent: 90,
        avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
        name: "Jessica Lee",
        email: "jessica.l@company.com",
        role: "HR Specialist",
        department: "Human Resources",
        status: "Online",
        time: "4h 30m",
        percent: 55,
        avatar: "https://i.pravatar.cc/40?img=5",
    },
];
