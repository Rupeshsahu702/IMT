import { NavLink } from "react-router-dom";
import {
    FiHome,
    FiCalendar,
    FiCheckSquare,
    FiClock,
    FiFileText,
    FiUser,
    FiSettings,
    FiHelpCircle,
} from "react-icons/fi";

const Sidebar = () => {
    return (
        <aside className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
            {/* TOP SECTION */}
            <div>
                {/* BRAND */}
                <div className="px-6 py-5 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">StaffPortal</h2>
                    <p className="text-xs text-gray-500">Employee Console</p>
                </div>

                {/* MENU */}
                <nav className="px-4 py-6 space-y-1">
                    <SidebarItem icon={<FiHome />} label="Dashboard" to="/employee/dashboard" />
                    <SidebarItem icon={<FiCheckSquare />} label="My Tasks" to="/employee/my-tasks" />
                    <SidebarItem icon={<FiCalendar />} label="My Attendance" to="/employee/my-attendance" />
                    <SidebarItem icon={<FiClock />} label="Time Tracking" to="/employee/time-tracking" />
                    <SidebarItem icon={<FiFileText />} label="Leave Management" to="/employee/leave" />
                    <SidebarItem icon={<FiUser />} label="My Profile" to="/employee/profile" />

                    {/* SYSTEM */}
                    <p className="mt-6 mb-2 px-2 text-xs font-semibold text-gray-400 uppercase">
                        System
                    </p>

                    <SidebarItem icon={<FiSettings />} label="Settings" to="/employee/settings" />
                    <SidebarItem icon={<FiHelpCircle />} label="Support" to="/employee/support" />
                </nav>
            </div>

            {/* USER PROFILE */}
            <div className="border-t px-4 py-4 flex items-center gap-3">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="user"
                    className="w-9 h-9 rounded-full"
                />
                <div>
                    <p className="text-sm font-medium text-gray-800">Alex Morgan</p>
                    <p className="text-xs text-gray-500">Employee</p>
                </div>
            </div>
        </aside>
    );
};

const SidebarItem = ({ icon, label, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`
            }
        >
            <span className="text-lg">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </NavLink>
    );
};

export default Sidebar;
