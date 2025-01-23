import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getPatientsByBlock } from "../../api/routes";
import PatientListView from "../../components/PatientListView/PatientListView";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./HomePage.scss";

function HomePage() {
    const [patients, setPatients] = useState([]);
    const [loading,  setLoading] =  useState(true);
    const { currentUser } = useAuth();
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const block = params.get("block");
    
    const fetchPatientsByBlock = async (block) => {
        try {
            setLoading(true);
            const response = await getPatientsByBlock(block);
            setPatients(response);
            setLoading(false);
        } catch (error){
            console.error("error fetching patient data:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPatientsByBlock(block)
        
      }, []);
    
    if (loading){
        return <Loading />
    }
    return(
        <div className="home">
            <h1 className="block-patients__header">{block.toUpperCase()} Patients</h1>
            <PatientListView patients={patients} />
        </div>
    )
}
export default HomePage;