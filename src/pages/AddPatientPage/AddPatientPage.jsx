import React, { useState } from "react";
import "./AddPatientPage.scss";
import AddPatientForm from "../../components/AddPatientForm/AddPatientForm";
import { useLocation, useNavigate } from "react-router-dom";

function AddPatientPage() {

    const location = useLocation();
    const navigate = useNavigate();

    const { block } = location.state || {};

    return (
        <div className="add-patient-page">
            <h2 className="add-patient-page__header">
                <AddPatientForm block={block} />
            </h2>
        </div>
    );
}

export default AddPatientPage;
