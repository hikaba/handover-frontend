import axios from "axios";

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers:{
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config)=>{
        if(config.url){
            config.url = `${config.url}`;
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        if(error.response){
            console.error('error response: ', error.response);
        }
        else{
            console.error('error message: ', error.message);
        }
        return Promise.reject(error);
    }
);

export const getPatients = () => {
    return apiClient.get(`/api/patients`);
};

export const getPatientsByDoctorId = (doctorId) => {
    return apiClient.get(`/api/doctors/${doctorId}/patients`);
};

export const createPatient = (patientData, doctorId) => {
    const requestBody = {
        patientData: {
            first_name: patientData.first_name,
            last_name: patientData.last_name,
            date_of_birth: patientData.date_of_birth,
            medical_history: JSON.stringify({details: patientData.medical_history})
        },
        doctor_id: doctorId
    };
    return apiClient.post(`/api/patients`, requestBody);
}

export const fetchHandoverNote = (patientId) => {
    return apiClient.get(`api/patients/${patientId}/handover`);
}

export const updateHandoverNote = (patientId, handoverNote) => {
    const requestBody = {
        handover_note: handoverNote
    }

    return apiClient.put(`api/patients/${patientId}/handover`,requestBody);
}

export const getPatientById = (patientId) => {
    return apiClient.get(`api/patients/${patientId}`)
}