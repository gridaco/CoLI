import React, { useState } from "react"
import Head from 'next/head'
import { CodePreview } from "../../components/code-preview"
import TextField from "@material-ui/core/TextField"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button"
export default function ParameterDesignerPage() {

    const [state, setstate] = useState([])
    const handleAddField = () => {
        // setstate(state => [...state, 'newElement'])
    }


    return <div>
        <Head>
            <title>Parameter designer</title>
        </Head>
        <div style={{ padding: 24 }}>
            <TextField label="interface name" />
            {
                state.map((e) => {
                    return <ParameterFieldEdit />
                })
            }
            <CodePreview src={"print('a')"} />
            <Button variant="contained" onClick={handleAddField}>add</Button>
            <div style={{ marginTop: 24 }}>
                <Button variant="contained">Download coli json</Button>
            </div>
        </div>
    </div>
}

function ParameterFieldEdit(props) {
    const [type, setType] = useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setType(event.target.value as string);
    };
    return <div>
        <TextField label="filed name" />
        <TextField label="descipriton" />
        <Select
            labelId="type-select-label"
            id="type-select"
            value={type}
            onChange={handleChange}
        >
            <MenuItem value={'string'}>string</MenuItem>
            <MenuItem value={'number'}>number</MenuItem>
            <MenuItem value={'enum'}>enum</MenuItem>
            <MenuItem value={'bool'}>bool</MenuItem>
            <MenuItem value={'type'}>type</MenuItem>
        </Select>
    </div >
}