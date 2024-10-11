import BottomComponent from "../components/BottomComponent"
import NavBar from "../components/NavBar"

import people from "./../assets/people.png"

function Page3() {
  return (
    <div
    className="h-full  bg-backGround overflow-hidden  flex flex-col   "

    >
      <NavBar/>
      <div>

      </div>
      <div className="  h-5/6
       flex flex-col text-white w-full items-center justify-center p-12">
        <h4>LOREM OF</h4>
        <h2>LOREM of IPSUM</h2>
        <p className=" text-center ">
        A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum. A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
        </p>
        <p className=" text-center mt-4 ">
        A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum. A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
        </p>
      </div>
      <div className=" relative h-full  flex flex-col text-white w-full items-center justify-center">

        <img src={people} className=" relative top-14 " alt="people" />

      <div className=" absolute right-10 bottom-8 ">

        <BottomComponent w="w-20" />
      </div>

      </div>
    </div>
  )
}

export default Page3