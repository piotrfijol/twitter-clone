import { Avatar, Box, BoxProps } from "@mui/material"
import { UserDisplayName } from "./UserDisplayName"
import { UserName } from "./UserName"

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
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <UserDisplayName text={'Nick Name'} />
                <UserName text={'nickname123'} />
            </Box>
        </Box>
    </>
  )
}
