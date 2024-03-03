import { Grid, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';
import { FormProvider } from '@/components/ReactHookForm';
import { yupResolver } from '@hookform/resolvers/yup';
import CommonDrawer from '@/components/CommonDrawer';
import {
  addContactFields,
  validationSchema,
  initValues,
} from './FormCreateProduct.data';
import { usePostProductMutation } from '@/services/airSales/quotes';

const FormCreateProduct = ({ open, onClose }: any) => {
  const [postProduct] = usePostProductMutation();

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = async (values: any) => {
    try {
      await postProduct({ body: values })?.unwrap();
      enqueueSnackbar('Ticket Updated Successfully', {
        variant: 'success',
      });
    } catch (err: any) {
      enqueueSnackbar(err?.data?.message, {
        variant: 'error',
      });
    }
  };

  return (
    <CommonDrawer
      title="Create Product"
      okText="Save"
      isDrawerOpen={open}
      onClose={onClose}
      isOk={true}
      cancelText={'Cancel'}
      footer={true}
      submitHandler={handleSubmit(onSubmit)}
    >
      <Box sx={{ pt: '27px' }}>
        <FormProvider methods={methods}>
          <Grid container spacing={'22px'}>
            {addContactFields?.map((item) => (
              <Grid item xs={12} key={item.id}>
                <item.component {...item?.componentProps} size={'small'}>
                  {item?.componentProps?.select &&
                    item?.options?.map((option: any) => (
                      <option key={option?.value} value={option?.value}>
                        {option?.label}
                      </option>
                    ))}
                </item.component>
              </Grid>
            ))}
          </Grid>
        </FormProvider>
      </Box>
    </CommonDrawer>
  );
};

export default FormCreateProduct;
