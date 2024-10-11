import { useRef } from "react";
import Logo from "../components/Logo";
import { motion, useTransform, useScroll } from "framer-motion";
import BottomComponent from "../components/BottomComponent";

function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  
  // Apply scale effect based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]); // Scale from 1x to 2x

  return (
    <motion.div  style={{scale}}  // Apply scaling effect
     ref={container} className="h-screen relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-screen object-cover"
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1356575204746472376/TEAM/9982/cca2/-5ae6-4adb-81b4-c2d194c6ef4c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DA5X4G35nsqCYQOJifjatZJg-ux03avnabBzczxawb01-iKINIZRcDJ6nyQOt2vcAACeY5WVHW7ejPjpEWv4c6590eB1QyuaIwjD9al0X5Fjxd9yTPELjz2rSBXVfl73XOTIyD8ELhDDQ5btixpjuTjQrVWF4ssvcVj~4pCl-xdTv8KzkoKEPKY1XOPqqU652256iKxiJ4YGT2f2m1wX4gG0DF5NNBCocDGzOTy0-T4F3XAW-wCI50Oea6IstUn6jGmFI-~XxR-MAoHcMiKUDdUTL5e~uI9tlRKfoqcHzv-7woaJYOfQEIIg86ks0gBPfETkJU2g4NEzKbrWXmOGIQ__"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <motion.div  className="relative z-10 flex top-8 items-center justify-center">
        <Logo />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-evenly h-full space-y-4">
          <div className="mt-32">
            <h1
            
              className="text-white font-athelas text-4xl text-center"
            >
              <span className="block -ml-10">A LOREM IPSUM</span>
              <span className="block -mr-10">in LOREM IPSUM</span>
            </h1>
          </div>
          <div>
            <div> text</div>
            <div>
              <BottomComponent text1="Lorem" w="w-56"/>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
