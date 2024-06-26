import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../AdminLayout';
import searchIcon from '../../../images/search_icon.png';
import { getDoctors, removeDoctorAccount } from '../../../api/doctors'; 
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AdminDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const doctorsList = await getDoctors();
                setDoctors(doctorsList);
            } catch (error) {
                console.error('Failed to fetch doctors:', error.message);
            }
        };

        fetchDoctors();
    }, []);

    const removeDoctorAcc = async (id) => {
        try {
            if (id) {
                const response = await removeDoctorAccount({ id });
                toast.success(response.message);
                setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.id !== id));
            } else {
                throw new Error('Invalid id provided for removal');
            }
        } catch (error) {
            toast.error(error.message);
            console.error('Removal error:', error.message);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredDoctors = doctors.filter(doctor =>
        doctor.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.email?.toLowerCase().includes(searchQuery.toLowerCase())
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
                                            <td headers="First Name">{doctor.first_name}</td>
                                            <td headers="Last Name">{doctor.last_name}</td>
                                            <td headers="Email Address">{doctor.email}</td>
                                            <td headers="Actions">
                                                <Link to={`/admin-dashboard/doctor-detail/${doctor.id}`} className='blue'>View</Link>
                                                {' | '}
                                                <a href="#remove" onClick={() => removeDoctorAcc(doctor.id)} className="remove">Remove</a>
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
