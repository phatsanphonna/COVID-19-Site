import Head from 'next/head'
import { useEffect, useState } from 'react';
// import Body from '../components/Body';
import Footer from '../components/Footer';

export default function Home() {
    const [todayCasesConfirmed, setTodayCasesConfirmed] = useState(0)
    const [updateDate, setUpdateDate] = useState()

    useEffect(async () => {
        let response = await fetch('https://covid19.th-stat.com/json/covid19v2/getTodayCases.json')
        response = await response.json()

        let confirmed = response.NewConfirmed
        let date = response['UpdateDate'].split(' ')

        setTodayCasesConfirmed(confirmed.toLocaleString())
        setUpdateDate(`${date[0]} เวลา ${date[1]}`)
    })

    return (
        <div className="root flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>วันนี้ติดกันกี่คน</title>
                <meta property="og:title" content='COVID-19 Stats' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                {/* <Body NewConfirmed={NewConfirmed} UpdateDate={UpdateDate} /> */}
                <h1 className='md:text-2xl lg:text-3xl font-light text-white m-6 drop-shadow-md'>
                    วันนี้ติดโควิดกันกี่คน ?</h1>
                <h3 className='text-7xl md:text-8xl lg:text-9xl font-medium text-white m-6 drop-shadow-md'>
                    {todayCasesConfirmed}</h3>
                <p className='md:text-sm lg:text-md font-light text-white m-6 drop-shadow-md'>
                    ข้อมูล ณ วันที่ {updateDate} (ร้าบานแม่งไม่อัพเดททุกวัน)</p>
            </main>

            <footer className="flex items-center justify-center w-full h-24 font-light text-white drop-shadow-md">
                <Footer />
            </footer>
        </div>
    )
}

// export const getStaticProps = async () => {
//     const URL = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json'

//     const response = await fetch(URL, {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     const data = await response.json()
//     console.log(data);

//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: data
//     }
// }
