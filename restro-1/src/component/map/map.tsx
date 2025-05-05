import React from 'react'

export const Map = () => {
  return (
    <div className='w-[100%] flex justify-center' style={{borderRadius:'10px'}}>
              <iframe className='w-full' style={{borderRadius:'10px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5007398.710594164!2d0.2966348!3d52.206704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a845d8c64b03cb%3A0xd8b6934c5ea9abaf!2sMundo%20Tapas%20-%20Alt%20Mariendorf!5e0!3m2!1sen!2sin!4v1743943390146!5m2!1sen!2sin"  height="250"  loading="lazy" ></iframe>

    </div>
  )
}
