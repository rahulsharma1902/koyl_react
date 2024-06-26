import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import DoctorLayout from '../DoctorLayout';
import { patientDetail } from '../../../api/patients';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

const PatientDetail = () => {
    const { user } = useContext(AuthContext);
    const [patientDetails, setPatientDetails] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                const patientData = await patientDetail(id);
                setPatientDetails(patientData);
                console.warn(patientDetails);
            } catch (error) {
                console.error('Failed to fetch Patient details:', error.message);
                setError('Failed to find the Patient.');
            }
        };

        fetchPatientDetails();
    }, [id]);

    const formatDateTime = (isoDate) => {
        const date = new Date(isoDate);
        return `${format(date, 'yyyy-MM-dd')}`;
    };

    if (error) {
        return (
            <DoctorLayout user={user}>
                <div>
                    <p>{error}</p>
                </div>
            </DoctorLayout>
        );
    }

    if (!patientDetails) {
        return (
            <DoctorLayout user={user}>
                <div>
                    {/* You can add a loader here while data is not loaded */}
                </div>
            </DoctorLayout>
        );
    }

    const doctorLocation = patientDetails?.patient_meta?.doctor_details?.doctor_meta?.location || 'Not available';
    const doctorFullName = patientDetails?.patient_meta?.doctor_details?.first_name && patientDetails?.patient_meta?.doctor_details?.last_name 
    ? `${patientDetails.patient_meta.doctor_details.first_name} ${patientDetails.patient_meta.doctor_details.last_name}`
    : 'Not available';

    const patientEmail = patientDetails.email || 'Not available';
    const lastAppointment = patientDetails.last_appointment || 'Not available';
    const signupDate = formatDateTime(patientDetails.created_at);
    const patientAge = patientDetails.patient_meta?.age || 'Not available';
    const patientSex = patientDetails.patient_meta?.sex || 'Not available';
    const patientRace = patientDetails.patient_meta?.race || 'Not available';
    const patientWeight = patientDetails.patient_meta?.weight || 'Not available';
    const patientAllergies = patientDetails.patient_meta?.allergies || 'Not available';

    return (
        <DoctorLayout user={user}>
            <div>
                <div className="dashboard_module recommendations-module">
                    <div className='dash_container'>
                        <div className='module_header'>
                            <h2>{patientDetails.name}</h2>
                        </div>
                        <div className='detail_row'>
                            <div className='detail_col'>
                                <h2>Patient Details</h2>
                                <div className='detail_div_wrap'>
                                    <div className='detail_div'>
                                        <b>Patient at:</b> {doctorLocation}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Assigned to:</b> Dr.{doctorFullName}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Email:</b> {patientEmail}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Last appointment:</b> {lastAppointment}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Sign up date:</b> {signupDate}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Age:</b> {patientAge}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Sex:</b> {patientSex}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Race:</b> {patientRace}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Weight:</b> {patientWeight}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Known Allergies:</b> {patientAllergies}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DoctorLayout>
    );
};

export default PatientDetail;
