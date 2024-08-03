import { Box, Card, CardHeader, Typography } from "@mui/material";
import { APIPatient } from "../../utils/types";

export const DiagnosticListWidget = ({ patient }: { patient: APIPatient | null }) => {

    const list = patient?.diagnostic_list;

    return <Card sx={{
        height: "349px",
        marginTop: "32px",
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
    }} >

        <CardHeader title='Diagnostic List' titleTypographyProps={{ variant: 'h5' }} style={{ padding: 0 }} />
        <Box sx={{
            marginTop: '40px',
            height: '48px',
            backgroundColor: '#F6F7F8',
            borderRadius: '24px',
            padding: '16px',
            display: 'flex',
        }}>
            <Typography fontWeight='bold' sx={{ width: '233px' }} > Problem/Diagnosis </Typography>
            <Typography fontWeight='bold' sx={{ flex: 1 }} > Description </Typography>
            <Typography fontWeight='bold' sx={{ width: '92px' }} > Status </Typography>
        </Box>

        <Box sx={{
            // marginTop: '16px',
            // marginBottom: '20px',
            // marginInlineEnd: '16px',
            // marginInlineStart: '20px',
            overflowY: 'auto',
            flex: 1,
            padding: 0,
            listStyle: "none",
        }} >
            <div style={{ height: '10px' }} />

            {list?.map((diagnostic, i) => (<Box key={i} sx={{
                display: 'flex',
                marginBottom: '7px',
                minHeight: '40px',
                paddingInlineStart: '16px',
                alignItems: 'center',
                paddingTop: '10px',
                paddingBottom: '10px',
            }} >
                <Typography sx={{ width: '233px' }} > {diagnostic.name} </Typography>
                <Typography sx={{ flex: 1, paddingInlineEnd: '16px' }} > {diagnostic.description} </Typography>
                <Typography sx={{ width: '95px' }} > {diagnostic.status} </Typography>
            </Box>))}

        </Box>



    </Card>
};
