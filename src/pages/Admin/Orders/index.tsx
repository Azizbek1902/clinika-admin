import { useEffect, useMemo, useState } from 'react';
import Loader from '../../../components/Loader';
import Table from '../../../components/Table';
import { columns } from './helper';
import { Content } from '../style';
import service from '../../../services/admin/order';
import serviceCategory from '../../../services/admin/services';
import CustomPagination from '../../../components/Pagination';
import InputComponent from '../../../components/FormElements/Input';
import { BsSearch } from 'react-icons/bs';
import { openErrorNotification } from '../../../components/Notification';
import Empty from '../../../components/Empty';
import type { Subject } from '../../../interface/subject';
import CustomSelect from '../../../components/FormElements/Select';

export default () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState<string>('');

  const [categoryData, setCategoryData] = useState<
    { label: string; value: string }[]
  >([]);
  const [selectCategory, setSelectCategory] = useState<boolean | null | string>(
    null,
  );

  const categoryQuery = useMemo(
    () => (selectCategory ? `&doktor=${selectCategory}` : ''),
    [selectCategory],
  );

  const searchQuery = useMemo(
    () => (search.length > 3 ? `&search=${search}` : ''),
    [search],
  );

  const query = useMemo(
    () =>
      `page=${pagination.page}&limit=${pagination.limit}${searchQuery}${categoryQuery}`,
    [pagination.page, pagination.limit, searchQuery, categoryQuery],
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

  const fullColumns = [...columns];

  useEffect(() => {
    if (searchQuery?.length) {
      const handler = setTimeout(() => {
        fetchData();
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    } else {
      fetchData();
    }
  }, [pagination.page, pagination.limit, query]);

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
                setPagination((prev) => ({ ...prev, page: 1 }));
                setSearch(e.target.value);
              }}
            />
            <CustomSelect
              options={categoryData}
              placeholder='Doktor'
              onChange={(e) => {
                setSelectCategory(e);
                setPagination((prev) => ({ ...prev, page: 1 }));
              }}
              value={selectCategory || null}
              $width='160px'
              $height='40px'
              allowClear
            />
          </div>
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
    </>
  );
};
