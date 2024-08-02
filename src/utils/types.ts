
export interface APIError {
    error: boolean,
    error_message: string,
}

export interface Value {
    value: number;
    levels: string;
}

export interface DiagnosisHistory {
    month: string,
    year: number,
    blood_pressure: {
        systolic: Value,
        diastolic: Value,
    },
    heart_rate: Value,
    respiratory_rate: Value
    temperature: Value
}

export interface DiagnosticList {
    name: string;
    description: string;
    status: string;
}

export interface APIPatient {
    name: string;
    gender: string;
    age: number;
    profile_picture: string;
    date_of_birth: Date;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string,
    diagnosis_history: DiagnosisHistory[],
    diagnostic_list: DiagnosticList[],
    lab_results: string[],

}
