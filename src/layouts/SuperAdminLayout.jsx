import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const SuperAdminLayout = ({ children }) => {
    return (
        <div className="layout-container">
            {/* Sidebar Navigation */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>SuperAdmin Panel</h2>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/superadmin/dashboard">Dashboard</Link>
                    <Link to="/superadmin/users">User Management</Link>
                    <Link to="/superadmin/roles">Role Management</Link>
                    <Link to="/superadmin/settings">System Settings</Link>
                    <Link to="/superadmin/reports">Reports</Link>
                    <Link to="/superadmin/audit-logs">Audit Logs</Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="main-content">
                <header className="top-header">
                    <div className="header-left">
                        <h1>SuperAdmin Dashboard</h1>
                    </div>
                    <div className="header-right">
                        <Link to="/common/notifications">Notifications</Link>
                        <Link to="/common/profile">Profile</Link>
                        <button onClick={() => {
                            localStorage.removeItem('isAuthenticated');
                            localStorage.removeItem('userRole');
                            window.location.href = '/auth/login';
                        }}>Logout</button>
                    </div>
                </header>
                <div className="content">
                    {children}
                </div>
            </main>
        </div>
    );
};

SuperAdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SuperAdminLayout;
