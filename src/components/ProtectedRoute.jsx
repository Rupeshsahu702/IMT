import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// TODO: Replace this with your actual auth logic
const ProtectedRoute = ({ children, allowedRoles }) => {
    // Mock authentication check - Replace with your actual auth logic
    const isAuthenticated = () => {
        // Check if user is logged in (e.g., check localStorage, context, or state)
        return localStorage.getItem('isAuthenticated') === 'true';
    };

    const getUserRole = () => {
        // Get user role from your auth state (e.g., localStorage, context, or state)
        return localStorage.getItem('userRole');
    };

    if (!isAuthenticated()) {
        // Redirect to login if not authenticated
        return <Navigate to="/auth/login" replace />;
    }

    const userRole = getUserRole();

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        // Redirect to unauthorized page or their dashboard if role not allowed
        return <Navigate to={`/${userRole}/dashboard`} replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;
