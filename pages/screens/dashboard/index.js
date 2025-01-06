import Image from "next/image";
import styles from './Dashboard.module.css';
import { Inter } from 'next/font/google';
import Header from "@/pages/components/header";
import HotelSearchBar from "@/pages/components/hotelSearchBar";
import PopularDestinations from '@/pages/components/popularDestinations';

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {

    return (
        <div>
            <div className={inter.className}>

            <Header/>
            <HotelSearchBar/>
            {/* <PopularDestinations/> */}


            </div>
        </div>
    )
}