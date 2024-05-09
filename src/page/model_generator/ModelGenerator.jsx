import { useState } from "react";
import { Button, Grid, TextField, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FieldAndValue = ({ onVarnameChange, onValueChange, id }) => {
    // Handles the variable name change and passes the new value up
    function whenVarNameChange(event) {
        onVarnameChange(id, event.target.value);
    }

    // Handles the type change and passes the new value up
    function whenValueChange(event) {
        onValueChange(id, event.target.value);
    }

    return (
        <>
            <Grid item xs={6}>
                <TextField fullWidth label="Variable Name" variant="outlined" onChange={whenVarNameChange} />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth label="Type" variant="outlined" onChange={whenValueChange} />
            </Grid>
        </>
    );
};

const ModelGenerator = () => {
    const [modelName, setModelName] = useState("");
    const [variables, setVariables] = useState([{ name: '', type: '' }]);
    const navigate = useNavigate();
    function addField() {
        setVariables([...variables, { name: '', type: '' }]);
    }

    const changVarname = (id, newName) => {
        const newVariables = variables.map((variable, index) => {
            if (index === id) {
                return { ...variable, name: newName };
            }
            return variable;
        });
        console.log(newVariables)
        setVariables(newVariables);
    };


    const changeValue = (id, newValue) => {

        const newVariables = variables.map((variable, index) => {
            if (index === id) {
                return { ...variable, type: newValue };
            }
            return variable;
        });
        setVariables(newVariables);
    };

    return (
        <Grid container alignItems="center" style={{ maxWidth: '60vw', margin: 'auto' }} rowGap={10}>
            <Grid item xs={12}>
                <Paper style={{ padding: '10px', textAlign: 'center' }}>Model Name</Paper>
                <TextField fullWidth value={modelName} onChange={(event) => setModelName(event.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <Button onClick={addField} fullWidth>
                    Add Field
                </Button>
            </Grid>
            {variables.map((object, index) => (
                <FieldAndValue key={index} onVarnameChange={changVarname} onValueChange={changeValue} id={index} />
            ))}
            <Button fullWidth >
                Submit
            </Button>
        </Grid>
    );
};

export default ModelGenerator;
