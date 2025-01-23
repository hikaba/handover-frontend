import React, { useState } from "react";
import "./AddPatientPage.scss";
import AddPatientForm from "../../components/AddPatientForm/AddPatientForm";
import { useNavigate } from "react-router-dom";

function AddPatientPage() {
    const navigate = useNavigate();

    const handleSuccess = () => {
        navigate('/')
    };

    return (
        <div className="add-patient-page">
            <h2 className="add-patient-page__header">
                <AddPatientForm onSuccess={handleSuccess}></AddPatientForm>
            </h2>
        </div>
    );
}

export default AddPatientPage;
