import {Autocomplete, Stack, TextField} from "@mui/material";
import {useState} from "react";
const myTypes = ['integer', 'float', 'string']
export const FieldTypeAutoComplete = () => {
    const [myValue, setMyValue] = useState(null)
    return (
        <Stack spacing={2} width='25vh'>
            <Autocomplete options={myTypes} renderInput=
                {(params) =>
                        <TextField {...params} label={'types'}/>}
            value={myValue} onChange={(event, newValue) => {
                setMyValue(newValue)
                //todo why does it show old value in each render?
                alert(myValue)
            }}/>
        </Stack>
    )
}