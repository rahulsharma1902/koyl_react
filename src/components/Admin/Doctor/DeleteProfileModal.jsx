import React, { useState } from 'react';

const DeleteProfileModal = ({ doctor, onDelete, onCancel }) => {
    const [confirmationText, setConfirmationText] = useState('');

    const handleDelete = () => {
        if (confirmationText === 'DELETE') {
            onDelete(doctor.id);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onCancel}>&times;</span>
                <h2>Delete Account</h2>
                <p>Are you sure you want to delete {doctor.first_name} {doctor.last_name}'s account? This action cannot be undone.</p>
                <p>Type <strong>DELETE</strong> to permanently remove the account</p>
                <input 
                    type="text" 
                    value={confirmationText} 
                    onChange={(e) => setConfirmationText(e.target.value)} 
                />
                <button className="cta cta_red" onClick={handleDelete} disabled={confirmationText !== 'DELETE'}>
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default DeleteProfileModal;
