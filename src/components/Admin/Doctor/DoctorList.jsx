import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../AdminLayout';


const AdminDoctors = () => {
    const {user} = useContext(AuthContext);
    return (
        <AdminLayout user={user}>
            <div>
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
                                    <td headers="Disease">Acid Reflux Disease, GERD</td>
                                    <td headers="Symptoms">Heartburn, Gas</td>
                                    <td headers="Recommendations">Root vegetables</td>
                                    <td headers="Actions">
                                    <a href="#view" className='blue'>View</a> | <a href="#share" className='green'>Share</a> | <a href="#remove" className="remove">Remove</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td headers="Disease">-</td>
                                    <td headers="Symptoms">Heartburn, Gas, Indigestion, Constipation</td>
                                    <td headers="Recommendations">Whole grains, root vegetables...</td>
                                    <td headers="Actions">
                                    <a href="#view" className='blue'>View</a> | <a href="#share" className='green'>Share</a> | <a href="#remove" className="remove">Remove</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td headers="Disease">Irritable Bowel Syndrome (IBS)</td>
                                    <td headers="Symptoms">Diarrhea</td>
                                    <td headers="Recommendations">Whole grains, root vegetables...</td>
                                    <td headers="Actions">
                                    <a href="#view" className='blue'>View</a> | <a href="#share" className='green'>Share</a> | <a href="#remove" className="remove">Remove</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td headers="Disease">Irritable Bowel Syndrome (IBS)</td>
                                    <td headers="Symptoms">Diarrhea</td>
                                    <td headers="Recommendations">Whole grains, root vegetables...</td>
                                    <td headers="Actions">
                                    <a href="#view" className='blue'>View</a> | <a href="#share" className='green'>Share</a> | <a href="#remove" className="remove">Remove</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        </AdminLayout>
    )
};

export default AdminDoctors;