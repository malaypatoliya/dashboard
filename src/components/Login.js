import { Container, Grid, TextField, Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomInputField from './common/CustomInputField';
import MainHeading from './common/MainHeading';
import SubHeading from './common/SubHeading';

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            if (values.username === 'admin' && values.password === 'admin') {
                navigate('/dashboard')
            } else {
                alert('Invalid Credentials')
            }
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required')
                .min(5, 'Must be 5 characters or more'),
            password: Yup.string()
                .required('Required')
                .min(5, 'Must be 5 characters or more')
        })
    });

    return (
        <>
            <Container >
                <Box sx={{
                    borderRadius: '10px',
                    padding: '80px 60px',
                    maxWidth: '500px',
                    margin: '100px auto',
                    backgroundColor: 'var(--my-form-bg)',
                    boxShadow: '0 6px 7px -4px #8888880f, 0 11px 15px 1px #8888880b, 0 4px 20px 3px #88888809'
                }}>
                    <form>
                        <Grid container style={{ rowGap: '20px' }} >
                            {/* Title and subtitle */}
                            <Grid item xs={12}>
                                <MainHeading text='Assessment' />
                                <SubHeading text='We are glad to see you again...' />
                            </Grid>

                            {/* username */}
                            <Grid item xs={12}>
                                <CustomInputField type='text' name='username' label='Username' formik={formik} />
                            </Grid>

                            {/* password */}
                            <Grid item xs={12}>
                                <CustomInputField type='password' name='password' label='Password' formik={formik} />
                            </Grid>

                            {/* Do not have account */}
                            <Grid item xs={12}>
                                <Typography variant='p' sx={{ mb: 0, color: 'var(--my-text-color)' }} >
                                    Don't have an account? <Button variant='text' style={{ color: 'var(--my-main-color)' }} sx={{ p: 0, m: 0 }} onClick={() => navigate('/register')} >Create One Here</Button>
                                </Typography>
                            </Grid>

                            {/* login button */}
                            <Grid item xs={0} />
                            <Grid item xs={12}>
                                <Button
                                    variant='contained'
                                    size='medium'
                                    style={{ backgroundColor: 'var(--my-main-color)' }}
                                    sx={{ width: '100%', mt: 0, p: 1 }}
                                    type='submit' onClick={formik.handleSubmit}
                                >
                                    Login
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Box>
            </Container>
        </>
    )
}

export default Login