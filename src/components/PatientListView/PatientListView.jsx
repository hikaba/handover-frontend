import React from "react";
import PatientCard from "../PatientCard/PatientCard";
import "./PatientListView.scss";

function PatientListView({ patients }){
    return(
        <div className="patient__list">
            <div className="patient-cards__container">
            <p className="patient_header">Patients</p>
                {patients.map(patient => (
                    <PatientCard key={patient.id} patient={patient} />
                ))}
            </div>
        </div>
    )
}
export default PatientListView;