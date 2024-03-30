import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid'


function testty() {
  const [responseData, setResponseData] = useState<any>({});

  const fetchData = async () => {
    const config = {
      method: 'post',
      url: 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'RqUID': uuidv4(), 
        'Authorization': 'Basic NDQ3MDE5YzItOTBkNS00NjE2LWI3ZWYtNTA0YmRhMGRiMDBmOjY0MDE1ZTU3LTEwZWItNGUwMi1hNjZhLWQyZDdhNDdiMGU0OQ=='
      },
      data: {scope: 'GIGACHAT_API_PERS' }
    };

    try {
      const response: AxiosResponse = await axios(config);
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {JSON.stringify(responseData)}
    </div>
  );
}

export default testty