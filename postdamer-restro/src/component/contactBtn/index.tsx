'use client'
import './contactBtn.css'
export const ContackBtn = (props:any) => {
    const {link,linkTag}=props
  return (

  <div className="btn_C btn-one">
    <a href={link}>{linkTag}</a>
  </div>

  )
}
