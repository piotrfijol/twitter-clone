import { styled } from "@mui/material";
import { Link } from 'react-router-dom'

export const StyledNavLink = styled(Link)(({theme}) => ({
    textDecoration: "none",
    color: theme.palette.text.primary
  }));