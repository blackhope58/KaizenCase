import {useEffect, useState} from 'react';
import {useAxios} from '../services/useAxios';
import {PromotionCardProps} from '../types/HomeTypes';

const useDetail = ({id}: {id: number}) => {
  const [detailData, setDetailData] = useState<PromotionCardProps[]>([]);
  const prepareDetailData = async () => {
    const response = await useAxios(`promotions?Id=${id}`, 'GET');
    setDetailData(response);
  };

  useEffect(() => {
    prepareDetailData();
  }, [id]);

  return {detailData};
};

export default useDetail;
