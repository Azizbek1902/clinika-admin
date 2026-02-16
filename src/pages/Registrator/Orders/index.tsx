import { useEffect, useMemo, useState } from 'react';
import CustomButton from '../../../components/FormElements/Button';
import Loader from '../../../components/Loader';
import Table from '../../../components/Table';
import { columns } from './helper';
import { Content } from '../style';
import service from '../../../services/admin/orderUser';
import serviceCategory from '../../../services/admin/services';
import CustomPagination from '../../../components/Pagination';
import { FiPrinter } from 'react-icons/fi';
import { openErrorNotification } from '../../../components/Notification';
import Empty from '../../../components/Empty';
import CustomModal from '../../../components/Modal';
import ProvinceForm from './Form';
import type { Subject } from '../../../interface/subject';
import CustomSelect from '../../../components/FormElements/Select';

export default () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [itemId, setItemId] = useState<string | null>(null);

  const [categoryData, setCategoryData] = useState<
    { label: string; value: string }[]
  >([]);
  const [services, setServices] = useState<boolean | null | string>(null);

  const categoryQuery = useMemo(
    () => (services ? `&doktor=${services}` : ''),
    [services],
  );

  const query = useMemo(
    () => `page=${pagination.page}&limit=${pagination.limit}${categoryQuery}`,
    [pagination.page, pagination.limit, categoryQuery],
  );

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await service.getAllPaginate(query);
      const finalData = result?.data?.docs?.map(
        (item: Subject, indx: number) => ({
          ...item,
          index:
            pagination.page * pagination.limit - pagination.limit + indx + 1,
        }),
      );
      setData(finalData || []);
      setTotal(result?.data?.totalDocs || 0);
    } catch (err: any) {
      console.log(err);
      openErrorNotification(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProvinces = async () => {
    try {
      const res = await serviceCategory.getAll();
      const final = res?.data?.map(
        (item: { title?: string; _id?: string; doktor?: string }) => ({
          label: `${item?.title} (${item?.doktor})`,
          value: item?._id,
        }),
      );
      setCategoryData(final || []);
    } catch (err: any) {
      console.log(err);
      openErrorNotification(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchProvinces();
  }, []);

  const handleChangePagination = (pageNumber: number) => {
    setPagination((prev) => ({ ...prev, page: pageNumber }));
  };
  const [printData, setPrintData] = useState<any | null>(null);

  const handlePrint = (rowData: any) => {
    setPrintData(rowData);

    setTimeout(() => {
      window.print();
    }, 200);
  };

  const fullColumns = [
    ...columns,
    {
      header: 'Cheka chiqarish',
      accessorKey: 'print',
      cell: ({ row }: any) => (
        <span
          style={{ cursor: 'pointer', fontSize: '18px' }}
          onClick={() => handlePrint(row.original)}
        >
          <FiPrinter />
        </span>
      ),
      meta: {
        headerStyle: { width: '100px', textAlign: 'center' as const },
        bodyStyle: { textAlign: 'center' as const },
      },
    },

    // {
    //   header: 'Amallar',
    //   accessorKey: 'actions',
    //   cell: ({ row }: { row: { original: { _id: string } } }) => (
    //     <ActionsComponent
    //       handleDelete={() => handleDelete(row.original?._id)}
    //       handleEdit={() => {
    //         setOpen(true);
    //         setItemId(row.original?._id);
    //       }}
    //     />
    //   ),
    //   meta: {
    //     headerStyle: { width: '100px', textAlign: 'center' as const },
    //     bodyStyle: { textAlign: 'center' as const },
    //   },
    // },
  ];

  useEffect(() => {
    fetchData();
  }, [pagination.page, pagination.limit, query]);

  const handleClose = () => {
    setOpen(false);
    setItemId(null);
  };

  return (
    <>
      <Content>
        <div className='filter-panel'>
          <div className='filters'>
            <CustomSelect
              options={categoryData}
              placeholder='Xizmat turini tanlang'
              onChange={(e) => {
                setServices(e);
                setPagination((prev) => ({ ...prev, page: 1 }));
              }}
              value={services || null}
              $width='200px'
              $height='40px'
              allowClear
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
        title={itemId ? 'Buyurtmani tahrirlash' : "Buyurtma qo'shish"}
        onCancel={handleClose}
        content={
          <ProvinceForm
            state={itemId}
            fetchData={fetchData}
            onClose={handleClose}
          />
        }
      />
      {printData && (
        <div className='print-area'>
          <div className='chek'>
            <div className='chek-header'>
              <h2 className='clinic-name'>A DOKTOR A</h2>
            </div>
            <div className='chek-number'>{printData?.orderNumber}</div>
            <div className='chek-body'>
              <div className='row'>
                <span className='text-chek'>Xona</span>
                <span className='text-chek'>{printData?.room}-xona</span>
              </div>

              <div className='row'>
                <span className='text-chek'>Muolaja</span>
                <span className='text-chek'>{printData?.doktor?.title}</span>
              </div>

              <div className='row'>
                <span className='text-chek'>Doktor</span>
                <span className='text-chek'>{printData?.doktor?.doktor}</span>
              </div>

              <div className='row'>
                <span className='text-chek'>Vaqti</span>
                <span className='text-chek'>
                  {printData?.date} {printData?.time}
                </span>
              </div>

              <div className='flex-row'>
                <span className='text-chek'>Telefon</span>
                <span className='text-chek'>
                  {import.meta.env.VITE_PRINT_PHONE_1}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
