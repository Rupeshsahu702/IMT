import { NavLink } from "react-router-dom";
import {
    FiHome,
    FiUsers,
    FiCalendar,
    FiCheckSquare,
    FiDollarSign,
    FiFileText,
    FiAward,
    FiBarChart2,
    FiTrendingUp,
    FiSettings,
    FiHelpCircle,
    FiMessageSquare,
} from "react-icons/fi";

const Sidebar = () => {
    return (
        <aside className="h-screen w-64 bg-white border-r border-gray-100 flex flex-col justify-between">
            {/* TOP SECTION */}
            <div>
                {/* BRAND */}
                <div className="px-6 py-5 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-800">StaffPortal</h2>
                    <p className="text-xs text-gray-500">Management Console</p>
                </div>

                {/* MENU */}
                <nav className="px-4 py-6 space-y-1">
                    <SidebarItem icon={<FiHome />} label="Dashboard" to="/management/dashboard" />
                    <SidebarItem icon={<FiUsers />} label="Employees" to="/management/employees" />
                    <SidebarItem icon={<FiCalendar />} label="Attendance" to="/management/attendance" />
                    <SidebarItem icon={<FiCheckSquare />} label="Task Management" to="/management/tasks" />
                    <SidebarItem icon={<FiFileText />} label="Leave Approvals" to="/management/leave-approval" />
                    <SidebarItem icon={<FiDollarSign />} label="Payroll" to="/management/payroll" />
                    <SidebarItem icon={<FiAward />} label="Incentives" to="/management/incentives" />
                    <SidebarItem icon={<FiAward />} label="Project Document Management" to="/management/project-document-management" />
                    <SidebarItem icon={<FiMessageSquare />} label="Ticket Resolve" to="/management/ticket-resolve" />
                    <SidebarItem icon={<FiBarChart2 />} label="Reports" to="/management/reports" />
                    <SidebarItem icon={<FiTrendingUp />} label="Team Performance" to="/management/performance" />

                    {/* SYSTEM */}
                    <p className="mt-6 mb-2 px-2 text-xs font-semibold text-gray-400 uppercase">
                        System
                    </p>

                    <SidebarItem icon={<FiSettings />} label="Settings" to="/management/settings" />
                    <SidebarItem icon={<FiHelpCircle />} label="Support" to="/management/support" />
                </nav>
            </div>

            {/* USER PROFILE */}
            <div className="border-t border-gray-100 px-4 py-4 flex items-center gap-3">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="user"
                    className="w-9 h-9 rounded-full"
                />
                <div>
                    <p className="text-sm font-medium text-gray-800">Alex Morgan</p>
                    <p className="text-xs text-gray-500">Manager</p>
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
