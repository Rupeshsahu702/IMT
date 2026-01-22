import { Routes, Route } from 'react-router-dom';

// Management pages
import Dashboard from '../pages/management/Dashboard';
import EmployeeManagement from '../pages/management/EmployeeManagement';
import TaskManagement from '../pages/management/TaskManagement';
import Reports from '../pages/management/Reports';
import TeamPerformance from '../pages/management/TeamPerformance';
import AddEmployee from '@/pages/management/AddEmployee';
import Attendance from '@/pages/management/Attendance';
import Payroll from '@/pages/management/Payroll';
import LeaveApprovals from '@/pages/management/LeaveApprovals';
import Incentives from '@/pages/management/Incentives';
import ProjectDocumentManagement from '@/pages/management/ProjectDocumentManagement';

const ManagementRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<EmployeeManagement />} />
            <Route path="addemployee" element={<AddEmployee />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="tasks" element={<TaskManagement />} />
            <Route path="leave-approval" element={<LeaveApprovals />} />
            <Route path="payroll" element={<Payroll />} />
            <Route path="incentives" element={<Incentives />} />
            <Route path="reports" element={<Reports />} />
            <Route path="performance" element={<TeamPerformance />} />
            <Route path="project-document-management" element={<ProjectDocumentManagement />} />
        </Routes>
    );
};

export default ManagementRoutes;
