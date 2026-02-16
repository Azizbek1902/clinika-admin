import { useEffect, useMemo, useState } from 'react';
import CustomButton from '../../../components/FormElements/Button';
import Loader from '../../../components/Loader';
import Table from '../../../components/Table';
import { columns } from './helper';
import { Content } from '../style';
import service from '../../../services/admin/user';
import CustomPagination from '../../../components/Pagination';
import ActionsComponent from '../../../components/Table/Actions';
import 'leaflet/dist/leaflet.css';
import InputComponent from '../../../components/FormElements/Input';
import { BsSearch } from 'react-icons/bs';
import CustomModal from '../../../components/Modal';
import Form from './Form';
import { openErrorNotification } from '../../../components/Notification';
import Empty from '../../../components/Empty';
import type { User } from '../../../interface/user';

export default () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [itemId, setItemId] = useState<string | null>(null);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState<string>('');

  const searchQuery = search.length > 3 ? `&search=${search}` : '';

  const query = useMemo(
    () => `page=${pagination.page}&limit=${pagination.limit}${searchQuery}`,
    [pagination.page, pagination.limit, searchQuery],
  );

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const result = await service.getAllPaginate(query);
      const finalData = result?.data?.docs?.map((item: User, indx: number) => ({
        ...item,
        index: pagination.page * pagination.limit - pagination.limit + indx + 1,
        fullName: `${item?.firstName} ${item?.lastName}`,
        provinceRegion: `${item?.province?.title}, ${item?.region?.title}`,
      }));
      setData(finalData || []);
      setTotal(result?.data?.totalDocs || 0);
    } catch (err: any) {
      console.log(err);
      openErrorNotification(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePagination = (pageNumber: number) => {
    setPagination((prev) => ({ ...prev, page: pageNumber }));
  };

  const handleDelete = (id: string) => {
    service
      .delete(id)
      .then(() => fetchUsers())
      .catch((err) => {
        console.log(err);
        openErrorNotification(err?.response?.data?.message);
      });
  };

  const fullColumns = [
    ...columns,
    {
      header: 'Amallar',
      accessorKey: 'actions',
      cell: ({ row }: { row: { original: { _id: string } } }) => (
        <ActionsComponent
          handleDelete={() => handleDelete(row.original?._id)}
          handleEdit={() => {
            setOpen(true);
            setItemId(row.original?._id);
          }}
        />
      ),
      meta: {
        headerStyle: { width: '100px', textAlign: 'center' as const },
        bodyStyle: { textAlign: 'center' as const },
      },
    },
  ];

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchUsers();
    }, 500);
    return () => clearTimeout(handler);
  }, [query]);

  const handleClose = () => {
    setOpen(false);
    setItemId(null);
  };

  return (
    <>
      <Content>
        <div className='filter-panel'>
          <div className='filters'>
            <InputComponent
              allowClear
              prefix={<BsSearch />}
              placeholder='Qidiruv...'
              height='30px'
              width='180px'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPagination((prev) => ({ ...prev, page: 1 }));
              }}
            />
          </div>
          <CustomButton
            onClick={() => {
              setOpen(true);
              setItemId(null);
            }}
            $height='46px'
          >
            Qo‘shish
          </CustomButton>
        </div>

        {loading ? (
          <Loader />
        ) : data.length ? (
          <div className='content'>
            <Table columns={fullColumns} data={data} />
            <CustomPagination
              align='end'
              total={total}
              onChange={handleChangePagination}
              defaultPageSize={pagination.limit}
              defaultCurrent={pagination.page}
            />
          </div>
        ) : (
          <Empty />
        )}
      </Content>
      <CustomModal
        width={600}
        open={open}
        title={itemId ? 'Admistratorni tahrirlash' : "Admistrator qo'shish"}
        onCancel={handleClose}
        content={
          <Form state={itemId} fetchData={fetchUsers} onClose={handleClose} />
        }
      />
    </>
  );
};
