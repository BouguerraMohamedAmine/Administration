import React , {useEffect,useState} from 'react'
import axios from 'axios';
import HIRSDetails from '../HIRS/HIRSDetails';
function HIRS() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/HIRS')
          .then(res => {
            // console.log("data",res.data); // Use res.data instead of data
            setData(res.data);
          })
          .catch(err => console.log(err));
    }, []);
  
    console.log("my state",data);

      return (
        <div className="flex justify-flex-end mx-auto justify-content flex-end">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <div className="border-b border-gray-200 shadow">
                  <h1 className='text-pink-600 text-center'> HIR's lists </h1>
                  <table className="mx-auto divide-y divide-green-400">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-2 text-xs text-gray-500">
                          ID
                        </th>
                        <th className="px-6 py-2 text-xs text-gray-500">
                          Name
                        </th>
                        <th className="px-6 py-2 text-xs text-gray-500">
                          Position
                        </th>
                        <th className="px-6 py-2 text-xs text-gray-500">
                          Feed_Back
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
                      {data.map((element, i) => (
                        <HIRSDetails element={element} key={i} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    export default HIRS