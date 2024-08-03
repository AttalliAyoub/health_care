import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FemaleIcon from '@mui/icons-material/Female';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { APIPatient } from "../../utils/types";
import JessicaTaylorImage from '../assets/Jessica_Taylor.png';
export const PatientInfo = ({ patient }: { patient: APIPatient | null }) => {

    const image = patient && patient.name == 'Jessica Taylor' ? JessicaTaylorImage : patient?.profile_picture;

    return <Card sx={{
        flex: 1,
        padding: '32px',
        paddingInline: '20px',
        width: '367px',
        maxHeight: "740px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }} >

        <Avatar src={image} sx={{ width: '200px', height: '200px' }} />
        <Box style={{ height: 24 }} />
        <Typography variant="h5" > {patient?.name} </Typography>
        <Box style={{ height: 24 }} />
        <ListTile icon={<CalendarTodayIcon />} title="Date Of Birth" subtitle={patient?.date_of_birth.toLocaleDateString('en-US', {
            day: '2-digit',
            year: 'numeric',
            month: 'long'
        })} />
        <Box style={{ height: 24 }} />
        <ListTile icon={<FemaleIcon />} title="Gender" subtitle={patient?.gender} />
        <Box style={{ height: 24 }} />
        <ListTile icon={<PhoneOutlinedIcon />} title="Contact Info." subtitle={patient?.phone_number} />
        <Box style={{ height: 24 }} />
        <ListTile icon={<PhoneOutlinedIcon />} title="Emergency Contacts" subtitle={patient?.emergency_contact} />
        <Box style={{ height: 24 }} />
        <ListTile icon={<VerifiedUserOutlinedIcon />} title="Insurance Provider" subtitle={patient?.insurance_type} />
        <Box style={{ height: 40 }} />
        <Button variant='contained' >
            Show All Information
        </Button>

    </Card>
}

const ListTile = ({ icon, title, subtitle }: {
    icon: JSX.Element,
    title: string,
    subtitle?: string,
}) => {
    return <Box sx={{ height: '42px', width: '100%', display: 'flex' }} >
        <Avatar sx={{ backgroundColor: '#f6f7f8', color: '#072635', marginInlineEnd: '16px' }} >
            {icon}
        </Avatar>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
            <Typography> {title} </Typography>
            <Typography fontWeight={"bold"} > {subtitle} </Typography>
        </Box>
    </Box>
}