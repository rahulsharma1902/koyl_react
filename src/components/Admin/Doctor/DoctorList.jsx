import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../AdminLayout';
import searchIcon from '../../../images/search_icon.png';

const AdminDoctors = () => {
    const { user } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState('');

    const doctors = [
        { firstName: 'John', lastName: 'Doe', email: 'email@gmailo.com' },
        { firstName: 'Jethro', lastName: 'Tull', email: 'Jethro@gmailo.com' },
        { firstName: 'Jessie', lastName: 'Almnzar', email: 'Jessie@gmailo.com' }
    ];

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredDoctors = doctors.filter(doctor => 
        doctor.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AdminLayout user={user}>
            <div>
                <div className="dashboard_module recommendations-module">
                    <div className='dash_container'>
                        <div className='module_header'>
                            <h2>Doctors</h2>
                        </div>
                        <div className='filter_block'>
                            <div className='search_block'>
                                <div className='search_input'>
                                    <div className='search_icon'>
                                        <img src={searchIcon} className='serch_icon' alt="search icon" />
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Search by name or email" 
                                        value={searchQuery} 
                                        onChange={handleSearch} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='dash_table'>
                            <table className="striped-table">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email Address</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredDoctors.map((doctor, index) => (
                                        <tr key={index}>
                                            <td headers="First Name">{doctor.firstName}</td>
                                            <td headers="Last Name">{doctor.lastName}</td>
                                            <td headers="Email Address">{doctor.email}</td>
                                            <td headers="Actions">
                                                <a href="#view" className='blue'>View</a> | <a href="#remove" className="remove">delete</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDoctors;
