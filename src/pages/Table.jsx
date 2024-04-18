import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


const Table = () => {
  return (
    <Container sx={{display: "flex", justifyContent: "center"}}>
        <Box sx={{width: "80%"}}>
            <Stack spacing={2} direction="row" sx={{mt : 5}}>
                
                    
               
      <Button sx={{width: "100%", background: "#00aeae",borderRadius: 0}} variant="contained">Contained</Button>
      <Button sx={{width: "100%", backgroundColor: "gray" ,borderRadius: 0}} variant="contained">Contained</Button>
    </Stack>
    <Stack spacing={2} direction="row" sx={{mt : 5}}>
    <Button sx={{background: "#00aeae", borderRadius: 0}} variant="contained">Refresh</Button>
    <Button sx={{background: "#00aeae", borderRadius: 0}} variant="contained">Filter</Button>
    <Button sx={{background: "#00aeae", borderRadius: 0}} variant="contained">Add</Button>
    </Stack>
    <Box sx={{mt : 2}}>

  
        <table border={1} style={{width: "100%",height: "170px"}}>
  <tr style={{ background: "blue"}}>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
</Box>
</Box>
    </Container>
  )
}

export default Table