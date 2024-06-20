import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../AdminLayout';
import searchIcon from '../../../images/search_icon.png';

const DoctorRequest = () => {
    const { user } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState('');

    const requests = [
        { firstName: 'John', lastName: 'Doe', email: 'email@gmailo.com' },
        { firstName: 'Jethro', lastName: 'Tull', email: 'Jethro@gmailo.com' }
    ];

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredRequests = requests.filter(request => 
        request.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AdminLayout user={user}>
            <div>
                <div className="dashboard_module recommendations-module">
                    <div className='dash_container'>
                        <div className='module_header'>
                            <h2>Doctor's requests</h2>
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
                                    {filteredRequests.map((request, index) => (
                                        <tr key={index}>
                                            <td headers="First Name">{request.firstName}</td>
                                            <td headers="Last Name">{request.lastName}</td>
                                            <td headers="Email Address">{request.email}</td>
                                            <td headers="Actions">
                                                <a href="#view" className='blue'>View</a> | 
                                                <a href="#approve" className='green'>Approve</a> | 
                                                <a href="#remove" className="remove">Remove</a>
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

export default DoctorRequest;
