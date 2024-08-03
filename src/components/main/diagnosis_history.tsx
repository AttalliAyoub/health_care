import { Avatar, Box, Card, CardHeader, Typography } from "@mui/material";
import { APIPatient, Value } from "../../utils/types";
import HeartBPM from "../assets/HeartBPM.png";
import RespiratoryRate from "../assets/respiratory_rate.png";
import Temperature from "../assets/temperature.png";

export const DiagnosisHistory = ({ patient }: { patient: APIPatient | null }) => {

    const history = patient?.diagnosis_history;
    const first = (history && history.length) ? history[0] : null;

    return <Card sx={{
        height: "673px",
        marginTop: "18px",
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
    }} >

        <CardHeader title='Diagnosis History' sx={{ padding: 0, margin: 0 }} />

        <Box sx={{
            height: '298px',
            backgroundColor: '#F4F0FE',
            borderRadius: '12px',
            marginTop: '40px',
        }} >

        </Box>


        <Box sx={{
            flex: 1,
            marginTop: '20px',
            display: 'flex',
            gap: '21px',
            justifyContent: 'center',
            alignItems: 'stretch',
        }} >

            <SmalCard
                title="Respiratory Rate"
                icon={RespiratoryRate}
                value={first?.respiratory_rate}
                unit=" bpm" />
            <SmalCard
                title="Temperature"
                color="#FFE6E9"
                icon={Temperature}
                value={first?.temperature}
                unit="°F" />
            <SmalCard
                title="Heart Rate"
                color="#FFE6F1"
                arrow={true}
                icon={HeartBPM}
                value={first?.heart_rate}
                unit=" bpm" />

        </Box>

    </Card>
};

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

const SmalCard = ({
    icon,
    title,
    color = '#E0F3FA',
    arrow = false,
    value,
    unit,
}: {
    unit: string,
    icon: string,
    title: string,
    color?: string,
    value?: Value,
    arrow?: boolean,

}) => {
    return <Box sx={{
        flex: 1,
        backgroundColor: color,
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column'
    }} >

        <Avatar style={{
            width: 96,
            height: 96,
            borderRadius: 48,
            marginBottom: 16,
        }} src={icon} />

        <Typography fontWeight="bold" fontSize="16px" > {title} </Typography>
        <Typography fontWeight="1000" fontSize="30px" lineHeight="41px" > {value?.value}{unit} </Typography>
        <Box sx={{ flex: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center' }} >
            {arrow && <ArrowDropDownRoundedIcon fontSize="small" />}
            <Typography> {value?.levels} </Typography>
        </Box>


    </Box>;
}