import { AlertModalCloseIcon } from '@/assets/icons';
import { Box, Typography, Dialog } from '@mui/material';

const UserActionModal = ({
  open,
  handleClose,
  children,
  selectedItem,
}: any) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      maxWidth={'sm'}
      fullWidth
    >
      <Box
        boxShadow={2}
        sx={{
          width: '100%',
          borderRadius: '10px',
          border: '1px solid grey.700',
          padding: '24px',
          background: 'custom.white',
          margin: 'auto',
        }}
      >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          marginBottom={'16px'}
          alignItems={'center'}
        >
          <Typography variant="h5">{selectedItem}</Typography>
          <AlertModalCloseIcon
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
          />
        </Box>
        {children}
      </Box>
    </Dialog>
  );
};

export default UserActionModal;
