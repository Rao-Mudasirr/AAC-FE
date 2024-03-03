import { useForm } from 'react-hook-form';
import { FormProvider, RHFDatePicker } from '@/components/ReactHookForm';

import { Box } from '@mui/material';

import CommonDrawer from '@/components/CommonDrawer';

const RestoreFilterDrawer = ({ open, onClose }: any) => {
  const methods = useForm({});

  return (
    <CommonDrawer
      isDrawerOpen={open}
      onClose={onClose}
      footer
      isOk
      okText="Apply"
      title="Filter"
    >
      <FormProvider methods={methods}>
        <Box sx={{ my: '20px' }}>
          <RHFDatePicker name="startDate" fullWidth label="Start Date" />
        </Box>
        <RHFDatePicker name="closeDate" fullWidth label="Close Date" />
      </FormProvider>
    </CommonDrawer>
  );
};

export default RestoreFilterDrawer;
