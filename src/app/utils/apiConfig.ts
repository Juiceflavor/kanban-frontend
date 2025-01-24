const useMocks = process.env.NEXT_PUBLIC_USE_MOCKS === 'true';

import axios from 'axios';

export const fetchData = async (endpoint: string) => {
    try {
      if (useMocks) {
        const mockData = await import(`@/app/mocks/${endpoint}.json`);
        return { data: mockData.default };
      } else {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);
        return response.data ? response : { data: [] }; 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return { data: [] }; 
    }
  };
