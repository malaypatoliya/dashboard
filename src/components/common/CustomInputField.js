import MySelect from './MySelect'
import MyText from './MyText'

const CustomInputField = ({ type, ...rest }) => {
    switch (type) {
        case 'text':
            return <MyText type='text' {...rest} />
        case 'email':
            return <MyText type='email' {...rest} />
        case 'password':
            return <MyText type='password' {...rest} />
        case 'number':
            return <MyText type='number' {...rest} />
        case 'date':
            return null
        case 'select':
            return <MySelect {...rest} />
        case 'checkbox':
            return null
        case 'radio':
            return null
        case 'textarea':
            return null
        case 'file':
            return null
        default:
    }
}

export default CustomInputField