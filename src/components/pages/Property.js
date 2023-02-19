import React from 'react'
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
    size: '4bed',
  },
  {
    id: 3,
    name: 'faulkner Ave',
    img: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Bandra',
    price: '30k',
    size: '3bed',
  },
  {
    id: 4,
    name: 'Picket Fence',
    img: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Bandra',
    price: '35k',
    size: '3bed',
  },
  {
    id: 5,
    name: 'Sterling Property',
    img: 'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Church Gate',
    price: '30k',
    size: '3bed',
  },
  {
    id: 6,
    name: 'Carpe Dieme',
    img: 'https://images.pexels.com/photos/7601179/pexels-photo-7601179.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Mahim',
    price: '28k',
    size: '3bed',
  },
  {
    id: 7,
    name: 'Home & Hearth',
    img: 'https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Bandra',
    price: '20k',
    size: '3bed',
  },
  {
    id: 8,
    name: 'Magnolia Group',
    img: 'https://images.pexels.com/photos/7601155/pexels-photo-7601155.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Borivali',
    price: '20k',
    size: '2bed',
  },
  {
    id: 9,
    name: 'Citadel Partners',
    img: 'https://images.pexels.com/photos/8186510/pexels-photo-8186510.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Navi Mumbai',
    price: '20k',
    size: '3bed',
  },
  {
    id: 10,
    name: 'Oberoi Real State',
    img: 'https://images.pexels.com/photos/13008560/pexels-photo-13008560.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Church Gate',
    price: '45k',
    size: '3bed',
  },
  {
    id: 11,
    name: 'Eco House',
    img: 'https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Mahim',
    price: '20k',
    size: '3bed',
  },
  {
    id: 12,
    name: 'Sand & Sea House',
    img: 'https://images.pexels.com/photos/2455398/pexels-photo-2455398.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    location: 'Church Gate',
    price: '20k',
    size: '3bed',
  },
]
const Property = () => {
  return (
    <div className='listContainer'>
      <p className='section-heading'></p>
  <div className='property-list'>
    {
      propertyList.map((item)=>(
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