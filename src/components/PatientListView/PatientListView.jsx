import React from "react";
import { Link } from "react-router-dom";
import PatientCard from "../PatientCard/PatientCard";
import "./PatientListView.scss";

function PatientListView({ patients }){
    return(
        <div className="patient-list">
            <div className="patient-list__container">
            <p className="patient-list__title">Patients</p>
            <Link to="/addPatient" className="patient-list__add-button">
                Add New Patient
            </Link>
                {patients.map(patient => (
                    <PatientCard key={patient.id} patient={patient} />
                ))}
            </div>
        </div>
    )
}
export default PatientListView;