import Header from "../../global/header";
import { Box, Paper, Card } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import { useState ,useEffect } from "react";
import axios from "axios";


const columns = [
  { field: "id", headerName: "#", width: 30 },
  { field: "JournalID", headerName: "Journal #" },
  { field: "JounalDate", headerName: "Jounal Date " },
  {
    field: "Status ",
    headerName: "Status ",
  },
  {
    field: "Notes ",
    headerName: "Notes",
    // description: "This column has a value getter and is not sortable.",
    sortable: false,
  },
  { field: "Amount", headerName: "Amount", type: "number", hide: true },
  { field: "CreatedBy", headerName: "CreatedBy" ,hide: true },
  { field: "SubmittedBy", headerName: "SubmittedBy" , hide: true },
  { field: "JournalType", headerName: "Journal Type" },
  { field: "Attachments", headerName: "Attachments" },
  { field: "Branch", headerName: "Branch" },

];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 13, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 14, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 15, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 16, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 17, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 18, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 20, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 21, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 22, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 23, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 24, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 25, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const Dashboard = () => {

  const {entries ,setEntries} = useState([]);



  useEffect(() => {
     axios.get(`http://localhost:3000/mockData`)
    .then((res) => setEntries(res.data))
  },[])

  console.log(entries)
  return (
    <>
      <div className="section-content">
        <Header
          mainTitle="Journal Entries"
          subTitle1="Financial Entries"
          subTitle2="Journal Entries"
          display="none"
          btnTxt1="New Journal"
          btnTxt2="Export"
          btnIcon1={<AddIcon />}
          btnIcon2={<DownloadIcon />}
        />
        <Paper
          elevation={3}
          sx={{
            borderRadius: "8px",
            padding: "32px 24px",
            maxWidth:"100%",
            overflowX: "auto"
          }}
        >
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            scrollbarSize={20}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10, page: 0 },
              },
              columns: {
                columnVisibilityModel: {
                  SubmittedBy: false,
                  CreatedBy: false,
                  Branch: false,
                  SubmittedBy: false,
                },
              },
            }}
            pageSizeOptions={[5, 10, 25, 50]}
            checkboxSelection
          />
       
        </Paper>
      </div>
    </>
  );
};
export default Dashboard;
