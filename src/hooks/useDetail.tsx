import {useEffect, useState} from 'react';
import {useAxios} from '../services/useAxios';
import {TagListProps} from '../types/HomeTypes';

const useDetail = ({id}: {id: number}) => {
  const [detailData, setDetailData] = useState<any>([]);
  console.log(id);

  const prepareTagsListData = async () => {
    const data = await useAxios(`promotions?Id=${id}`, 'GET');
    setDetailData(data);
  };

  useEffect(() => {
    prepareTagsListData();
  }, []);

  return {detailData};
};

export default useDetail;
