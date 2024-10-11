import { useRef } from "react";
import BottomComponent from "../components/BottomComponent";
import NavBar from "../components/NavBar";
import girl from "./../assets/girl.svg";
import {
  useTransform,
  motion,
  useScroll,
} from "framer-motion";
function Page1() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div
      ref={ref}
      className="h-full  bg-backGround  flex flex-col  justify-center"
    >
      <NavBar />

      <div className="relative z-10 flex flex-col justify-between  items-center    h-full">
        <div className="flex flex-col items-center justify-center   h-full space-y-4">
          <div className="">
            <h1 className="text-white font-athelas text-3xl text-center">
              <span className="block ">LOREM INTO IPSUM</span>
              <span className="block">A LOREM in THE IPSUM</span>
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col items-center rounded-xl justify-end bottom-0 mb-2    w-5/6 h-4/6">
         
            <motion.img src={girl} style={{y:yBg,scale}} className=" absolute rounded-none   inset-0 h-full w-full object-cover scale-[150%]" />
         
    
          <motion.div
            className="relative z-10" // Ensures this div is on top of the image
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BottomComponent w={"w-56"} text1={"Lorem"} padding={"mb-10"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
