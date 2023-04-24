import { Container, Grid, InputLabel, TextField, Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            if(values.username === 'admin' && values.password === 'admin'){
                navigate('/')
            }else{
                alert('Invalid Credentials')
            }
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is Required')
                .min(5, 'Must be 5 characters or more'),
            password: Yup.string()
                .required('Password is Required')
                .min(5, 'Must be 5 characters or more')
        })
    });

    return (
        <>
            <Container >
                <Box sx={{
                    border: '1px solid lightgray',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '500px',
                    margin: '50px auto'
                }}>
                    <form>
                        <Grid container style={{ gap: '20px' }} >
                            <Grid item xs={12}>
                                <Typography variant='h4' style={{ textAlign: 'center' }} >
                                    Login
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel style={{ marginBottom: '5px', color: 'black' }} >User Name</InputLabel>
                                <TextField
                                    fullWidth
                                    id="username"
                                    name='username'
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.username && formik.touched.username && (
                                        <div style={{ color: 'red', fontSize: '14px', margin: '5px' }}>{formik.errors.username}</div>
                                    )
                                }
                            </Grid>

                            <Grid item xs={12}>
                                <InputLabel style={{ marginBottom: '5px', color: 'black' }} >password</InputLabel>
                                <TextField
                                    fullWidth
                                    id="password"
                                    name='password'
                                    type='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.password && formik.touched.password && (
                                        <div style={{ color: 'red', fontSize: '14px', margin: '5px' }}>{formik.errors.password}</div>
                                    )
                                }
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant='contained' type='submit' onClick={formik.handleSubmit} >Login</Button>
                            </Grid>


                        </Grid>
                    </form>
                </Box>
            </Container>
        </>
    )
}

export default Login