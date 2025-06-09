import { BiWifi } from 'react-icons/bi'
import './cardFlip.css'
export const CardSlide = (props:any) => {
    const data =props
  return (
<div className="card a50">
  <div className="card__content">
    <div className="card__content-inner">
      <div className="card__logo"><BiWifi size={50} color='#fff'/></div>
      <div className="card__title">{props.title}</div>
      <div className="card__description">{props.description}</div>
    </div>
  </div>
</div>
  )
}
