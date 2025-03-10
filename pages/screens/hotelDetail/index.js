import { Inter } from 'next/font/google';
import Header from "@/pages/components/header";
import Tabs from '../../components/tabs'
import HotelSearchContinue from '../../components/hotelSearchContinue'

const inter = Inter({ subsets: ['latin'] })

export default function HotelDetail() {

    return (

        <div>
            <div className={inter.className}>

                <Header/>
                <HotelSearchContinue/>
                <Tabs/>
            </div>
        </div>

    )
}