import { Typography, TypographyProps } from '@mui/material'

interface UserNameProps extends TypographyProps{
    text: string
}

export const UserName = ({ text, ...restProps }: UserNameProps) => {
  return (                
    <Typography
        sx={{
            fontWeight: 300
        }}
        component="span"
        {...restProps}
    >
        {'@' + text}
    </Typography>
  )
}
