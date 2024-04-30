import {useEffect, useState} from 'react';
import {useAxios} from '../services/useAxios';

const useHome = () => {
  const [data, setData] = useState<any>([]);
  const prepareData = async () => {
    const data = await useAxios('tags/list', 'GET');
    setData(data);
  };
  useEffect(() => {
    prepareData();
  }, []);

  return {tagsList: data};
};

export default useHome;
