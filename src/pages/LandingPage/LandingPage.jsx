import React from "react";
import { Link, useNavigate} from "react-router-dom";
import "./LandingPage.scss";


function LandingPage() {
    const navigate = useNavigate();

    const blocks = ["Cardio", "ICU", "Neprology", "Gastroenterology", "Respirology"];

    const handleBlockClick = (block) => {
        navigate(`/patients?block=${block}`)
    }
    return(
        <div className="landing-page">
            <h1 className="landing-page__header">Select a Patient List</h1>
            <ul className="landing-page__list">
                {blocks.map((block) => (
                    <li key={block} className="landing-page__item">
                        <button
                            className="landing-page__button"
                            onClick={() => handleBlockClick(block)}>{block} patients</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default LandingPage;