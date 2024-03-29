import TanstackTable from '@/components/Table/TanstackTable';
import { AlertModals } from '@/components/AlertModals';
import CustomPagination from '@/components/CustomPagination';

import { ManageDashboardTableData, columns } from './Table.data';
import useTable from './useTable';

const Table = () => {
  const {
    isDeleteModalOpen,
    handleCloseDeleteModal,
    handleDelete,
    setIsDeleteModalOpen,
  } = useTable();
  const getColumns = columns(setIsDeleteModalOpen);
  return (
    <>
      <TanstackTable columns={getColumns} data={ManageDashboardTableData} />
      <CustomPagination count={1} rowsPerPageOptions={[1, 2]} entriePages={1} />
      <AlertModals
        message="Are you sure you want to delete dashboard"
        type="delete"
        open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        handleSubmit={handleDelete}
      />
    </>
  );
};
export default Table;
