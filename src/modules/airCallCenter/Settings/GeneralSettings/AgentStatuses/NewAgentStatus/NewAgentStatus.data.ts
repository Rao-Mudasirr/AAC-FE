import { RHFSelect, RHFTextField } from '@/components/ReactHookForm';

import * as Yup from 'yup';
export const newAgentStatusValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required('Field is Required'),
  emoji: Yup.string().trim().required('Field is Required'),
});

export const newAgentStatusDefaultValues = {
  name: '',
  emoji: '',
};

export const newAgentStatusFields = [
  {
    id: 'name',
    md: 12,
    component: RHFTextField,
    componentProps: {
      name: 'name',
      label: 'Status Name',
    },
  },
  {
    id: 'emoji',
    md: 12,
    component: RHFSelect,
    componentProps: {
      name: 'emoji',
      label: 'Emoji',
      select: true,
    },
    options: [
      { value: 'SALES', label: 'Sales' },
      { value: 'MARKETING', label: 'Marketing' },
      { value: 'SERVICES', label: 'Services' },
      { value: 'OPERATIONS', label: 'Operations' },
      { value: 'LOYALTY_PROGRAM', label: 'Loyalty Program' },
    ],
  },
];
