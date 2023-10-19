import React, { useState } from 'react'
import SuggestionCard from './Card'
import useFetch from '../hooks/useFetch'

const Suggestion = () => {
    const [url , setUrl] = useState('topRated.json')
    const {data , isLoading} = useFetch(url)
    return (
        <div className='suggestion'>
            <div className='container'>
                
                <div className='suggestionLinks d-flex justify-content-between align-items-center'>
                    <p onClick={() => setUrl('mostPopular.json')}>ألاكثر شهره</p>
                    <p onClick={() => setUrl('new.json')}>المضاف حديثا </p>
                    <p onClick={() => setUrl('freeCourses.json')}>الكورسات المدفوعه </p>
                    <p onClick={() => setUrl('topRated.json')}>ألاعلي تقيما</p>
                </div>
                <div className='suggestionButtons d-flex justify-content-between align-items-center flex-wrap'>
                    <button className=''>الرسم والتصميم</button>
                    <button>التسويق</button>
                    <button>تكنولوجيا المعلومات</button>
                    <button>ألاعمال</button>
                    <button>ألتصوير وصناعه الافلام</button>
                    <button>ألمحتوي</button>
                    <button>ألتحريك</button>
                    <button>أللغات</button>
                </div>
                <div className='suggestionContent d-flex justify-content-evenly align-items-center flex-wrap'>
                    {!isLoading && data?.length > 0 ? data?.map((ele , index) => <SuggestionCard key={index} item={ele} year={`202${index}`} />)
                    : 'Loading'
                    }
                </div>
            </div>
        </div>
    )
}

export default Suggestion