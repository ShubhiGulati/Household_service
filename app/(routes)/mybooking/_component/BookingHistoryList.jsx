import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BookingHistoryList({bookingHistory}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
       {
        bookingHistory.map((booking,index)=>(
            <div key={index}  className='flex gap-4 border rounded-lg p-4 mb-5 '>
            {
                booking?.businessList?.name&&
                <Image src={booking?.businessList?.images[0]?.url}
                alt='image'
                width={120}
                height={120}
                className='rounded-lg object-cover'
                />
            }
            
            <div className='flex flex-col gap-2'>
                <h2 className='font-bold'>{booking.businessList.name}</h2>
                <h2 className='flex gap-2 text-purple-600'> <User/> {booking.businessList.contactPerson}</h2>
                 <h2 className='flex gap-2 text-gray-500'> <MapPin className='text-purple-600'/> {booking.businessList.address}</h2>
                 <h2 className='flex gap-2 text-gray-500'>
                     <Calendar className='text-purple-600'/> 
                    Service on : <span className='text-black'> {booking.date}</span></h2>
                     <h2 className='flex gap-2 text-gray-500'>
                     <Clock className='text-purple-600'/> 
                    Service on : <span className='text-black'> {booking.time}</span></h2>
                </div>
             </div>
        ))
       } 
    </div>
  )
}

export default BookingHistoryList