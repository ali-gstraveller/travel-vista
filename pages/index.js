import styles from "@/styles/Home.module.css";
import Dashboard from "./screens/dashboard";
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className={inter.className}>
    
      <Dashboard/>
    
    </div>
  );
}
