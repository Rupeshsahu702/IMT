import { Routes, Route } from 'react-router-dom';

// Employee pages
import Dashboard from '../pages/employee/Dashboard';
import MyTasks from '../pages/employee/MyTasks';
import TimeTracking from '../pages/employee/TimeTracking';
import LeaveManagement from '../pages/employee/LeaveManagement';
import MyProfile from '../pages/employee/MyProfile';
import MyAttendance from '@/pages/employee/MyAttendance';
import RaiseTicket from '@/pages/employee/RaiseTicket';
import MyIncentive from '@/pages/employee/MyIncentive';

const EmployeeRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tasks" element={<MyTasks />} />
            <Route path="my-attendance" element={<MyAttendance />} />
            <Route path="time-tracking" element={<TimeTracking />} />
            <Route path="my-tasks" element={<MyTasks />} />
            <Route path="leave" element={<LeaveManagement />} />
            <Route path="raise-ticket" element={<RaiseTicket />} />
            <Route path="myincentive" element={<MyIncentive />} />
            <Route path="profile" element={<MyProfile />} />
        </Routes>
    );
};

export default EmployeeRoutes;
