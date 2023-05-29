import { Box, Alert } from "@mui/material";

const SuccessMessage = ({ content }) => {

    return (
        <Box mt={3} mb={2}>
        <Alert severity="success">
            {content}
        </Alert>
        </Box>
    )
}

export default SuccessMessage;