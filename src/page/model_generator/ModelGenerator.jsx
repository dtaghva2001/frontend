import {useEffect, useState} from "react";
import { Button, Grid, TextField, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {urls} from "../../urls/urls";
import { Freeze } from 'react-freeze';

const FieldAndValue = ({ onVarnameChange, onValueChange, id }) => {
    //when variable name is changed, calls the onVarnameChange methode
    function whenVarNameChange(event) {
        onVarnameChange(id, event.target.value);
    }

    //when value is changed calls the onValueChange methode
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
    const [programmingLang, setProgrammingLang] = useState("")


    useEffect(() => {
        console.log(variables)
        }
        ,[variables]
    )
    const navigate = useNavigate();
    function addField() {
        setVariables([...variables, { name: '', type: '' }]);
    }
    async function submitModel() {
        const myProgrammingLang = programmingLang
        let url
        switch (myProgrammingLang)
        {
            case "python":
                url = urls.generate_model_django;
                break;
            case "php":
                url = urls.generate_model_php;
                break;
            default:
                url = urls.generate_model_express;
                break;
        }

        const myObj = {
            "name": modelName,
            "variables": variables
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myObj)
        })
        console.log(`res: ${response}`)

        console.log(response.status)
        const responseJSON = await response.json();
        console.log(responseJSON)
        // console.log(JSON.parse(await response.json()))
        // navigate(urls.get_response, {})
        // navigate(urls.get_response())
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
            <Grid item xs={12}>
                <Paper>programming language</Paper>
                <TextField onChange={(event) => setProgrammingLang(event.target.value)}/>
            </Grid>
            {variables.map((object, index) => (
                <FieldAndValue key={index} onVarnameChange={changVarname} onValueChange={changeValue} id={index} />
            ))}
            <Button fullWidth onClick={submitModel}>
                Submit
            </Button>
        </Grid>
    );
};

export default ModelGenerator;
