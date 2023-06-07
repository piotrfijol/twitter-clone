import { styled } from "@mui/material";
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)(({theme}) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline'
    }
}));