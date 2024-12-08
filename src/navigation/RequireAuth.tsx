import { Navigate, useLocation } from 'react-router-dom';

import { useUserRole } from '../context/useRole';

type RequireAuthType = {
    allowedRoles: string | string[]; 
    children: React.ReactNode;
}

const RequireAuth = ({ allowedRoles, children }: RequireAuthType) => {
    const location = useLocation();
    const { role } = useUserRole();
    console.log(role)
    console.log(role.role)
    if (role.role === "") {
        return <div>Ładowanie danych...</div>;
    }

    if (!role.isSuccess) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }


    const isAllowed = Array.isArray(allowedRoles)
        ? allowedRoles.includes(role.role)
        : allowedRoles === role.role;


    if (!isAllowed) {
        return <Navigate to={`/${role.role}`} state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default RequireAuth;