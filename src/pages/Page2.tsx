import paper from "./../assets/paper.png";
import girl from "./../assets/bigGirl.png";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import BottomComponent from "../components/BottomComponent";
function Page2() {
  return (
    <div
      className="h-full  bg-backGround overflow-hidden flex flex-col bg-cover bg-no-repeat  "
      style={{
        backgroundImage: `url(${paper})`,
      }}
    >
            <div className=" relative  h-4/6">
                    <motion.div
                      initial={{ y: 50, scale: 0.5 }}
                      whileInView={{ y: 0, scale: 1 }}
                      transition={{ duration: 1 }}
                      className=" w-full absolute top-0 h-full  "
                    >
                      <img className="h-full w-full object-cover" alt="girl" src={girl} />
                    </motion.div>
                    <div className=" relative z-10">
                      <NavBar />
                    </div>
            </div>
      <div className="flex  w-full p-8 text-gray-900 divide-black divide-x-[1px]">
        <div  className="p-2">
          <h4 className="  font-bold flex flex-col whitespace-nowrap  ">
            <span>A lorem For</span>
            <span>The Ipsum</span>
          </h4>
        </div>
        <div className=" p-2 text-gray-600">
          <p>
          A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
            </p>
        </div>
      </div>
      <div className=" flex  mt-8 w-full items-center ">
        <motion.div
        initial={{opacity:1,x:0}}
        whileInView={{opacity:0,x:10}}
        transition={{duration:1}}

        className="ml-4"
        
        >
        <BottomComponent w={"w-56"} text1={"Lorem"} padding={"m-auto"} />
          
        </motion.div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1,x:10}}
        transition={{duration:1}}
        className="ml-4"
        >
        <BottomComponent w={"w-24"} padding={"m-auto"} />
        </motion.div>
      </div>
    </div>
  );
}

export default Page2;
