import { Checkbox, Typography } from '@mui/material';

export const allTabTableData: any = [
  {
    id: 1,
    subjectName: `Business consulting opportunities for students`,
    visibleTo: 'Everyone',
    publishedDate: 'Mar 26 , 2023',
    createdBy: 'Wade Warren',
    openRate: '5 %',
    lastUpdated: '45 Minutes Ago',
  },
  {
    id: 2,
    subjectName: `Scheduling a meeting for new Internees`,
    visibleTo: 'Everyone',
    publishedDate: 'Mar 26 , 2023',
    createdBy: 'Wade Warren',
    openRate: '5 %',
    lastUpdated: '20 Minutes Ago',
  },
  {
    id: 3,
    subjectName: `Style guide for online app store`,
    visibleTo: 'Everyone',
    publishedDate: 'Mar 26 , 2023',
    createdBy: 'Wade Warren',
    openRate: '5 %',
    lastUpdated: '10 Minutes Ago',
  },
  {
    id: 4,
    subjectName: `Inventory overview discussion`,
    visibleTo: 'Everyone',
    publishedDate: 'Mar 26 , 2023',
    createdBy: 'Wade Warren',
    openRate: '5 %',
    lastUpdated: '10 Minutes Ago',
  },
  {
    id: 5,
    subjectName: `Commerce integration system revamp`,
    visibleTo: 'Everyone',
    publishedDate: 'Mar 26 , 2023',
    createdBy: 'Wade Warren',
    openRate: '5 %',
    lastUpdated: '10 Minutes Ago',
  },
  {
    id: 6,
    subjectName: `Document activity logs`,
    visibleTo: 'Everyone',
    publishedDate: 'Mar 26 , 2023',
    createdBy: 'Devon Lane',
    openRate: '5 %',
    lastUpdated: '10 Minutes Ago',
  },
];

export const columns: any = [
  {
    accessorFn: (row: any) => row?.id,
    id: 'id',
    cell: (info: any) => <Checkbox color="primary" name={info?.getValue()} />,
    header: <Checkbox color="primary" name="id" />,
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row?.subjectName,
    id: 'subjectName',
    cell: (info: any) => (
      <Typography variant="body3" fontWeight={500}>
        {info?.getValue()}
      </Typography>
    ),
    header: 'Subject',
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.visibleTo,
    id: 'visibleTo',
    isSortable: true,
    header: 'Visible To',
    cell: (info: any) => info?.getValue(),
  },
  {
    accessorFn: (row: any) => row?.publishedDate,
    id: 'publishedDate',
    isSortable: true,
    header: 'Published Date',
    cell: (info: any) => info?.getValue(),
  },
  {
    accessorFn: (row: any) => row?.createdBy,
    id: 'createdBy',
    isSortable: true,
    header: 'Created By',
    cell: (info: any) => info?.getValue(),
  },
  {
    accessorFn: (row: any) => row?.openRate,
    id: 'openRate',
    isSortable: true,
    header: 'Open Rate',
    cell: (info: any) => (
      <Typography variant="body3" fontWeight={500}>
        {info?.getValue()}
      </Typography>
    ),
  },
  {
    accessorFn: (row: any) => row?.lastUpdated,
    id: 'lastUpdated',
    isSortable: true,
    header: 'Last Updated',
    cell: (info: any) => info?.getValue(),
  },
];
