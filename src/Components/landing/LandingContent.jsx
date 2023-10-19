
const LandingContent = () => {
    return (
        <div className='landingContent d-flex flex-column'>
            <div className='d-flex'>
                <span>ساعتين و 20 دقيقه &nbsp;</span>
                <p> : مده الكورس</p>
            </div>
            <div className='d-flex'>
                <span> 8.2&nbsp;</span>
                <p>: تقيم المتعلمين </p>
            </div>
            <h1 className='mb-4'>اللغه الانجليزيه</h1>
            <p className='mb-4'>  اللغه الانجليزيه هي لغه العصر ومهمه جدا لكل الطلاب فجميع كليات القمه تعتمد اعتمادا تاما علي اللغه الانجليزيه</p>
            <div className='buttons mt-4  d-flex justify-content-center align-items-center'>
                <button className='btn btn-dark d-flex justify-content-center align-items-center me-3'>
                    <span>اضافه للفائمه</span>
                    <span>+</span>
                </button>
                <button className='btn btn-danger d-flex justify-content-center align-items-center'>
                    <span>مشاهده الان</span>
                    <span>-</span>
                </button>
            </div>
        </div>
    )
}

export default LandingContent