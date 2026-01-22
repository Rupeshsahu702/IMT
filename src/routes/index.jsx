import { Routes, Route, Navigate } from 'react-router-dom';
import SuperAdminRoutes from './superAdminRoutes';
import ManagementRoutes from './managementRoutes';
import EmployeeRoutes from './employeeRoutes';
import AuthRoutes from './authRoutes';
import CommonRoutes from './commonRoutes';

// Protected Route wrapper component
import ProtectedRoute from '../components/ProtectedRoute';

// Layouts
import SuperAdminLayout from '../layouts/SuperAdminLayout';
import ManagementLayout from '../layouts/ManagementLayout';
import EmployeeLayout from '../layouts/EmployeeLayout';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes (Auth) */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* Common Routes (accessible by all authenticated users) */}
            <Route path="/common/*" element={<CommonRoutes />} />

            {/* SuperAdmin Routes */}
            <Route
                path="/superadmin/*"
                element={
                    <ProtectedRoute allowedRoles={['superadmin']}>
                        <SuperAdminLayout>
                            <SuperAdminRoutes />
                        </SuperAdminLayout>
                    </ProtectedRoute>
                }
            />

            {/* Management Routes */}
            <Route
                path="/management/*"
                element={
                    <ProtectedRoute allowedRoles={['management', 'superadmin']}>
                        <ManagementLayout>
                            <ManagementRoutes />
                        </ManagementLayout>
                    </ProtectedRoute>
                }
            />

            {/* Employee Routes */}
            <Route
                path="/employee/*"
                element={
                    <ProtectedRoute allowedRoles={['employee', 'management', 'superadmin']}>
                        <EmployeeLayout>
                            <EmployeeRoutes />
                        </EmployeeLayout>
                    </ProtectedRoute>
                }
            />

            {/* Default redirect to auth */}
            <Route path="/" element={<Navigate to="/auth/login" replace />} />

            {/* 404 Not Found */}
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
    );
};

export default AppRoutes;
