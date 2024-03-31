import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid'
import qs from 'qs';


function testty() {
  const [responseData, setResponseData] = useState<any>({});

  let data = qs.stringify({
    'scope': 'GIGACHAT_API_PERS' 
  });

  const fetchData = async () => {
    const config = {
      mode: "cors",
      credentials: 'include',
      method: 'POST',
      maxBodyLength: Infinity,
      url: 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Access-Control-Allow-Credentials': 'true',
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'RqUID': uuidv4(), 
        'Authorization': 'Basic NDQ3MDE5YzItOTBkNS00NjE2LWI3ZWYtNTA0YmRhMGRiMDBmOjY0MDE1ZTU3LTEwZWItNGUwMi1hNjZhLWQyZDdhNDdiMGU0OQ=='
      },
      data: data,
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