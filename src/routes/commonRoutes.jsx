import { Routes, Route } from 'react-router-dom';

// Common pages (accessible by all authenticated users)
import Profile from '../pages/common/Profile';
import Settings from '../pages/common/Settings';
import Notifications from '../pages/common/Notifications';
import Help from '../pages/common/Help';

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="help" element={<Help />} />
        </Routes>
    );
};

export default CommonRoutes;
