import { Box, Modal } from "@mui/material";
import React, { useEffect } from "react";
import LoginForm from "./Login";
import RegisterForm from "./Register";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};

const AuthModel = ({ handleClose, open }) => {
    const location = useLocation();
    const { auth } = useSelector((store) => store);
    useEffect(() => {
      if (auth.user) handleClose();
    }, [auth.user]);

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="rounded-md" sx={style}>
                    {location.pathname === "/login" ? (
                        <LoginForm />
                    ) : (
                        <RegisterForm />
                    )}
                </Box>
            </Modal>
        </div>
    )
}

export default AuthModel;