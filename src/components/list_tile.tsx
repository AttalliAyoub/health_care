import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, IconButton, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { APIPatient } from "../utils/types";

export const ListTile = ({ patient }: { patient: APIPatient }) => {

    return <ListItemButton onClick={() => { }} >
        <ListItemAvatar>
            <Avatar sx={{ width: '48px', height: '48px' }} src={patient.profile_picture} />
        </ListItemAvatar>
        <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }} primary={patient.name} secondary={`${patient.gender}, ${patient.age}`} />
        <IconButton> <MoreHorizIcon /> </IconButton>
    </ListItemButton>;
}