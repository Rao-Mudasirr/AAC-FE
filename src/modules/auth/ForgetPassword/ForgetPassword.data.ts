import { RHFTextField } from '@/components/ReactHookForm';
import * as Yup from 'yup';

export const forgetPasswordValidationSchema = Yup.object().shape({
  ForgetPassword: Yup.string()
    .trim()
    .required('Required field')
    .test('email', 'Invalid email address', function (value) {
      if (value) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
      }
      return true;
    }),
});

const data = {
  email: 'Invalid email address',
};

forgetPasswordValidationSchema
  .validate(data)
  .then(() => {})
  .catch(() => {});

export const forgetPasswordDefaultValues = {
  ForgetPassword: '',
};

export const forgetPasswordDataArray = [
  {
    componentProps: {
      name: 'ForgetPassword',
      label: 'Email',
      fullWidth: true,
      placeholder: 'Enter Email',
      required: true,
    },
    component: RHFTextField,
    md: 12,
  },
];
