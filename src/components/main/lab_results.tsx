import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import { Box, Card, CardHeader, IconButton, ListItem, ListItemText } from "@mui/material";
import { APIPatient } from "../../utils/types";

export const LabResults = ({ patient }: { patient: APIPatient | null }) => {

    const results = patient?.lab_results;

    return <Card sx={{
        height: "296px",
        width: "367px",
        marginTop: "32px",
        display: 'flex',
        flexDirection: 'column'
    }} >

        <CardHeader title='Lab Results' />

        <Box sx={{
            marginTop: '16px',
            marginBottom: '20px',
            marginInlineEnd: '16px',
            marginInlineStart: '20px',
            overflowY: 'auto',
            flex: 1,
            padding: 0,
            listStyle: "none",
        }} >
            {results?.map((result, i) => {
                return <ListTile key={i}  result={result} />;
            })}
        </Box>

    </Card>
};

const ListTile = ({result}: { result: string }) => {
    return <ListItem sx={{ height: '40px' }}  >
        <ListItemText primaryTypographyProps={{ fontSize: '13px' }} primary={result} />
        <IconButton> <SaveAltRoundedIcon /> </IconButton>
    </ListItem>
}