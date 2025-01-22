import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getPatientsByDoctorId } from "../../api/routes";

function HomePage() {
    const [patients, setPatients] = useState([]);
    const [loading,  setLoading] =  useState(true);
    const { currentUser } = useAuth();

    const fetchPatientsByDoctorId = async (doctorId) => {
        try {
            setLoading(true);
            const response = await getPatientsByDoctorId(doctorId);
            setPatients(response);
            setLoading(false);
        } catch (error){
            console.error("error fetching patient data:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPatientsByDoctorId(currentUser.uid);
        
      }, []);
    
    if (loading){
        return <div>Loading...please wait</div>
    }
    return(
        <>
            <h1>welcome to the home page</h1>
            <h2>Patient List</h2>
            {patients.length > 0 ? (
                <ul>
                    {patients.map(patient => (
                        <li key = {patient.id}>
                            {patient.last_name}, {patient.first_name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No patients found.</p>
            )}
        </>
    )
}
export default HomePage;