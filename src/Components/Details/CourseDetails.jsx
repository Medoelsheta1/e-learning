import React from 'react'

const CourseDetails = ({item , setShowDetails}) => {
    return (
        <div className='courseDetails'>
            <span className='exit' onClick={() => setShowDetails(false)}>x</span>
                <div className='detailsContent'>
                    <img src={item.bg} alt='' />
                    <div className='itemText'>
                        <div>
                            <span className='d-flex'> 
                                <span>ساعه</span>  &nbsp;
                                <span>{item.time}</span>
                            
                            </span>
                            <p> &nbsp; : مده الكورس </p>
                        </div>
                        <div>
                            <span>{item.rate} &nbsp;</span>
                            <p>: تقيم المتعلمين &nbsp;</p>
                        </div>
                        <div className='mt-3 mb-3'><h1>{item.kind}</h1></div>
                        <div><p className='text-white'>{item.description}</p></div>
                        <div className='detailsButtons mt-4'>
                            <button className='btn btn-dark'>اضافه للقائمه +</button>
                            <button className='ms-3 btn btn-danger'>مشاهده ألان</button>
                        </div>
                        <div className='detailsLinks mt-5 d-flex justify-content-evenly align-item-center'>
                            <button>الدورات المختاره</button>
                            <button>الأعلي مشاهده</button>
                            <button>أحدث الدورات التدريبيه</button>
                        </div>
                    </div>
                    <div className='detailsLayout'></div>
                </div>
        </div>
    )
}

export default CourseDetails