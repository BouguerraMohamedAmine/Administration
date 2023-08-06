import React , {useEffect,useState} from 'react'
import axios from 'axios';
import CohortDetail from './CohortDetail';
function Cohort() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/cohorts')
          .then(res => {
            // console.log("data",res.data); // Use res.data instead of data
            setData(res.data);
          })
          .catch(err => console.log(err));
    }, []);
  
    console.log("my state",data);
  

  return (
    <>
    <div className="container flex justify-center mx-auto">
  <div className="flex flex-col">
    <div className="w-full">
      <div className="border-b border-gray-200 shadow">
      <h1 className='text-pink-600' > Cohort lists </h1>
        <table className="divide-y divide-green-400 ">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-2 text-xs text-gray-500">
                ID
              </th>
              <th className="px-6 py-2 text-xs text-gray-500">
                Name
              </th>
              <th className="px-6 py-2 text-xs text-gray-500">
                Phase
              </th>
              <th className="px-6 py-2 text-xs text-gray-500">
                Edit
              </th>
              <th className="px-6 py-2 text-xs text-gray-500">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
          {data.map((elemnt,i)=>(
            <CohortDetail elemnt={elemnt} key={i}/>
          ))}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
.
    
    
    
    </>
  )
}

export default Cohort