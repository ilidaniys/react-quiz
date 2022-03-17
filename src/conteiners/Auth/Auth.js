import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from "../../component/UI/Button/Button";
import Input from "../../component/UI/Input/Input";

function validateEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
};


class Auth extends Component {

    state = {
        isFormValid: false,
        formControl: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMassage: 'Ведите коректный емейл',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMassage: 'Ведите коректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    validateControl(value, validation){
        if(!validation){
            return true
        }
        let isValid = true

        if (validation.required){
            isValid = value.trim() !== '' && isValid
        }
        if(validation.email){
            isValid = validateEmail(value) && isValid
        }
        if (validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControl = {...this.state.formControl}
        const control = {...formControl[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControl[controlName] = control

        let isFormValid = true
        Object.keys(formControl).forEach(name => {
            isFormValid = formControl[name].valid && isFormValid
        })

        this.setState({
            formControl, isFormValid
        })

    }


    loginHandler() {

    }

    registerHandler() {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    renderInputs() {
        return Object.keys(this.state.formControl).map((controlName, index) => {
            const control = this.state.formControl[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMasage={control.errorMassage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }


    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация!</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        {this.renderInputs()}
                        <Button
                            type='success'
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        > Войти
                        </Button>
                        <Button
                            type='primary'
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                        > Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;