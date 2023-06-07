import { Avatar, Box, BoxProps, Typography } from "@mui/material"

interface UserProfileProps extends BoxProps{
    direction?: "row" | "column" | "row-reverse" | "column-reverse"
}

export const UserProfile = ({direction = "row", sx, ...restProps} : UserProfileProps) => {
  return (
    <>
        <Box 
            sx={{
                ...sx,
                display: 'inline-flex',
                flexDirection: direction,
                alignItems: direction === 'row' ? 'center' : "none",
                rowGap: 1,
                columnGap: 2
            }}
            {...restProps}
        >
            <Avatar src="" />
            <Box>
                <Typography
                sx={{
                    fontWeight: 800
                }}
                >Full Name</Typography>
                <Typography
                sx={{
                    fontWeight: 300
                }}>@nickname123</Typography>
            </Box>
        </Box>
    </>
  )
}
