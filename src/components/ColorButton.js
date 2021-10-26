import {Button, styled} from "@mui/material";

const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText('#e52f23'),
    backgroundColor: '#e52f23',
    '&:hover': {
        backgroundColor: '#ee1123',
    },
    marginBottom: '2rem',
}));

export default ColorButton;