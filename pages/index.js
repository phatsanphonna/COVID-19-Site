import Head from 'next/head'
import Body from '../components/Body';

export default function Home({ NewConfirmed, UpdateDate }) {
    return (
        <div className="root flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>โควิดวันนี้ติดกันกี่คน</title>
                <meta property="og:title" content='COVID-19 Stats' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <Body NewConfirmed={NewConfirmed} UpdateDate={UpdateDate}/>
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

export const getStaticProps = async () => {
    const URL = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json'

    const response = await fetch(URL)
    const data = await response.json()

    console.log(data);

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: data
    }
}

