import {AiOutlineSearch , AiOutlineNotification} from 'react-icons/ai'
import {PiGooglePhotosLogoFill} from 'react-icons/pi'
const Navpar = () => {
    return (
        <div className=' navpar w-100 d-flex justify-content-between align-items-center'>
                
            <div className='logo text-danger'>USAM</div>
            <div className='navparContent row'>
                <div className='links col-sm-8 col-7 d-flex align-items-center'>
                    <p>الرئيسيه</p>
                    <p>الكورسات</p>
                    <p>المعلمين</p>
                </div>
                <div className='icons col-sm-3 col-4 d-flex align-items-center'>
                    <AiOutlineSearch />
                    <AiOutlineNotification />
                    <PiGooglePhotosLogoFill />

                </div>
            </div>
        </div>
    )
}

export default Navpar