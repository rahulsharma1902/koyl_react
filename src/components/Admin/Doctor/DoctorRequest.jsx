import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../AdminLayout';
import searchIcon from '../../../images/search_icon.png';
import { getRequestDoctors, approveDoctorRequest ,removeDoctorAccount} from '../../../api/doctors';
import { toast } from 'react-toastify'; 
import { Link } from 'react-router-dom'

const DoctorRequest = () => {
    const { user } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const doctorsList = await getRequestDoctors();
                setRequests(doctorsList);
            } catch (error) {
                console.error('Failed to fetch doctors:', error.message);
            }
        };

        fetchDoctors();
    }, []);

    const removeDoctorAcc = async (id) => {
        try {
            if(id){
                const response = await removeDoctorAccount({ id });
                toast.success(response.message);
                setRequests(prevRequests => prevRequests.filter(request => request.id !== id));
            }else {
                throw new Error('Invalid id provided for approval');
            }

        } catch (error){
            toast.error(error.message);
            console.error('Approval error:', error.message);
        }
    }
    const approveRequest = async (id) => {
        try {
            if (id) {
                const response = await approveDoctorRequest({ id });
                toast.success(response.message);
                setRequests(prevRequests => prevRequests.filter(request => request.id !== id));
            } else {
                throw new Error('Invalid id provided for approval');
            }
        } catch (error) {
            console.warn(error);
            toast.error(error.message);
            console.error('Approval error:', error.message);
        }
    };
    
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredRequests = requests.filter(request => 
        request.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.email?.toLowerCase().includes(searchQuery.toLowerCase())
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
                                            <td headers="First Name">{request.first_name}</td>
                                            <td headers="Last Name">{request.last_name}</td>
                                            <td headers="Email Address">{request.email}</td>
                                            <td headers="Actions">
                                            <Link to={`/admin-dashboard/doctor-detail/${request.id}`} className='blue'>View</Link>
                                                {/* <a href="#view" className='blue'>View</a>  */}
                                                | 
                                                <a href="#approve" onClick={() => approveRequest(request.id)} className='green'>Approve</a> | 
                                                <a href="#remove" onClick={() => removeDoctorAcc(request.id)} className="remove">Remove</a>
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
