import React from "react";
import { Link } from "react-router-dom";
import { login } from "../services/authServices";
import { Paper } from "@material-ui/core";
import Form from "./common/Form";

class Login extends Form {
    state = { data: { email: "", password: "" }, errors: {} };

    doSubmit = async () => {
        try {
            const { data } = await login(this.state.data);
            window.localStorage.setItem("token", data);
            window.location = '/';
        } catch (error) {
            const errors = { ...this.state.errors };
            errors.email = error.response.data;
            errors.password = error.response.data;
            this.setState({ errors });
        }
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="full_screen flex column"
            >
                <Paper className="form" elevation={3}>
                    <div className="form_heading">Login</div>
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderSubmitBtn("Login")}
                </Paper>
                <div style={{ margin: "10px 0" }}>
                    Don't have an account? <Link to='/signup'>Signup</Link>
                </div>
            </form>
        );
    }
}

export default Login;