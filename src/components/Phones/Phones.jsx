import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import { Audio } from 'react-loader-spinner'


const Phones = () => {
const [loader, setLoader] = useState(true);
 const [phones, setPhones] = useState([]);
 useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhones(data))
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
      const phoneData = data.data.data;
      const phonesWithFakeData = phoneData.map(phone => {
        const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split('-')[1])
        }
        return obj;
      })
      console.log(phonesWithFakeData);
      setPhones(phonesWithFakeData);
      setLoader(false);
    });
 }, [])

    return (
        <div>

           
           {
            loader && <div>
            <Audio height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass />
            </div>
           }


            <h2 className="text-3xl">Phones: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price"  stroke='skyblue' fill='#8884d8' />
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>            
            </BarChart>
        </div>
    );
};

export default Phones;