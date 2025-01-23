import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPatientById, updateHandoverNote } from "../../api/routes";
import Loading from "../../components/Loading/Loading";
import "./PatientPage.scss"; 


function PatientPage(){
    const { id } = useParams();
    const [patient, setPatient] = useState(null);
    const [handoverNote, setHandoverNote] =useState({active_issues: [], tasks: []})
    const [loading, setLoading] = useState(true);
    
    const fetchPatient = async (id) => {
        try {
            setLoading(true);
            const response = await getPatientById(id);
            setPatient(response);
            setHandoverNote(response.handover_note)
            setLoading(false);
        } catch (error) {
            console.error("error fetching patient data: ", error)
        }
    };

    useEffect(() => {
        fetchPatient(id);
    }, []);

    const handleChange = (event) => {
        const { name, value} = event.target;
        setHandoverNote({...handoverNote, [name]: value.split("\n")});
    };

    const handleSave = async () => {
        try {
            await updateHandoverNote(id, handoverNote);
            alert("handover note updated successfully!");
        } catch (error) {
            console.error("error updating handover note: ", error)
        }
    };

    if(loading) return <Loading />

    return (
        <div className="patient-page">
            <h1 className="patient-page__name">{`${patient.first_name} ${patient.last_name}`}</h1>
            <p className="patient-page__dob">Date of Birth: {patient.date_of_birth}</p>


            <div className="patient-page__medical-history-section">
                <p className="patient-page__mh-title">Medical History:</p>
                {patient.medical_history ? (
                    <ul className="patient-page__list">
                        {patient.medical_history.allergies && (
                            <li className="patient-page__item">
                                Allergies: {patient.medical_history.allergies.join(", ")}
                            </li>
                        )}
                        {patient.medical_history.past_surgeries && (
                            <li className="patient-page__item">
                                Past Surgeries: {patient.medical_history.past_surgeries.join(", ")}
                            </li>
                        )}
                    </ul>
                ) : (
                    <p>No medical history available.</p>
                )}
            </div>


            <h2 className="patient-page__header">Handover Notes</h2>
            <div className="patient-page__handover-section">
                <div className="patient-page__handover-container">
                    <label className="patient-page__handover-label">Active Issues:</label>
                    <textarea
                        className="patient-page__handover-input"
                        name="active_issues"
                        value={handoverNote.active_issues.join("\n")}
                        onChange={handleChange}
                        placeholder="Enter active issues, one per line"
                    />
                </div>
                <div className="patient-page__handover-container">
                    <label className="patient-page__handover-label">Tasks:</label>
                    <textarea
                        className="patient-page__handover-input"
                        name="tasks"
                        value={handoverNote.tasks.join("\n")}
                        onChange={handleChange}
                        placeholder="Enter tasks, one per line"
                    />
                </div>
                <button 
                    className= "patient-page__handover-button"
                    onClick={handleSave}>Save Handover Note</button>
            </div>
        </div>
    );
}

export default PatientPage;