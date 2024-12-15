let newURL = 'https://myapp-25758-default-rtdb.firebaseio.com/employees.json'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Dashboard() {
  let [dataState, setDataState] = useState([])


  async function getData() {
    let employeesData = await axios.get()
    setDataState(Object.entries(employeesData.data))
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>

      <div className='filters'>
      </div>
    </div>
  )
}
