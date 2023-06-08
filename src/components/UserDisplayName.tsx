import { Typography, TypographyProps } from "@mui/material"

interface UserDisplayNameProps extends TypographyProps {
    text: string
} 

export const UserDisplayName = ({ text, ...restProps }: UserDisplayNameProps) => {
  return (
    <Typography
        sx={{
            fontWeight: 800
        }}
        component="span"
        {...restProps}
    >
        {text}
    </Typography>
  )
}
