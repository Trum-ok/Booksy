import { useState, useEffect } from 'react'
import axios from 'axios'






function testty() {

  const url = 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth';
  const payload = { scope: 'GIGACHAT_API_PERS' };
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
    'RqUID': 'b2ef8576-6bbe-4c79-87a1-2ec8b7d6aa02',
    'Authorization': 'Basic <авторизацонные_данные>'
  };

  // Выполняем POST-запрос с использованием axios
  axios.post(url, payload, { headers })
    .then(response => {
      console.log(response.data); // Выводим полученные данные
    })
    .catch(error => {
      console.error(error); // В случае ошибки выводим сообщение об ошибке
    });

  return (
    <>
      <div>test_from</div>
      <p>test_form</p>
    </>
  )
}

export default testty