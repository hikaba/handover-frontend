import React from "react";
import { Link } from "react-router-dom";
import PatientCard from "../PatientCard/PatientCard";
import "./PatientListView.scss";
import { useNavigate } from "react-router-dom";

function PatientListView({ patients, block }){
    const navigate = useNavigate();

    const handleAddPatientClick = () => {
        navigate("/addPatient", { state: { block }});
    };

    return(
        <div className="patient-list">
            <div className="patient-list__container">
            <p className="patient-list__title">Patients</p>
            <button onClick={handleAddPatientClick} className="patient-list__add-button">
                Add New Patient
            </button>
                {patients.map(patient => (
                    <PatientCard key={patient.id} patient={patient} />
                ))}
            </div>
        </div>
    )
}
export default PatientListView;