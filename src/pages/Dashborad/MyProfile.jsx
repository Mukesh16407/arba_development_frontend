import { Button, Divider, Typography } from "@mui/material"


export const MyProfile = () => {
  return (
    <div style={{ width:"30%", display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20,margin:"auto" }}>
      <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/author/8.%20Aishwarya%20Rai.jpg?VersionId=w9lPTMiJ2sg1CfL4LKaOqIy.3CN_Nspi" alt="image" width={"100px"}/>
      <Typography variant="h5">User 1</Typography>
      <Typography variant="body1">user1@example.com</Typography>
      <Button variant="contained" sx={{ mt: 2, background: "#00aeae",  }}>
        Update Profile
      </Button>
      <Divider sx={{ width: '100%', marginTop:1, marginBottom: 5,  borderWidth: '1px' }} />
     
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
        <Button variant="contained"sx={{ background: "#00aeae",  }} >See T&C</Button>
        <Button variant="contained"sx={{ background: "#00aeae",  }}>Change Password</Button>
      </div>
    </div>
  )
}
