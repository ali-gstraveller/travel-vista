import Image from "next/image";
import { Inter } from 'next/font/google';
import Header from "@/pages/components/header";
import HotelSearchBar from "@/pages/components/hotelSearchBar";
import PopularDestinations from '@/pages/components/popularDestinations';
import PlanYourTrip  from '../../components/planYourTrip';
import SoloTravel from '@/pages/components/soloTravel';
import ExplorePopularHotel from '../../components/explorePopularHotel' ;
import Footer from "@/pages/components/footer";
import TextArea from "@/pages/components/TextArea"
import PaymentSection from '../../components/paymentSection';
import HotelSearchContinue from '../../components/hotelSearchContinue'
import FilterArea from "@/pages/components/filterArea";

const inter = Inter({ subsets: ['latin'] })

export default function HotelList() {

    return (
        <div>
            <div className={inter.className}>

            <Header/>
            <HotelSearchContinue/>
            <FilterArea/>
            {/* <Footer/>
            <TextArea/>
            <PaymentSection/> */}
            </div>
        </div>
    )
}