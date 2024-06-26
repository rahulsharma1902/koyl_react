import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../../Admin/AdminLayout';
import searchIcon from '../../../images/search_icon.png';
import { getPatients } from '../../../api/patients';
import DoctorLayout from '../DoctorLayout';

const DoctorsPatient = () => {
    const [patients, setPatients] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const petientList = await getPatients();
                setPatients(petientList);
            } catch (error) {
                console.error('Failed to fetch doctors:', error.message);
            }
        };

        fetchDoctors();
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredPatients = patients.filter(patient => 
        patient.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <DoctorLayout user={user}>
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
                                    {filteredPatients.map((patient, index) => (
                                        <tr key={index}>
                                            <td headers="First Name">{patient.first_name}</td>
                                            <td headers="Last Name">{patient.last_name}</td>
                                            <td headers="Email Address">{patient.email}</td>
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
        </DoctorLayout>
    );
};

export default DoctorsPatient;
