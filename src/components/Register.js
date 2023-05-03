import { Container, Grid, TextField, Box, Button, Typography, Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MuiFileInput } from 'mui-file-input'
import CustomInputField from './common/CustomInputField';

const Register = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            company_primary_email: '',
            website: '',
            contact_number: '',
            registration_id: '',
            owner_id: '',
            country: '',
            state: '',
            description: '',
            company_color_code: '',
            // company_logo: null
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Must be 3 characters or More')
                .required('Required'),
            company_primary_email: Yup.string()
                .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 'Invalid Email')
                .required('Required'),
            website: Yup.string()
                .required('Required')
                .matches(/^(ftp|http|https):\/\/[^ "]+$/, "Invalid URL")
                .min(3, 'Must be 3 characters or More'),
            contact_number: Yup.string()
                .matches(/^[0-9]{10}$/, 'Invalid Mobile Number')
                .required('Required'),
            registration_id: Yup.string()
                .required('Required'),
            owner_id: Yup.string()
                .required('Required'),
            country: Yup.string()
                .required('Required'),
            state: Yup.string()
                .required('Required'),
            description: Yup.string()
                .required('Required'),
            company_color_code: Yup.string()
                .required('Required'),
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // handle file upload
    const handleFileUpload = (event) => {
        formik.setFieldValue('company_logo', event.target.files[0]);
    }

    return (
        <>
            <Container >
                <Box sx={{
                    borderRadius: '10px',
                    padding: '80px 60px',
                    maxWidth: '650px',
                    // maxWidth: "md", // 720px
                    margin: '100px auto',
                    backgroundColor: 'var(--my-form-bg)',
                    boxShadow: '0 6px 7px -4px #8888880f, 0 11px 15px 1px #8888880b, 0 4px 20px 3px #88888809'
                }}>
                    <form>
                        <Grid container style={{ rowGap: '20px' }} >
                            {/* Form title and subtitle */}
                            <Grid item xs={12}>
                                <Typography variant='h4' sx={{ mb: 2, fontWeight: 'bold' }} >
                                    Assessment App
                                </Typography>
                                <Typography variant='body1' sx={{ mb: 2, fontWeight: 'bold' }} >
                                    Get started with your Free plan.
                                </Typography>
                            </Grid>

                            <Grid container spacing={2}>
                                {/* Company Name */}
                                <Grid item sm={6} xs={12}>
                                    <CustomInputField type='text' label='company name' id='name' name='name' formik={formik} />
                                </Grid>

                                {/* Company Primary Email */}
                                <Grid item sm={6} xs={12}>
                                    <CustomInputField type='email' label='company primary email' id='company_primary_email' name='company_primary_email' formik={formik} />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                {/* Website */}
                                <Grid item sm={6} xs={12}>
                                    <CustomInputField type='text' label='website' id='website' name='website' formik={formik} />
                                </Grid>

                                {/* Contact Number */}
                                <Grid item sm={6} xs={12}>
                                    <CustomInputField type='text' label='contact number' id='contact_number' name='contact_number' formik={formik} />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                {/* Registration Id */}
                                <Grid item sm={6} xs={12}>
                                    <CustomInputField type='text' label='registration id' id='registration_id' name='registration_id' formik={formik} />
                                </Grid>

                                {/* Owner Id */}
                                <Grid item sm={6} xs={12}>
                                    <CustomInputField type='text' label='owner id' id='owner_id' name='owner_id' formik={formik} />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                {/* Country */}
                                <Grid item sm={6} xs={12}>
                                    <CustomInputField type='select' label='country' id='country' name='country' formik={formik} options={["India", "US"]} />
                                </Grid>

                                {/* State */}
                                <Grid item sm={6} xs={12}>
                                    <CustomInputField type='select' label='state' id='state' name='state' formik={formik} options={['Gujarat', 'Delhi']} />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                {/* description */}
                                <Grid item sm={4} xs={12}>
                                    <CustomInputField type='text' label='description' id='description' name='description' formik={formik} />
                                </Grid>

                                {/* company color code */}
                                <Grid item sm={4} xs={12}>
                                    <CustomInputField type='text' label='company color code' id='company_color_code' name='company_color_code' formik={formik} />
                                </Grid>

                                {/* file upload company logo */}
                                {/* <Grid item sm={4} xs={12}>
                                    <MuiFileInput
                                        sx={inputFieldFocusStyle}
                                        label='company logo'
                                        fullWidth
                                        id='company_logo'
                                        name='company_logo'
                                        // value={formik.values.company_logo}
                                        onChange={(event) => {handleFileUpload(event)}}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.company_logo && Boolean(formik.errors.company_logo)}
                                        helperText={formik.touched.company_logo && formik.errors.company_logo}
                                    />
                                </Grid> */}
                            </Grid>

                            {/* already have an account */}
                            <Grid item xs={12}>
                                <Typography variant='body1' sx={{ mb: 0, color: 'var(--my-text-color)' }} >
                                    Already have an account? <Button variant='text' style={{ color: 'var(--my-main-color)' }} sx={{ p: 0, m: 0 }} onClick={() => navigate('/login')} >LOG IN </Button>
                                </Typography>
                            </Grid>

                            {/* create new company */}
                            <Grid item xs={0} />
                            <Grid item xs={12}>
                                <Button
                                    variant='contained'
                                    size='medium'
                                    style={{ backgroundColor: 'var(--my-main-color)' }}
                                    sx={{ width: '100%', mt: 0, p: 1 }}
                                    type='submit' onClick={formik.handleSubmit}
                                >
                                    CREATE NEW ACCOUNT
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Box>
            </Container >
        </>
    )
}

export default Register