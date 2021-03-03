import { useState, useEffect } from 'react';
import Axios from 'axios';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setUsernameReg(
            values.username
        );
        setPasswordReg(
            values.password
        );
        setEmailReg(
            values.email
        );
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {

            Axios.post('http://localhost:3001/registered', {
                username: usernameReg,
                email: emailReg,
                password: passwordReg
            }).then((response) => {
                console.log(response);
            });
            callback();
        }
    }, [errors] );
    return { handleChange, values, handleSubmit, errors }
};

export default useForm;