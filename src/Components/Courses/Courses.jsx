
import useFetch from '../hooks/useFetch'
import Card from '../SuggestionSection/Card'
const Courses = () => {
    const {data , isLoading} = useFetch('')

    return (
        <div className='courses'>
            <div className='container'>
            <div className='coursesTitle d-flex justify-content-between align-items-center mt-4 mb-4'>
                <div className='search'>
                    <input type='text' placeholder='search' />

                </div>
                <h4 className='text-white'>جميع الكورسات</h4>
            </div>
            <div className='coursesButtons d-flex justify-content-between align-items-center flex-wrap' >
                <button>الرسم والتصميم</button>
                <button>التسويق</button>
                <button>تكنولوجيا المعلومات</button>
                <button>ألاعمال</button>
                <button>ألتصوير وصناعه الافلام</button>
                <button>ألمحتوي</button>
                <button>ألتحريك</button>
                <button>أللغات</button>
            </div>
            <div className='coursesContent d-flex justify-content-evenly align-items-center felx-wrap'>
                {!isLoading ? Object.keys(data).map((ele) =>data[ele].map((value , index) => <Card  key={index} item={value} year={`202${index}`}/> )) : 'Loading'}
            </div>
            </div>
        </div>
    )
}

export default Courses