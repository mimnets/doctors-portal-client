import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Loading from '../Pages/Shared/Loading/Loading';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    if(loading){
        return <Loading></Loading>
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin && 
                            <>
                                <li><Link to='/dashboard/all-users'>All Users</Link></li>
                                <li><Link to='/dashboard/add-doctor'>Add A Doctor</Link></li>
                                <li><Link to='/dashboard/manage-doctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;