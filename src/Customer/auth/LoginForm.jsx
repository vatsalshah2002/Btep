import React, { useEffect } from "react";
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUser, login } from "../../Redux/Auth/Action";

const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch=useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt=localStorage.getItem("jwt");
  const [openSnackBar,setOpenSnackBar]=useState(false);
  const handleCloseSnakbar=()=>setOpenSnackBar(false);

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
         dispatch(login(userData))
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
    <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
        <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: '100%' }}>
          {auth.error?auth.error:auth.user?"Register Success":""}
        </Alert>
      </Snackbar>
    
         
        </div>
    );

}

export default LoginForm;