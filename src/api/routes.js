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