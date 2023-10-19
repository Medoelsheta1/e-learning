import React, { useState } from 'react'
import {AiFillHeart , AiFillStar} from 'react-icons/ai'
import CourseDetails from '../Details/CourseDetails'
const SuggestionCard = ({item , year}) => {
    const [showDetails , setShowDetails] = useState(false)
    return (
        <>
        <div className='suggestionCard'>
            <div className='cardLayout'>
                <p className='text-center text-white' onClick={() => setShowDetails(true)}>Details</p>
            </div>
            <img src={item.img} alt='' />
            <p>{item.kind}</p>
            <div className='cardRate d-flex justify-content-between align-items-center'>
                <span>{year}</span>
                <div className='cardDetails d-flex align-items-center justify-content-center'>
                    <AiFillHeart  />
                    <AiFillStar className='ms-2 gold'/>
                    <span className='ms-1 gold'>{item.rate}</span>
                </div>
            </div>
        </div>
        {showDetails && <CourseDetails item={item} setShowDetails={setShowDetails} />}
        </>
    )
}

export default SuggestionCard