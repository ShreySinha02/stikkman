import { BsCalendar4 } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
function BottomComponent({padding,w,text1}) {
 
  return (
    <div className={` bg-button rounded-full flex divide-x-2 h-12 ${w} space-x-4 justify-center items-center ${padding&&padding}`}>
      <div className=" flex items-center  space-x-2">
      <BsCalendar4/>
     { text1&&<h3>LOREM</h3>}
      </div>
      <div className="flex items-center pl-4  space-x-2">
      <IoCallOutline/>
      { text1&&<h3>LOREM</h3>}
      </div>
    </div>
  )
}

export default BottomComponent