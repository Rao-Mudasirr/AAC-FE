import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from '@mui/material';

const useContactList = () => {
  const theme = useTheme();
  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        contactList: Yup.string().required('Field is required'),
      }),
    ),
    defaultValues: {
      contactList: '',
    },
  });
  return {
    theme,
    methods,
  };
};

export default useContactList;
