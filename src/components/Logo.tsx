
import logo from './../assets/logo.png'
import stikk from './../assets/stikk.png'
function Logo() {
  return (
    <div className='flex flex-col -space-y-1      items-center justify-center'>
    <div className='flex space-x-2 items-center justify-center'>

        <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <img src={stikk}/>
            <h5 className='  text-[8px]'>A Stikkman Interactive Company</h5>
        </div>
    </div>
        <div>
            <h3 className=' text-xs'>Lorem Ipsum</h3>
        </div>
    </div>
  )
}

export default Logo