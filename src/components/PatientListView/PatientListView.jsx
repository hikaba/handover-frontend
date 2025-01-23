import React from "react";
import PatientCard from "../PatientCard/PatientCard";

function PatientListView({ patients }){
    return(
        <div className="patient-list">
            <p className="patient_header">Patient List</p>
            <div className="patient-card__container">
                {patients.map(patient => (
                    <PatientCard key={patient.id} patient={patient} />
                ))}
            </div>
        </div>
    )
}
export default PatientListView;