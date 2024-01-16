
const OrderNow = () => {
    return (
        <div className="before-footer">
            <div className="w-full text-white px-10 py-6 bg-[rgba(0, 0, 0, 0.8)]">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-white">কোর্স ফি : <span>৮০০০ টাকা</span></h2>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <div className="mbl-enroll-btn">
                            <a style={{ padding: '10px', borderRadius: '5px', fontSize: '20px', color: 'white', cursor: 'pointer' }} target="_blank" href="#" className="course-enroll-button gradient-border" rel="noreferrer">
                                কোর্সে জয়েন করুন
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderNow;