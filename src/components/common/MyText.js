import { TextField } from '@mui/material'

const MyInput = ({ name, label, type, formik, ...rest }) => {

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
        <TextField
            name={name}
            label={label}
            type={type}
            variant="outlined"
            fullWidth
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            sx={inputFieldFocusStyle}
            {...rest}
        />
    )
}

export default MyInput