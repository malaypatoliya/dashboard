import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const MySelect = ({ name, label, formik, options, ...rest }) => {

    const inputFieldFocusStyle = {
        // when input is focused 
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--my-main-color)',
        },
        // when input is hovered
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--my-main-color)',
        },
        // when input is focused label color change
        '& .MuiInputLabel-outlined.Mui-focused': {
            color: 'var(--my-main-color)',
        },
    }

    return (
        <FormControl sx={inputFieldFocusStyle} fullWidth>
            <InputLabel id={`${name}-label`}>{label}</InputLabel>
            <Select
                labelId={`${name}-label`}
                label={label}
                variant='outlined'
                id={name}
                name={name}
                fullWidth
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                {...rest}
            >
                {
                    options && options.length > 0 ?
                        options.map((option, index) => (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        )) : <MenuItem value=''>option not provided</MenuItem>
                }
            </Select>
            <FormHelperText style={{ color: "#d32f2f" }}>{formik.touched[name] && formik.errors[name]}</FormHelperText>
        </FormControl>
    )
}

export default MySelect