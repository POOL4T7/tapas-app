import { ProfileCard } from "@/component/profileCard"
import  './profileSection.css'
import { InfoBtn } from "@/component/infoBtn"
import sparkImg from '../../../../../public/image/divider.png'
import Image from "next/image"

export const ProfileSection = () => {

    const data={
        img:sparkImg,
        contactLink:'/#',
        contact:'Apply Today',
        header:'Careers',
        details:'Be a Part of Our Restaurant',
        desc:'Morbi purus libero, faucibus adipi, commodo quis, gravida id. Praesent elementum hendrerit tortor.'
    }
  return (


    <div className="sec_con">
    <div className="cardsCon">
  <div className="cardProfile">
    <ProfileCard/>
  </div>
  <div className="cardProfile">
    <ProfileCard/>
   
  </div>
  <div className="cardProfile">
   
    <ProfileCard/>
  </div>
  <div className="cardProfile">
    <ProfileCard/>
    
  </div>
  <div className="cardProfile">
  <ProfileCard/>

  </div>

</div>
  <div className="detailsSEC_">
    <div className="logo_sec">
    <Image src={data.img} width={200} height={200} alt=''/>
    </div>
    <div className="detailsSEC_Header"> 
{data.header}
    </div>
    <div className="detailsSEC_Details"> 
    {data.details}

    </div>
    <div className="detailsSEC_Des"> 
    {data.desc}

    </div>

    <InfoBtn contactLink={data.contactLink} contact={data.contact}/>
  </div>
</div>
  )
}
