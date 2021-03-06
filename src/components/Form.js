import {Box, Grid, MenuItem, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import ColorButton from "./ColorButton";
import {app} from "../feathersClient";
import validator from 'validator';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxWidth: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Form(props) {

    const [status, setStatus] = useState(false);



    const FormGrid = () => {
        const [regions, setRegions] = useState([]);
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [comment, setComment] = useState('');
        const [region, setRegion] = useState('6177ccb64860dd10fca4e841');
        const [emailError, setEmailError] = useState(false);
        const [phoneError, setPhoneError] = useState(false);
        const [emailErrorMessage, setEmailMessage] = useState('');

        useEffect(() => {
            app.service('regions').find().then((result) => {
                console.log(result.data);
                setRegions(result.data);
            })
        }, [])


        const handleRegion = (event) => {
            setRegion(event.target.value);
        };
        const validate = () => {
            let result = true;
            if (validator.isEmail(email)) {
                setEmailError(false);
            } else {
                setEmailMessage('');
                setEmailError(true);
                result = false;
            }
            if (validator.isMobilePhone(phone)) {
                setPhoneError(false);
            } else {
                setPhoneError(true);
                result = false;
            }
            return result;
        }

        const createMember = () => {
            if (validate()) {
                app.service('members').create({
                    name,
                    email,
                    phone,
                    region,
                    comment
                }).then((result) => {
                    setStatus(true);
                }).catch((error) => {
                    if (error.code === 409 && error.errors.email) {
                        setEmailMessage('?????? email ?????? ??????????????????????????????');
                        setEmailError(true);
                    }
                })
            }
        }
        return <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField

                    label="??????"
                    variant="outlined"
                    fullWidth
                    value={name}
                    error={false}
                    onChange={(event) => setName(event.target.value)}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth value={email}
                    error={emailError}
                    helperText={emailError ? emailErrorMessage : null}
                    onChange={(event) => setEmail(event.target.value)}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label="??????????????"
                           variant="outlined"
                           fullWidth
                           value={phone}
                           error={phoneError}
                           onChange={(event) => setPhone(event.target.value)}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    select
                    label="????????????"
                    value={region}
                    onChange={handleRegion}
                    fullWidth
                >
                    {regions.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="??????????????????????" variant="outlined" multiline fullWidth
                    rows={4}
                    value={comment} onChange={(event) => setComment(event.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <ColorButton variant="contained" onClick={createMember}>????????????????????????????????????</ColorButton>
            </Grid>
        </Grid>;
    }

    return <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2" mb={2}>
            ?????????????????????? ???? Dano????????????
        </Typography>
        {
            !status ?
                <FormGrid />
                :
                <div>
                    <Typography variant="h6">???? ?????????????? ????????????????????????????????</Typography>
                    <Typography variant="h6">?????????? ?????? ?????????????????? ?????? ???? ??????????</Typography>
                </div>
        }

    </Box>;
}

export default Form;