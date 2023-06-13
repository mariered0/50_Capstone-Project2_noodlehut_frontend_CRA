import {Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const CheckoutMessage = ({ isDialogOpen, setIsDialogOpen }) => {

  const handleClose = (event, reason) => {
    if (event && reason === 'backdropClick') setIsDialogOpen(false);
  }

  return (
    <div>
      <Dialog open={isDialogOpen}
              onClose={(event, reason) => {handleClose(event, reason)}}
              aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
        You must sign in to checkout.
        </DialogTitle>
        <DialogActions>
          <Button href="/menu" size="small" variant="outlined">Continue Shopping</Button>
          <Button href="/signin" autoFocus size="small" variant="outlined">
            Sign In to Checkout
          </Button>
        </DialogActions>

      </Dialog>
    </div>

  )
}

export default CheckoutMessage;






