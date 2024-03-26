import React, { useRef } from "react";
import useStyles from "./styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Snackbar, styled } from "@material-ui/core";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormValidation } from "./FormValidation";
import { Formik, Field, Form } from "formik";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

import { Button, Typography, TextField, FormGroup, Alert } from "@mui/material";

const FormDemo = () => {
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setFileName("");
  };

  const handleClose = () => setOpen(false);
  const classes = useStyles();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    age: "",
  };

  const fileRef = useRef(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    console.log(file);
    const finalFileName = file.name;
    setOpenSnackBar(true);
    if (finalFileName.length > 10) {
      const truncFileName = finalFileName.substring(0, 15) + "...";
      setFileName(truncFileName);
    } else {
      setFileName(file.name);
    }
  };
  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        This is a Demo form
      </Typography>
      <br />
      <div>
        <Formik initialValues={initialValues} validationSchema={FormValidation}>
          {({ errors }) => (
            <Form>
              <FormGroup className={classes.formStyle}>
                <TextField
                  id="name"
                  name="name"
                  required
                  autoComplete="Name"
                  label="Name"
                  variant="outlined"
                />
                <br />
                {errors.name && <small>{errors.name}</small>}
                <Field
                  id="email"
                  name="email"
                  required
                  label="Email"
                  variant="outlined"
                />
                <br />
                {errors.email && <small>{errors.email}</small>}
                <Field
                  id="password"
                  name="password"
                  required
                  label="Password"
                  variant="outlined"
                />
                <br />
                {errors.password && <small>{errors.password}</small>}
                <Field
                  id="Confirm_password"
                  name="Confirm_password"
                  required
                  label="Confirm_password"
                  variant="outlined"
                />
                <br />
                {errors.confirm_password && (
                  <small>{errors.confirm_password}</small>
                )}
                <Field
                  id="age"
                  name="age"
                  required
                  label="Age"
                  variant="outlined"
                />
                <br />
                {errors.age && <small>{errors.age}</small>}
                <FormControl sx={{ mb: "12px", mt: "12px" }}>
                  <FormLabel id="gender">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
                <br />

                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  sx={{ mb: "12px", mt: "12px" }}
                >
                  {fileName ? fileName : "Upload File"}
                  <VisuallyHiddenInput
                    ref={fileRef}
                    type="file"
                    onChange={handleFileChange}
                  />
                </Button>
                <Snackbar
                  autoHideDuration={5000}
                  open={openSnackBar}
                  onClose={handleCloseSnackBar}
                  anchorOrigin={{vertical:"bottom",horizontal:"left"}}
                >
                  <Alert
                    onClose={handleCloseSnackBar}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >File Uploaded Successfully!
                  </Alert>
                </Snackbar>
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mb: "1px", mt: "8px" }}
                  onClick={handleOpen}
                  color="success"
                >
                  Submit
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Are you sure you want to submit
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <Button
                        variant="contained"
                        sx={{ mr: "20px" }}
                        onClick={handleClose}
                        color="success"
                      >
                        Yes
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ mr: "20px" }}
                        onClick={handleClose}
                        color="error"
                      >
                        No
                      </Button>
                    </Typography>
                  </Box>
                </Modal>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormDemo;
