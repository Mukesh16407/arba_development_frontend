import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const tableCellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
  };

export const MyStore = () => {
   
  return (
    <Container sx={{display: "flex", justifyContent: "center"}}>
        <Box sx={{width: "80%"}}>
            <Stack spacing={2} direction="row" sx={{mt : 5}}>
                
                    
               
      <Button sx={{width: "100%", background: "#00aeae",borderRadius: 0}} variant="contained">Categories</Button>
      <Button sx={{width: "100%", backgroundColor: "gray" ,borderRadius: 0}} variant="contained">Products</Button>
    </Stack>
    <Stack spacing={2} direction="row" sx={{mt : 5}}>
    <Button sx={{background: "#00aeae", borderRadius: 0}} variant="contained">Refresh</Button>
    <Button sx={{background: "#00aeae", borderRadius: 0}} variant="contained">Filter</Button>
    <Button sx={{background: "#00aeae", borderRadius: 0}} variant="contained">Add</Button>
    </Stack>
    <Box sx={{mt : 2}}>
    <Paper>
      <Table style={{ minWidth: 400 , color:"white"}}>
        <TableHead>
          <TableRow style={{ background: '#1c96c5', color: 'white' }}>
            <TableCell style={tableCellStyle}>Image</TableCell>
            <TableCell style={tableCellStyle}>Name</TableCell>
            <TableCell style={tableCellStyle}>Slug</TableCell>
            <TableCell style={tableCellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={tableCellStyle}>Image1</TableCell>
            <TableCell style={tableCellStyle}>Name1</TableCell>
            <TableCell style={tableCellStyle}>Slug1</TableCell>
            <TableCell style={tableCellStyle}><Button sx={{color:"black"}}>Edit</Button> | <Button sx={{color:"black"}}> Delete</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={tableCellStyle}>Image2</TableCell>
            <TableCell style={tableCellStyle}>Name2</TableCell>
            <TableCell style={tableCellStyle}>Slug2</TableCell>
            <TableCell style={tableCellStyle}><Button sx={{color:"black"}}>Edit</Button> | <Button sx={{color:"black"}}> Delete</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={tableCellStyle}>Image3</TableCell>
            <TableCell style={tableCellStyle}>Name3</TableCell>
            <TableCell style={tableCellStyle}>Slug3</TableCell>
            <TableCell style={tableCellStyle}><Button sx={{color:"black"}}>Edit</Button> | <Button sx={{color:"black"}}> Delete</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  
    
</Box>
</Box>
    </Container>
  )
}
