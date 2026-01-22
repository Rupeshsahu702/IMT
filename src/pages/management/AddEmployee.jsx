"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    User,
    Briefcase,
    Upload,
    Calendar as CalendarIcon,
    Mail,
    Phone,
} from "lucide-react";
import { format } from "date-fns";

export default function AddEmployee() {
    const [dateOfBirth, setDateOfBirth] = useState();
    const [joiningDate, setJoiningDate] = useState();
    const [profileImage, setProfileImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert("File size should be less than 5MB");
                return;
            }

            // Validate file type
            if (!file.type.startsWith("image/")) {
                alert("Please upload an image file (PNG, JPG)");
                return;
            }

            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const clearImage = () => {
        setProfileImage(null);
    };


    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-6">
            {/* HEADER */}
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-gray-500 mb-2">
                        Staff &gt; Employees &gt; <span className="text-gray-900">Add New</span>
                    </p>
                    <h1 className="text-3xl font-bold mb-1">Add New Employee</h1>
                    <p className="text-sm text-gray-500">
                        Create a new profile and assign roles.
                    </p>
                </div>
            </div>

            {/* PERSONAL INFORMATION */}
            <Card>
                <CardContent className="p-6">
                    <SectionHeader
                        icon={<User className="h-5 w-5 text-blue-600" />}
                        title="Personal Information"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {/* UPLOAD */}
                        <div>
                            <Label className="text-sm font-medium mb-2 block">Profile Photo</Label>
                            <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition relative">
                                {profileImage ? (
                                    <>
                                        <img
                                            src={profileImage}
                                            alt="Profile preview"
                                            className="w-32 h-32 rounded-full object-cover mb-3"
                                        />
                                        <p className="text-sm font-medium text-gray-900 mb-1">
                                            Profile photo uploaded
                                        </p>
                                        <div className="flex gap-2">
                                            <label className="text-xs text-blue-600 cursor-pointer hover:underline">
                                                Change photo
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    className="hidden"
                                                />
                                            </label>
                                            <span className="text-xs text-gray-400">•</span>
                                            <button
                                                onClick={clearImage}
                                                className="text-xs text-red-600 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                                            <Upload className="h-6 w-6 text-gray-400" />
                                        </div>
                                        <label className="cursor-pointer">
                                            <p className="text-sm font-medium text-blue-600 mb-1">
                                                Upload a file
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                PNG, JPG up to 5MB
                                            </p>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="hidden"
                                            />
                                        </label>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* FORM FIELDS */}
                        <div className="md:col-span-2 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField label="Full Name" placeholder="e.g. Jane Doe" />
                                <FormField
                                    label="Email Address"
                                    placeholder="jane@techcorp.com"
                                    icon={<Mail className="h-4 w-4" />}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    label="Phone Number"
                                    placeholder="+1 (555) 000-0000"
                                    icon={<Phone className="h-4 w-4" />}
                                />
                                <DatePickerField
                                    label="Date of Birth"
                                    date={dateOfBirth}
                                    setDate={setDateOfBirth}
                                />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* EMPLOYMENT DETAILS */}
            <Card>
                <CardContent className="p-6">
                    <SectionHeader
                        icon={<Briefcase className="h-5 w-5 text-blue-600" />}
                        title="Employment Details"
                    />

                    <div className="space-y-4 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <SelectField
                                label="Department"
                                placeholder="Select Department"
                                options={[
                                    { value: "engineering", label: "Engineering" },
                                    { value: "design", label: "Design" },
                                    { value: "marketing", label: "Marketing" },
                                    { value: "hr", label: "Human Resources" },
                                ]}
                            />
                            <SelectField
                                label="Role / Job Title"
                                placeholder="Select Role"
                                options={[
                                    { value: "developer", label: "Software Developer" },
                                    { value: "designer", label: "UI/UX Designer" },
                                    { value: "manager", label: "Project Manager" },
                                ]}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DatePickerField
                                label="Joining Date"
                                date={joiningDate}
                                setDate={setJoiningDate}
                            />
                            <SelectField
                                label="Shift Timing"
                                placeholder="Select Shift"
                                options={[
                                    { value: "morning", label: "Morning Shift (9 AM - 5 PM)" },
                                    { value: "evening", label: "Evening Shift (2 PM - 10 PM)" },
                                    { value: "night", label: "Night Shift (10 PM - 6 AM)" },
                                ]}
                            />
                        </div>

                        {/* STATUS */}
                        <div>
                            <Label className="text-sm font-medium mb-3 block">Status</Label>
                            <RadioGroup defaultValue="active" className="flex gap-6">
                                <StatusOption value="active" label="Active" />
                                <StatusOption value="leave" label="On Leave" />
                                <StatusOption value="inactive" label="Inactive" />
                            </RadioGroup>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* ACTIONS */}
            <div className="flex justify-end gap-3">
                <Button variant="outline" size="lg">Cancel</Button>
                <Button size="lg">Create Employee</Button>
            </div>
        </div>
    );
}

/* ---------------- REUSABLE COMPONENTS ---------------- */

const SectionHeader = ({ icon, title }) => (
    <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-blue-50">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
    </div>
);

const FormField = ({ label, placeholder, icon }) => (
    <div className="space-y-2">
        <Label className="text-sm font-medium">{label}</Label>
        <div className="relative">
            {icon && (
                <span className="absolute left-3 top-2.5 text-gray-400">
                    {icon}
                </span>
            )}
            <Input
                placeholder={placeholder}
                className={icon ? "pl-10" : ""}
            />
        </div>
    </div>
);

const DatePickerField = ({ label, date, setDate }) => (
    <div className="space-y-2">
        <Label className="text-sm font-medium">{label}</Label>
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                >
                    <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                    {date ? format(date, "MM/dd/yyyy") : <span className="text-gray-400">mm/dd/yyyy</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    </div>
);

const SelectField = ({ label, placeholder, options }) => (
    <div className="space-y-2">
        <Label className="text-sm font-medium">{label}</Label>
        <Select>
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);

const StatusOption = ({ value, label }) => (
    <div className="flex items-center space-x-2">
        <RadioGroupItem value={value} id={value} />
        <Label htmlFor={value} className="font-normal cursor-pointer">{label}</Label>
    </div>
);
