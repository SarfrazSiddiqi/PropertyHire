import { Col, Row, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import React,{useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import './Property.css'


const propertyList = [
  {
    id: 1,
    name: 'Palm Harbor',
    img: 'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Navi Mumbai',
    price: '20k',
    size: '3bed',
  },
  {
    id: 2,
    name: 'Beverly Springfield',
    img: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Borivali',
    price: '25k',
    amount: 25,
    size: '4bed',
  },
  {
    id: 3,
    name: 'faulkner Ave',
    img: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Bandra',
    price: '40k',
    amount: 40,
    size: '3bed',
  },
  {
    id: 4,
    name: 'Picket Fence',
    img: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Bandra',
    price: '35k',
    amount: 35,
    size: '3bed',
  },
  {
    id: 5,
    name: 'Sterling Property',
    img: 'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Church Gate',
    price: '30k',
    amount: 30,
    size: '2bed',
  },
  {
    id: 6,
    name: 'Carpe Dieme',
    img: 'https://images.pexels.com/photos/7601179/pexels-photo-7601179.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Mahim',
    price: '28k',
    amount: 28,
    size: '4bed',
  },
  {
    id: 7,
    name: 'Home & Hearth',
    img: 'https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Bandra',
    price: '20k',
    amount: 20,
    size: '3bed',
  },
  {
    id: 8,
    name: 'Magnolia Group',
    img: 'https://images.pexels.com/photos/7601155/pexels-photo-7601155.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Borivali',
    price: '30k',
    amount: 30,
    size: '2bed',
  },
  {
    id: 9,
    name: 'Citadel Partners',
    img: 'https://images.pexels.com/photos/8186510/pexels-photo-8186510.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Navi Mumbai',
    price: '20k',
    amount: 20,
    size: '4bed',
  },
  {
    id: 10,
    name: 'Oberoi Real State',
    img: 'https://images.pexels.com/photos/13008560/pexels-photo-13008560.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Church Gate',
    price: '45k',
    amount: 45,
    size: '3bed',
  },
  {
    id: 11,
    name: 'Eco House',
    img: 'https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Mahim',
    price: '20k',
    amount: 20,
    size: '2bed',
  },
  {
    id: 12,
    name: 'Sand & Sea House',
    img: 'https://images.pexels.com/photos/2455398/pexels-photo-2455398.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Church Gate',
    price: '20k',
    amount: 20,
    size: '3bed',
  },
]
const Property = () => {

  const [data, setData]= useState([]);
  const [location, setLocation] = useState("");
  const [price, setPrice]=useState("");
  const [bedSize,setBedSize] = useState("")

  useEffect(() => {
  setData(propertyList)
  }, [])

  const locationChange = (e)=>{

    if(e!==undefined){
      const newdata = propertyList.filter((item)=>{
        return item.location == e
     })
     setData(newdata);
    }else{
      setData(propertyList)
    }
   
  }

  const priceChange = (e)=>{
    // debugger
    if(e!== undefined){
      var lowPrice = parseInt(e.split('-')[0]);
      var highPrice = parseInt(e.split('-')[1]);
      
  
      var newPricedata = propertyList.filter((item)=>{
        
         return item.amount >=lowPrice && item.amount <highPrice;
      })
      setData(newPricedata);
    }else{
      setData(propertyList)
    }
    
  }

   const bedChange = (e)=>{
    // debugger
    if(e!== undefined){
      const bedSize = propertyList.filter((item)=>{
        return item.size == e
     })
     setData(bedSize);
    }else{
      setData(propertyList)
    }
    
   }

  return (

    <div className='Container'>
      <div className='filter_container'>
        <h2>Search properties for rent</h2>
        {/* <Card className='filter-items'> */}
        <div >
          <Row>
            <Col span={4}>
              <div>Location</div>
              <div>
                <Select style={{width:"90%"}} onChange={locationChange} allowClear>
                  <Option key='Bandra'>Bandra</Option>
                  <Option key='Church Gate'>Church Gate</Option>
                  <Option key='Mahim'>Mahim</Option>
                  <Option key='Borivali'>Borivali</Option>
                  <Option key='Navi Mumbai'>Navi Mumbai</Option>
                </Select>
              </div>
            </Col>
            <Col span={4}>
            <div>Price</div>
              <div>
                <Select style={{width:"90%"}} onChange={priceChange} allowClear>
                  <Option key='20 - 30' value='20-30'>20k - 30k</Option>
                  <Option key='30 - 40' value='30-40'>30k - 40k</Option>
                  <Option key='40 - 50' value='40-50'>40k - 50k</Option>
                 
                </Select>
              </div>
            </Col>
            <Col span={4}>
            <div>Bed Size</div>
              <div>
                <Select style={{width:"90%"}} onChange={bedChange} allowClear>
                  <Option key='2bed'>2bed</Option>
                  <Option key='3bed'>3bed</Option>
                  <Option key='4bed'>4bed</Option>
                
                </Select>
              </div>
            </Col>
          </Row>
        
    </div>
        {/* </Card> */}
      </div>
      <p className='section-heading'></p>
  <div className='property-list'>
    {
      data.map((item)=>(
        <div className='property-list-item' key={item.id}>
          <div className="property-image-container">
          <img src={item.img} alt={item.name}></img>
          <div className="property-details">
              <p className='property-name'>{item.name}</p>
              <p className='property-price'>{item.price}</p>
              <p className='property-location'>{item.location}</p>
              <p className='property-size'>{item.size}</p>
              </div>
            </div>
        </div>
      ))
    }
  </div>
    </div>
  )
}

export default Property