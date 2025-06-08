import Link from 'next/link';
import React from 'react';
import BookingWidget from '../bookingwidge';

const contact={
    whatsApp: 'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Checkpoint%20Charlie%20Team',
  }
const BottomBar = (props:any) => {
    
  return (
    <div style={{zIndex:10}} className="fixed bottom-0 left-0 w-full h-[50px]  bg-gray-800 flex justify-between items-center lg:hidden z-50">
 <div className='bg-yellow-500 text-white w-1/2 h-full  shadow-lg'>
   <BookingWidget bottom={true} popup={false} header={false} banner={false} langData={props.langData} />
 </div>

      <button style={{fontSize:'smaller'}} className="bg-gray-700 text-white w-1/2 h-full px-4 py-4 shadow-lg">
      <Link target='_blank' href={contact.whatsApp}>
        {props.langData[1]}
      </Link>
      </button>
    </div>
  );
}

export default BottomBar;
