import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Avatar, Box, Button, Card, CardHeader, Divider, Typography } from "@mui/material";
import { APIPatient, Value } from "../../utils/types";
import HeartBPM from "../assets/HeartBPM.png";
import RespiratoryRate from "../assets/respiratory_rate.png";
import Temperature from "../assets/temperature.png";
export const DiagnosisHistory = ({ patient }: { patient: APIPatient | null }) => {

    const data = patient?.diagnosis_history;
    const last = (data && data.length) ? data[data.length - 1] : null;
    const last_time = new Date(`${last?.month}, ${last?.year}`);
    const last6months = new Date(last_time.getTime() -  1000 * 60 * 60 * 24 * 30 * 6);
    const history = data?.filter(p => new Date(`${p.month}, ${p.year}`).getTime() > last6months.getTime());

    return <Card sx={{
        height: "673px",
        marginTop: "18px",
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
    }} >

        <CardHeader title='Diagnosis History' titleTypographyProps={{ variant: 'h5' }} sx={{ padding: 0, margin: 0 }} />

        <Box sx={{
            height: '298px',
            backgroundColor: '#F4F0FE',
            borderRadius: '12px',
            marginTop: '40px',
            padding: '16px',
            display: 'flex'
        }} >

            <Box sx={{ display: 'flex', flexDirection: 'column', marginInlineEnd: '16px' }} >
                <Box sx={{ display: 'flex', marginBottom: '16px', height: '24px', justifyContent: 'space-between' }} >
                    <Typography fontSize={18} lineHeight={'24px'} fontWeight={"bold"} > Blood Pressure </Typography>
                    <Button sx={{ maxHeight: '24px', paddingInline: '10px', margin: 0 }}
                        style={{ fontWeight: 'normal', textTransform: 'none', fontSize: 14, lineHeight: 19 }}
                        variant="text" size='small' color='inherit' endIcon={<KeyboardArrowDownRoundedIcon />}>
                        Last 6 months
                    </Button>
                </Box>
                <ChartWidget history={history} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '208px' }} >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', height: '19px' }} >
                    <Box sx={{ width: '14px', height: '14px', borderRadius: '7px', backgroundColor: '#E66FD2' }} />
                    <Typography fontWeight={"bold"} > Systolic </Typography>
                </Box>
                <Box style={{ height: 8 }} />
                <Typography fontWeight={"bold"} fontSize={22} lineHeight={"30px"} > {last?.blood_pressure.systolic.value} </Typography>
                <Box style={{ height: 8 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }} >
                    {last?.blood_pressure.systolic.levels == 'Lower than Average' && <ArrowDropDownRoundedIcon fontSize="small" />}
                    {last?.blood_pressure.systolic.levels == 'Higher than Average' && <ArrowDropUpRoundedIcon fontSize="small" />}
                    <Typography> {last?.blood_pressure.systolic.levels} </Typography>
                </Box>
                <Box style={{ height: 8 }} />
                <Box style={{ height: 8 }} />
                <Divider />
                <Box style={{ height: 8 }} />
                <Box style={{ height: 8 }} />


                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', height: '19px' }} >
                    <Box sx={{ width: '14px', height: '14px', borderRadius: '7px', backgroundColor: '#8C6FE6' }} />
                    <Typography fontWeight={"bold"} > Diastolic </Typography>
                </Box>
                <Box style={{ height: 8 }} />
                <Typography fontWeight={"bold"} fontSize={22} lineHeight={"30px"} > {last?.blood_pressure.diastolic.value} </Typography>
                <Box style={{ height: 8 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }} >
                    {last?.blood_pressure.diastolic.levels == 'Lower than Average' && <ArrowDropDownRoundedIcon fontSize="small" />}
                    {last?.blood_pressure.diastolic.levels == 'Higher than Average' && <ArrowDropUpRoundedIcon fontSize="small" />}
                    <Typography> {last?.blood_pressure.diastolic.levels} </Typography>
                </Box>

            </Box>


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
                value={last?.respiratory_rate}
                unit=" bpm" />
            <SmalCard
                title="Temperature"
                color="#FFE6E9"
                icon={Temperature}
                value={last?.temperature}
                unit="°F" />
            <SmalCard
                title="Heart Rate"
                color="#FFE6F1"
                icon={HeartBPM}
                value={last?.heart_rate}
                unit=" bpm" />

        </Box>

    </Card>
};

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { ChartWidget } from "./chart";

const SmalCard = ({
    icon,
    title,
    color = '#E0F3FA',
    value,
    unit,
}: {
    unit: string,
    icon: string,
    title: string,
    color?: string,
    value?: Value,

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
            {value?.levels == 'Lower than Average' && <ArrowDropDownRoundedIcon fontSize="small" />}
            {value?.levels == 'Higher than Average' && <ArrowDropUpRoundedIcon fontSize="small" />}
            <Typography> {value?.levels} </Typography>
        </Box>


    </Box>;
}