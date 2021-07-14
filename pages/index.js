import Head from 'next/head'

export default function Home({ NewConfirmed, UpdateDate }) {
    const confirmed = NewConfirmed.toLocaleString()
    let date = UpdateDate.split(' ')
    date = `${date[0]} เวลา ${date[1]}`

    return (
        <div className="root flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>โควิดวันนี้ติดกันกี่คน</title>
                <meta property="og:title" content='COVID-19 Stats' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className='md:text-2xl lg:text-3xl font-light text-white m-6 drop-shadow-md'>
                    วันนี้ติดโควิดกันกี่คน ?</h1>
                <h3 className='md:text-8xl lg:text-9xl font-medium text-white m-6 drop-shadow-md'>
                    {confirmed}</h3>
                <p className='md:text-sm lg:text-md font-light text-white m-6 drop-shadow-md'>
                    ข้อมูล ณ วันที่ {date} (ร้าบานแม่งไม่อัพเดททุกวัน)</p>
            </main>

            <footer className="flex items-center justify-center w-full h-24 font-light text-white drop-shadow-md">
                <div>
                    <p>
                        Made by Phatsanphon Nakaranurak |
                        API by <a href='https://www.kidkarnmai.com/'>kidkarnmai.com</a> |
                        Data from <a href='https://data.go.th/dataset/covid-19-daily'>data.go.th</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export async function getStaticProps(context) {
    const response = await fetch('https://covid19.th-stat.com/json/covid19v2/getTodayCases.json')
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: data
    }
}