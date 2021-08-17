import Head from 'next/head'
import { useEffect, useState } from 'react';
import Body from '../components/Body';
import Footer from '../components/Footer';

export default function Home({ todayCases, updated }) {
    const [todayCasesConfirmed, setTodayCasesConfirmed] = useState()
    const [updateDate, setUpdateDate] = useState()

    useEffect(async () => {
        setTodayCasesConfirmed(todayCases)
        setUpdateDate(updated)
    }, [])

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

export const getServerSideProps = async () => {
    try {
        const response = await fetch('https://static.easysunday.com/covid-19/getTodayCases.json')
        const data = await response.json()

        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                todayCases: data.todayCases.toLocaleString('th'),
                updated: new Date(data.updated).toLocaleDateString('th')
            }, // will be passed to the page component as props
        }
    } catch (e) {
        console.log(e)
    }
}