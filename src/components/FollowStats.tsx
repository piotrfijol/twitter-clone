import { Box, Typography } from "@mui/material"
import { StyledLink } from "./StyledLink"
import { TypographyProps } from "@mui/material";

interface StyledLabelProps extends TypographyProps {
    children?: React.ReactNode
}

const StyledLabel = (props: StyledLabelProps) => (
    <Typography 
        sx={{
            fontWeight: 200,
            color: "text.secondary",
            marginLeft: .5    
        }}
        component={"span"}
        {...props}
    >
        {props.children}
    </Typography>
);



export const FollowStats = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            gap: 1.5
        }}
    >
        <StyledLink to="">
            34
            <StyledLabel>Following</StyledLabel>
        </StyledLink>
        <StyledLink to="">
            16
            <StyledLabel>Followers</StyledLabel>
        </StyledLink>
    </Box>
  )
}
