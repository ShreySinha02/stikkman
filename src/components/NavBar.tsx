import { RxHamburgerMenu } from "react-icons/rx";
import logo from "./../assets/logoWhite.svg";
import stikk from "./../assets/stikkWhite.svg";
import { motion } from "framer-motion";
function NavBar({}) {
  return (
    <div className=" flex flex-row items-center space-x-20 p-8 justify-start  ">
     <motion.div  initial={{y:-30}} whileInView={{y:0}} transition={{duration:1}} >
        <RxHamburgerMenu className="text-2xl text-white" />
      </motion.div>
      <div className=" flex flex-row items-center justify-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={stikk} />
          <h5 className="  text-[8px] text-white">A Stikkman Interactive Company</h5>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
