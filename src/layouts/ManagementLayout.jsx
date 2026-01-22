import PropTypes from 'prop-types';
import Sidebar from '../pages/management/Sidebar';

const ManagementLayout = ({ children }) => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            {/* Fixed Sidebar Navigation */}
            <Sidebar />

            {/* Scrollable Main Content Area */}
            <main style={{
                flex: 1,
                overflowY: 'auto',
                height: '100vh',
                backgroundColor: '#f5f5f5'
            }}>
                {children}
            </main>
        </div>
    );
};

ManagementLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ManagementLayout;
