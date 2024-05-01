import {useEffect, useState} from 'react';
import {useAxios} from '../services/useAxios';
import {TagListProps} from '../types/HomeTypes';

const useHome = () => {
  const [tagsListData, setTagsListData] = useState<any>([]);
  const [promotionsData, setPromotionsData] = useState<any>([]);

  const prepareTagsListData = async () => {
    const data = await useAxios('tags/list', 'GET');
    setTagsListData(data);
  };

  const preparePromotionsData = async () => {
    const data = await useAxios('promotions/list?Channel=PWA', 'GET');
    setPromotionsData(data);
  };

  useEffect(() => {
    prepareTagsListData();
    preparePromotionsData();
  }, []);

  return {tagsList: tagsListData, promotions: promotionsData};
};

export default useHome;
