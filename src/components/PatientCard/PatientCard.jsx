import "./PatientCard.scss";
import { Link } from "react-router-dom";

function PatientCard({ patient }) {
    return (
        <Link to={`/patient/${patient.id}`} className="patient">
            <div className="patient-card__container">
                <p className="patient_name">{patient.last_name}, {patient.first_name}</p>
                <p className="patient_DOB">Date of Birth: {patient.date_of_birth}</p>
            </div>
        </Link>
        
    )
    
}
export default PatientCard;