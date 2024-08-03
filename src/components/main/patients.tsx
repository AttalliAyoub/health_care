import SearchIcon from "@mui/icons-material/Search";
import { Alert, Box, CardHeader, CircularProgress, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import React from 'react';
import useFetch from "../../utils/backend";
import { APIError, APIPatient } from "../../utils/types";
import { ListTile } from "../list_tile";

type setSelectedType = React.Dispatch<React.SetStateAction<APIPatient | null>>;

export const Patients = ({ selected, setSelected }: { selected: APIPatient | null, setSelected: setSelectedType }) => {

  const { data, error, isPending } = useFetch<APIPatient[], APIError>({
    transform: (data) => (data as APIPatient[]).map(p => {
      p.date_of_birth = new Date(p.date_of_birth);
      return p;
    })
  });

  React.useEffect(() => {
    if (!selected && data && data.length) {
      setSelected(data[3]);
    }
  }, [JSON.stringify(data)]);

  return (
    <Card
      sx={{
        width: "367px",
        height: "1054px",
        marginTop: "18px",
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardHeader
        sx={{ padding: "20px" }}
        title="Patients"
        titleTypographyProps={{ variant: "h5" }}
        action={
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        }
      ></CardHeader>


      <Alert severity="error" sx={{
        display: error ? 'flex' : 'none',
        marginTop: '30vh'
      }} > {error?.error_message} </Alert>

      <CircularProgress sx={{
        marginInline: 'auto',
        display: isPending ? 'block' : 'none',
        marginTop: '30vh'
      }} />

      <Box sx={{
        marginTop: '20px',
        marginBottom: '20px',
        marginInlineEnd: '4px',
        overflowY: 'auto',
        flex: 1,
        padding: 0,
        listStyle: "none",
      }} >
        {data && data.length && data.map((p, i) => {
          return <ListTile key={i} selected={selected} patient={p} click={() => {
            setSelected(p);
          }} />;
        })}
      </Box>

    </Card>
  );
};

export default Patients;
