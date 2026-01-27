
# Internal Management Project

This project is a role-based management system built with React and Vite, supporting three user roles: **SuperAdmin**, **Management**, and **Employee**. It features protected routing, modular layouts, and a clear separation of concerns for scalable enterprise use.

---

## 📁 File & Directory Structure

```
Internal-management-project/
├── components.json
├── eslint.config.js
├── FILE_STRUCTURE.md
├── index.html
├── jsconfig.json
├── package.json
├── QUICK_START.md
├── README.md
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── ProtectedRoute.jsx
│   │   └── ui/
│   │       ├── alert.jsx
│   │       ├── avatar.jsx
│   │       ├── badge.jsx
│   │       ├── button.jsx
│   │       ├── calendar.jsx
│   │       ├── card.jsx
│   │       ├── checkbox.jsx
│   │       ├── dialog.jsx
│   │       ├── dropdown-menu.jsx
│   │       ├── input.jsx
│   │       ├── label.jsx
│   │       ├── popover.jsx
│   │       ├── progress.jsx
│   │       ├── radio-group.jsx
│   │       ├── select.jsx
│   │       ├── separator.jsx
│   │       ├── table.jsx
│   │       ├── tabs.jsx
│   │       └── textarea.jsx
│   ├── layouts/
│   │   ├── EmployeeLayout.jsx
│   │   ├── ManagementLayout.jsx
│   │   └── SuperAdminLayout.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── auth/
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ResetPassword.jsx
│   │   ├── common/
│   │   │   ├── Help.jsx
│   │   │   ├── Notifications.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Settings.jsx
│   │   ├── employee/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── LeaveManagement.jsx
│   │   │   ├── MyAttendance.jsx
│   │   │   ├── MyProfile.jsx
│   │   │   ├── MyTasks.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── RequestDeadlineExtensionModal.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── TimeTracking.jsx
│   │   ├── management/
│   │   │   ├── AddEmployee.jsx
│   │   │   ├── AssignDocumentAccessModal.jsx
│   │   │   ├── AssignTaskModal.jsx
│   │   │   ├── Attendance.jsx
│   │   │   ├── AwardIncentiveModal.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── EmployeeManagement.jsx
│   │   │   ├── Incentives.jsx
│   │   │   ├── LeaveApprovals.jsx
│   │   │   ├── Payroll.jsx
│   │   │   ├── ProjectDocumentManagement.jsx
│   │   │   ├── Reports.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TaskManagement.jsx
│   │   │   ├── TeamPerformance.jsx
│   │   │   └── UploadProjectDocumentModal.jsx
│   │   ├── superadmin/
│   │   │   ├── AuditLogs.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Reports.jsx
│   │   │   ├── RoleManagement.jsx
│   │   │   ├── SystemSettings.jsx
│   │   │   └── UserManagement.jsx
│   ├── routes/
│   │   ├── authRoutes.jsx
│   │   ├── commonRoutes.jsx
│   │   ├── employeeRoutes.jsx
│   │   ├── index.jsx
│   │   ├── managementRoutes.jsx
│   │   └── superAdminRoutes.jsx
```

---

## 🔐 Role-Based Access Control

### User Roles
1. **SuperAdmin** - Full system access
2. **Management** - Team and task management access
3. **Employee** - Limited access to personal tasks and profile

### Route Structure

#### Public Routes (No Authentication Required)
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/auth/forgot-password` - Password recovery
- `/auth/reset-password` - Password reset

#### SuperAdmin Routes (SuperAdmin Only)
- `/superadmin/dashboard` - SuperAdmin dashboard
- `/superadmin/users` - User management
- `/superadmin/roles` - Role management
- `/superadmin/settings` - System settings
- `/superadmin/reports` - System reports
- `/superadmin/audit-logs` - Audit logs

#### Management Routes (Management & SuperAdmin)
- `/management/dashboard` - Management dashboard
- `/management/employees` - Employee management
- `/management/tasks` - Task management
- `/management/reports` - Team reports
- `/management/performance` - Team performance

#### Employee Routes (Employee, Management & SuperAdmin)
- `/employee/dashboard` - Employee dashboard
- `/employee/tasks` - My tasks
- `/employee/time-tracking` - Time tracking
- `/employee/leave` - Leave management
- `/employee/profile` - My profile

#### Common Routes (All Authenticated Users)
- `/common/profile` - User profile
- `/common/settings` - User settings
- `/common/notifications` - Notifications
- `/common/help` - Help & support

---

## 🚀 How to Add New Pages

### Adding a SuperAdmin Page
1. Create the page component in `src/pages/superadmin/YourPage.jsx`
2. Import and add the route in `src/routes/superAdminRoutes.jsx`
3. Add navigation link in `src/layouts/SuperAdminLayout.jsx`

### Adding a Management Page
1. Create the page component in `src/pages/management/YourPage.jsx`
2. Import and add the route in `src/routes/managementRoutes.jsx`
3. Add navigation link in `src/layouts/ManagementLayout.jsx`

### Adding an Employee Page
1. Create the page component in `src/pages/employee/YourPage.jsx`
2. Import and add the route in `src/routes/employeeRoutes.jsx`
3. Add navigation link in `src/layouts/EmployeeLayout.jsx`

### Adding a Common Page
1. Create the page component in `src/pages/common/YourPage.jsx`
2. Import and add the route in `src/routes/commonRoutes.jsx`
3. Add navigation links in all layout files as needed

---

## 🔧 Authentication

The current implementation uses **localStorage** for demo purposes. You should replace this with your actual authentication logic:

1. **Update `src/components/ProtectedRoute.jsx`** with your auth logic
2. **Update layout logout buttons** to use your auth service
3. **Update `src/pages/auth/Login.jsx`** to use your login API

### Demo Authentication
For testing purposes, the Login page has demo buttons to simulate login as different roles:
- Click "Login as SuperAdmin" → Redirects to `/superadmin/dashboard`
- Click "Login as Management" → Redirects to `/management/dashboard`
- Click "Login as Employee" → Redirects to `/employee/dashboard`

---

## 📝 Notes

- All role-specific routes are protected by the `ProtectedRoute` component
- Each role has its own layout with a sidebar navigation
- Routes are hierarchical: SuperAdmin can access all routes, Management can access Management and Employee routes, Employees can only access Employee routes
- Common pages are accessible by all authenticated users
- Unauthorized access attempts will redirect users to their appropriate dashboard
