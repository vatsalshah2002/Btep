import React, { useEffect } from "react";
import { Grid, TextField, Button, Box, Snackbar, Alert, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch=useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt=localStorage.getItem("jwt");

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
  
  },[jwt])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userData={
            email: data.get("email"),
            password: data.get("password")
            
          }
         dispatch(register(userData))
    }
    return (
        <div className="">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
             
            
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              
            <Grid item xs={12}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Role"
              name="role"
            >
              <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
            </Select>
          </FormControl>
            </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                  autoComplete="given-name"
                  type="password"
                />
              </Grid>
    
              <Grid item xs={12}>
                <Button
                  className="bg-[#9155FD] w-full"
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{padding:".8rem 0"}}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
    
    <div className="flex justify-center flex-col items-center">
         <div className="py-3 flex items-center ">
            <p className="m-0 p-0">if you have don't have account ?</p>
            <Button onClick={()=> navigate("/register")} className="ml-5" size="small">
              Register
            </Button>
          </div>
    </div>
    
    
         
        </div>
    );

}

export default LoginForm;