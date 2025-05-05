'use client'
import Link from 'next/link';
import React from 'react';
import { IoIosRestaurant } from "react-icons/io";
import BookingWidget from '../bookingwidge';

const ReserveIcon = (props:any) => {
  
const langData=props.langData

  return (

      <BookingWidget bottom={false} banner={false} header={true} popup={false} langData={langData}/>

   
  );
}

export default ReserveIcon;
