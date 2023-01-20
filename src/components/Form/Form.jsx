import React from 'react'
import styles from './Form.module.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (inputs) => {
    let errors = {};

    if (!regexEmail.test(inputs.email)) {
        errors.email = 'Debe ser un correo electrónico';
    }
    if ((!inputs.password) || (inputs.password.length < 6) || (inputs.password > 10)) {
        errors.password = 'Se requiere una password con al menos un número y entre 6 y 10 caracteres';
    }

    return errors;
}

export default function Contact() {

    const [inputs, setInputs] = React.useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = React.useState({
        email: '', // 'Debe ser un correo electrónico'
        password: '' // 'Se requiere una pass'
    })

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })

        setErrors(validate({
            ...inputs,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!Object.values(errors).length) {

            alert('ingreso correcto');
            setInputs({
                email: '',
                password: ''
            })
            setErrors({
                email: '',
                password: ''
            })
        } else {
            alert("Debe llenar todos los campos")
        }
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit} >
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" placeholder='Escribe tu email...' value={inputs.email} autocomplete="off" onChange={handleChange} className={errors.email && 'warning'} />
                {errors.email && <p className='danger' >{errors.email}</p>}
                <br />
                <br />

                <label htmlFor="password">Password:</label>
                <input name="password" placeholder='Escribe tu contraseña...' type='password' value={inputs.password} autocomplete="off" onChange={handleChange} className={errors.password && 'warning'} ></input>
                {errors.password && <p className='danger' >{errors.password}</p>}
                <br />
                <br />

                <button className={styles.button} type='submit' >Enviar</button>
                <br />
            </form >
        </>
    )
}

