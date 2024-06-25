import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import AdminLayout from './AdminLayout';
import SearchSymtom from './SearchSymtom';
const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <AdminLayout user={user}>
            <div className='dashboard_module'>
                <div className='dash_container'>
                <h1>Welcome to Admin Dashboard, {user ? user.first_name : 'Guest'}</h1>
                </div>
            </div>
            <div className="dashboard_module search-section">
                <div className='dash_container'>
                    <SearchSymtom/>
                </div>
            </div>
            <div className="dashboard_module recommendations-module">
                <div className='dash_container'>
                    <div className='module_header'>
                        <h2>Saved Recommendations</h2>
                    </div>
                    <div className='dash_table'>
                        <table className="striped-table">
                            <thead>
                            <tr>
                                <th>Disease</th>
                                <th>Symptoms</th>
                                <th>Recommendations</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Acid Reflux Disease, GERD</td>
                                    <td>Heartburn, Gas</td>
                                    <td>Root vegetables</td>
                                    <td>
                                    <a href="#view" className='blue'>View</a> | <a href="#share" className='green'>Share</a> | <a href="#remove" className="remove">Remove</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Heartburn, Gas, Indigestion, Constipation</td>
                                    <td>Whole grains, root vegetables...</td>
                                    <td>
                                    <a href="#view" className='blue'>View</a> | <a href="#share" className='green'>Share</a> | <a href="#remove" className="remove">Remove</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Irritable Bowel Syndrome (IBS)</td>
                                    <td>Diarrhea</td>
                                    <td>Whole grains, root vegetables...</td>
                                    <td>
                                    <a href="#view" className='blue'>View</a> | <a href="#share" className='green'>Share</a> | <a href="#remove" className="remove">Remove</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </AdminLayout>
    )
}
export default AdminDashboard;