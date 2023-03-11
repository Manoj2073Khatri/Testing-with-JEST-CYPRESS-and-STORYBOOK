
import axios from 'axios';
import { render,screen } from '@testing-library/react';
import DataFetching from '../../components/dataFetching';


describe('FetchedData', () => {

  test('fetches and displays data',  async() => {

    render(<DataFetching/>)

      const response = {};
 
     (axios.get as jest.Mock).mockResolvedValue(response);

    // await screen.findByText(/apple/i);
     const data = await axios.get('https://dummyjson.com/products/1');
     expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/products/1');
     expect(data).toEqual(response);
  
   
  });
});


