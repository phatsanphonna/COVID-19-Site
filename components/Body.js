import React from 'react'

export default function Body({ NewConfirmed, UpdateDate }) {
    const confirmed = NewConfirmed.toLocaleString()
    let date = UpdateDate.split(' ')
    date = `${date[0]} เวลา ${date[1]}`

    // const confirmed = NewConfirmed
    // const date = UpdateDate

    console.log(confirmed, date)

    return (
        <div>
            <h1 className='md:text-2xl lg:text-3xl font-light text-white m-6 drop-shadow-md'>
                วันนี้ติดโควิดกันกี่คน ?</h1>
            <h3 className='md:text-8xl lg:text-9xl font-medium text-white m-6 drop-shadow-md'>
                {confirmed}
            </h3>
            <p className='md:text-sm lg:text-md font-light text-white m-6 drop-shadow-md'>
                ข้อมูล ณ วันที่ {date} (ร้าบานแม่งไม่อัพเดททุกวัน)
            </p>
        </div>
    )
}



