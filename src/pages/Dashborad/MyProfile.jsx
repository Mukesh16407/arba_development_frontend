import { Button, Divider, Typography,Dialog, DialogTitle, DialogContent, DialogActions, TextField  } from "@mui/material"
import { useRef, useState } from "react";
import { TermsAndConditions } from "../../components/TearmsAndConditions";


export const MyProfile = () => {
    const fileInputRef = useRef(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [termAndCondition, setTermAndCondition] = useState(false)
    const [profileData, setProfileData] = useState({
        fullName: 'User 1',
        email: 'user1@example.com',
        userName: 'RjCoder',
        password: '********',
        avatar: 'https://example.com/avatar.jpg'
      });
      const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [oldPassword, setOldPassword] = useState('asdfg');

  const handleChangeTermAndCondition =()=>{
    setTermAndCondition(true)
  }


    const handleUpdateProfile = () => {
        setOpenDialog(true);
      };
    
      const handleCloseDialog = () => {
        setOpenDialog(false);
      };
    
      const handleProfileFieldChange = (fieldName, value) => {
        setProfileData((prevProfileData) => ({
          ...prevProfileData,
          [fieldName]: value
        }));
      };
    
      const handlePasswordDialogOpen = () => {
        setOpenPasswordDialog(true);
      };
    
      const handlePasswordDialogClose = () => {
        setOpenPasswordDialog(false);
      };
    
      const handleOldPasswordChange = (event) => {
        setOldPassword(event.target.value);
      };

      const handlePasswordChange = () => {
        console.log('Changing password:', oldPassword);
    
        // Close password change dialog
        setOpenPasswordDialog(false);
      };


    const handleProfilePictureClick = () => {
        fileInputRef.current.click();
      };

      const handleFileInputChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {

          const reader = new FileReader();
          reader.onload = () => {
            document.getElementById('profileImage').src = reader.result;
          };
          reader.readAsDataURL(file);
        }
      };



  return (
    <div style={{ width:"30%", display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20,margin:"auto" }}>
        <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileInputChange} />
      <img id="profileImage"
src="https://akm-img-a-in.tosshub.com/indiatoday/images/author/8.%20Aishwarya%20Rai.jpg?VersionId=w9lPTMiJ2sg1CfL4LKaOqIy.3CN_Nspi" alt="image" width={"100px"}
onClick={handleProfilePictureClick}/>
      <Typography variant="h5">{profileData.fullName}</Typography>
      <Typography variant="body1">{profileData.userName}</Typography>
      <Button variant="contained" sx={{ mt: 2, background: "#00aeae",  }} onClick={handleUpdateProfile}>
        Update Profile
      </Button>
      <Divider sx={{ width: '100%', marginTop:1, marginBottom: 5,  borderWidth: '1px' }} />
     
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
        <Button variant="contained"sx={{ background: "#00aeae",  }}  onClick={handleChangeTermAndCondition}>See T&C</Button>
        <Button variant="contained"sx={{ background: "#00aeae",  }} onClick={handlePasswordDialogOpen}>Change Password</Button>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Update Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="Full Name"
            value={profileData.fullName}
            onChange={(e) => handleProfileFieldChange('fullName', e.target.value)}

            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Email"
            value={profileData.email}
            onChange={(e) => handleProfileFieldChange('email', e.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="User Name"
            value={profileData.userName}
            fullWidth
            variant="outlined"
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="Password"
            value={profileData.password}
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
            InputProps={{ readOnly: true }}
          />
          
          <TextField
            label="Avatar"
            value={profileData.avatar}
            fullWidth
            variant="outlined"
            margin="normal"
            InputProps={{ readOnly: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="contained"sx={{ background: "#00aeae",  }}>Cancel</Button>
          <Button variant="contained"sx={{ background: "#00aeae",  }} onClick={handleCloseDialog}>Save</Button>
        </DialogActions>
      </Dialog>

       {/* Dialog for changing password */}
       <Dialog open={openPasswordDialog} onClose={handlePasswordDialogClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            label="Old Password"
            type="password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          {/* Add new password and confirm password fields */}
        </DialogContent>
        <DialogActions>
          <Button variant="contained"sx={{ background: "#00aeae",  }} onClick={handlePasswordDialogClose}>Cancel</Button>
          <Button variant="contained"sx={{ background: "#00aeae",  }} onClick={handlePasswordChange}>Change Password</Button>
        </DialogActions>
      </Dialog>

      {/*Dialog for TermAnd Conditin */}
      {termAndCondition && (
        <TermsAndConditions/>
      )}
    </div>
  )
}
