import React, { useState } from 'react'
import LandingContent from './LandingContent'
import Navpar from '../Navpar/Navpar'
import img1 from '../../Images/glasses-1052010_1280 (4).jpg'
const img2 =  'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=3000&h=2000&dpr=1'
const img3 =  'https://img.freepik.com/free-photo/front-view-books-with-glasses_23-2148255828.jpg?w=1380&t=st=1697560194~exp=1697560794~hmac=300260b7e07f3d0c9ec22cacead2482028051ef2a2eb70166f9db8ca7470d0f5'
const Landing = () => {
    const [image , setImage] = useState(img1)
    return (
        <div className='landing'>
            <Navpar />
            <img className='background' src={image} alt='' />
            <div className='layout'></div>
            <LandingContent />
            <div className='imagesHandlers'>
                <span  onClick={() => setImage(img1)}> </span>
                <span onClick={() => setImage(img2)}> </span>
                <span onClick={() => setImage(img3)}> </span>
            </div>
</div>
    )
}

export default Landing