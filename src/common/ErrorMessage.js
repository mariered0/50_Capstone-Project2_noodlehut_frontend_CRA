import { Box, Alert, AlertTitle } from "@mui/material";

const ErrorMessage = ({ error }) => {

    return (
        <Box mt={3} mb={2}>
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
        </Alert>
        </Box>
    )
}

export default ErrorMessage;