import { Container, Grid, TextField, Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            if (values.username === 'admin' && values.password === 'admin') {
                navigate('/')
            } else {
                toast('Invalid Credentials')
            }
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('username is Required')
                .min(5, 'Must be 5 characters or more'),
            password: Yup.string()
                .required('password is Required')
                .min(5, 'Must be 5 characters or more')
        })
    });

    return (
        <>
            <Container >
                <Box sx={{
                    border: '1px solid lightgray',
                    borderRadius: '10px',
                    padding: '50px',
                    maxWidth: '500px',
                    margin: '100px auto',
                    backgroundColor: 'white'
                }}>
                    <form>
                        <Grid container style={{ rowGap: '20px' }} >
                            <Grid item xs={12}>
                                <Typography variant='h4' style={{ textAlign: 'center' }} >
                                    Login
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='standard'
                                    type='text'
                                    size='small'
                                    label='Username'
                                    fullWidth
                                    id="username"
                                    name='username'
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.username && formik.errors.username}
                                    helperText={formik.touched.username && formik.errors.username}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant='standard'
                                    type='password'
                                    size='small'
                                    label='Password'
                                    fullWidth
                                    id="password"
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && formik.errors.password}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>

                            <Grid item xs={4} />
                            <Grid item xs={4}>
                                <Button variant='contained' sx={{ width: '100%', mt: 2 }} type='submit' onClick={formik.handleSubmit} >Login</Button>
                            </Grid>

                        </Grid>
                    </form>
                </Box>
            </Container>
        </>
    )
}

export default Login