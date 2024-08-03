import React from 'react';
import { APIPatient } from "../../utils/types";
import { DiagnosisHistory } from './diagnosis_history';
import { PatientInfo } from './patient_info';
import Patients from "./patients";

export const Main = () => {

    const [selected, setSelected] = React.useState<APIPatient | null>(null);

    return (<div style={{ margin: 18, display: 'flex' }} >
        <Patients selected={selected} setSelected={setSelected} />
        <div style={{ flex: 1, display: 'flex' }} >
            <div style={{ flex: 1, marginInline: 32, display: 'flex', flexDirection: 'column' }} >
                <DiagnosisHistory />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }} >
                <PatientInfo patient={selected} />
            </div>
        </div>

    </div>);
};