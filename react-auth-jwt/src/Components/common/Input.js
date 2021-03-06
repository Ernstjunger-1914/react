import React from "react";
import { TextField } from "@material-ui/core";

const Input = ({ error, ...rest }) => {
    return (
        <React.Fragment>
            {error ? (
                <TextField
                    {...rest}
                    error
                    helperText={error}
                    size="small"
                    variant="outlined"
                    className="input"
                />
            ) : (
                <TextField
                    {...rest}
                    variant="outlined"
                    size="small"
                    className="input"
                />
            )}
        </React.Fragment>
    );
};

export default Input;