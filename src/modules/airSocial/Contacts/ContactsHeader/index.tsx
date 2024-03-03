import { useRouter } from 'next/router';

import { Typography, Box, Button } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

import useContactsHeader from './useContactsHeader';
import CreateContacts from '../CreateContacts';

import { styles } from './ContractsHeader.style';

import { ImportIcon } from '@/assets/icons';
import { AIR_SOCIAL } from '@/routesConstants/paths';

const ContactsHeader = () => {
  const route = useRouter();
  const { isCreateDeal, handleCreateDealOpen } = useContactsHeader();

  return (
    <Box sx={styles?.HeaderStyle}>
      <Box display="flex" alignItems={'center'} gap={'10px'}>
        <Typography variant="h4" sx={styles?.HeaderTypography}>
          Contacts
        </Typography>
      </Box>
      <Box sx={styles?.HeaderChildStyle}>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => route?.push(AIR_SOCIAL?.CONTACTS_IMPORT)}
          startIcon={<ImportIcon />}
          sx={{ height: '35px' }}
        >
          Import
        </Button>
        <Box>
          <Button
            variant="contained"
            onClick={handleCreateDealOpen}
            startIcon={<AddCircle />}
            sx={{ height: '35px' }}
          >
            Create Contact
          </Button>
        </Box>
      </Box>
      <CreateContacts open={isCreateDeal} onClose={handleCreateDealOpen} />
    </Box>
  );
};

export default ContactsHeader;
