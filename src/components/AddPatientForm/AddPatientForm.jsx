import "./AddPatientForm.scss";
import React, { useState } from "react";
import { createPatient } from "../../api/routes";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AddPatientForm({ block }){
    const navigate = useNavigate();
    const [patient, setPatient] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        medical_history: '',
        current_block: block
    });
    const { currentUser } = useAuth();

    const handleChange = (event) => {
        setPatient({...patient, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createPatient(patient, currentUser.uid);
            navigate(`/patients?block=${block}`);

        } catch (error) {
            console.error("error adding patient: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-patient-form">
            <div className="add-patient-form__wrapper">
                <label className="add-patient-form__label">First Name</label>
                    <input
                        className="add-patient-form__input"
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={patient.first_name}
                        onChange={handleChange}
                        placeholder="first name"
                        required
                    />
            </div>

            <div className="add-patient-form__wrapper">
                <label className="add-patient-form__label">Last Name</label>
                    <input
                        className="add-patient-form__input"
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={patient.last_name}
                        onChange={handleChange}
                        placeholder="last name"
                        required
                    />
            </div>

            <div className="add-patient-form__wrapper">
                <label className="add-patient-form__label">Date of Birth</label>
                    <input
                        className="add-patient-form__input"
                        type="date"
                        id="date_of_birth"
                        name="date_of_birth"
                        value={patient.date_of_birth}
                        onChange={handleChange}
                        placeholder="date of birth"
                        required
                    />
            </div>
            
            <div className="add-patient-form__wrapper">
                <label className="add-patient-form__label">Medial History</label>
                    <textarea
                        className="add-patient-form__input"
                        type="text"
                        id="medical_history"
                        name="medical_history"
                        value={patient.medical_history}
                        onChange={handleChange}
                        placeholder="enter medical history (e.g. allergies, past surgies, etc."
                    />
            </div>
          <button className="add-patient-form__button" type="submit">Add Patient</button>
        </form>
      );
    }
    
    export default AddPatientForm;