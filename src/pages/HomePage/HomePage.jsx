import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getPatientsByDoctorId } from "../../api/routes";
import PatientListView from "../../components/PatientListView/PatientListView";
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
        <div className="home">
            <PatientListView patients={patients} />
        </div>
    )
}
export default HomePage;