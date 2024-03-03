import { Box, Grid } from '@mui/material';
import { FormProvider } from '@/components/ReactHookForm';
import CommonDrawer from '@/components/CommonDrawer';
import { addNoteFields } from '../Notes.data';

const AddNote = ({
  isDrawerOpen,
  onClose,
  methods,
  onSubmit,
  isLoading,
}: any) => {
  const formFields = addNoteFields();

  return (
    <CommonDrawer
      isDrawerOpen={isDrawerOpen}
      onClose={onClose}
      title={'Add Note'}
      okText={'Save'}
      isOk={true}
      submitHandler={onSubmit}
      footer
      isLoading={isLoading}
    >
      <Box sx={{ pt: 2 }}>
        <FormProvider methods={methods}>
          <Grid container spacing={4}>
            {formFields?.map((item: any) => (
              <Grid item xs={12} md={item?.md} key={item?.id}>
                <item.component {...item?.componentProps} size={'small'}>
                  {item?.componentProps?.select
                    ? item?.options?.map((option: any) => (
                        <option key={option?.value} value={option?.value}>
                          {option?.label}
                        </option>
                      ))
                    : null}
                </item.component>
              </Grid>
            ))}
          </Grid>
        </FormProvider>
      </Box>
    </CommonDrawer>
  );
};

export default AddNote;
