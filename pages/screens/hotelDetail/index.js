import { Inter } from 'next/font/google';
import Header from "@/pages/components/header";
import Tabs from '../../components/tabs'
import HotelSearchContinue from '../../components/hotelSearchContinue'
import Overview from '../../components/overview'


const inter = Inter({ subsets: ['latin'] })

export default function HotelDetail() {

    return (

        <div>
            <div className={inter.className}>

                <Header/>
                <HotelSearchContinue/>
                <Tabs/>
                <Overview/>
            </div>
        </div>

    )
}