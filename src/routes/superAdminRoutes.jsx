import { Routes, Route } from 'react-router-dom';

// SuperAdmin pages
import Dashboard from '../pages/superadmin/Dashboard';
import UserManagement from '../pages/superadmin/UserManagement';
import RoleManagement from '../pages/superadmin/RoleManagement';
import SystemSettings from '../pages/superadmin/SystemSettings';
import Reports from '../pages/superadmin/Reports';
import AuditLogs from '../pages/superadmin/AuditLogs';

const SuperAdminRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="roles" element={<RoleManagement />} />
            <Route path="settings" element={<SystemSettings />} />
            <Route path="reports" element={<Reports />} />
            <Route path="audit-logs" element={<AuditLogs />} />
        </Routes>
    );
};

export default SuperAdminRoutes;
