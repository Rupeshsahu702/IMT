"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

import {
    ShieldCheck,
    Mail,
    Lock,
} from "lucide-react";

export default function Login() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT – LOGIN FORM */}
            <div className="flex items-center justify-center px-6">
                <div className="w-full max-w-md space-y-6">
                    {/* LOGO */}
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">
                            ▦
                        </div>
                        <span className="font-semibold">Staff Portal</span>
                    </div>

                    {/* HEADER */}
                    <div>
                        <h1 className="text-2xl font-semibold">Welcome Back</h1>
                        <p className="text-sm text-muted-foreground">
                            Please select your role and enter your details.
                        </p>
                    </div>

                    {/* ROLE SWITCH */}
                    <Tabs defaultValue="employee">
                        <TabsList className="grid grid-cols-3 w-full">
                            <TabsTrigger value="admin">Central Admin</TabsTrigger>
                            <TabsTrigger value="manager">Management</TabsTrigger>
                            <TabsTrigger value="employee">Employee</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    {/* FORM */}
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium">Work Email</label>
                            <div className="relative mt-1">
                                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium">Password</label>
                                <button className="text-xs text-blue-600 hover:underline">
                                    Forgot Password?
                                </button>
                            </div>
                            <div className="relative mt-1">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Log In
                        </Button>
                    </div>

                    {/* FOOTER */}
                    <div className="text-center space-y-2 text-sm">
                        <p className="text-muted-foreground">
                            Need help?{" "}
                            <span className="text-blue-600 hover:underline cursor-pointer">
                                Contact IT Support
                            </span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                            © 2024 Tech Company Inc.
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT – HERO IMAGE */}
            <div className="relative hidden lg:block">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                    alt="Office"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
                    <div className="mb-6 inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                        <ShieldCheck className="h-4 w-4" />
                        Secure Staff Portal
                    </div>

                    <h2 className="text-3xl font-semibold leading-snug max-w-md">
                        Empowering teams to achieve more together.
                    </h2>

                    <p className="text-sm text-white/80 max-w-md mt-3">
                        Streamline your workflow, track attendance, and collaborate
                        effortlessly with the new unified dashboard.
                    </p>

                    <div className="flex gap-10 mt-8 text-sm">
                        <div>
                            <p className="text-xl font-semibold">99.9%</p>
                            <p className="text-white/70">Uptime</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">24/7</p>
                            <p className="text-white/70">Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
