import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, IconButton, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { APIPatient } from "../utils/types";

export const ListTile = ({ patient, selected, click }: {
    patient: APIPatient,
    selected: APIPatient | null,
    click: () => void,
}) => {

    const is_selected = JSON.stringify(selected) == JSON.stringify(patient);

    return <ListItemButton onClick={click} selected={is_selected} sx={{
        backgroundColor: is_selected ? '#D8FCF7 !important' : null,
    }} >
        <ListItemAvatar>
            <Avatar sx={{ width: '48px', height: '48px' }} src={patient.profile_picture} />
        </ListItemAvatar>
        <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }} primary={patient.name} secondary={`${patient.gender}, ${patient.age}`} />
        <IconButton> <MoreHorizIcon /> </IconButton>
    </ListItemButton>;
}