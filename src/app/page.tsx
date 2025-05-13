import Image from "next/image";
import '../styles/index.css'
import GoogleMap from "../components/GoogleMap";
import Gallery from "@/components/Gallery";
import DOP from "@/components/DOP";
import ContactUs from "@/components/ContactForm";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import Hero1 from "@/components/Hero1";
const Home = () => {

  const galleryItems = [
    {image:'/gallery/mountain6.webp', title: 'Mountain', description: 'A mountain for sure'  },
    {image:'/gallery/mountain5.webp', title: 'Mountain', description: 'A mountain for sure'  },
    {image:'/gallery/mountain4.webp', title: 'Mountain', description: 'A very nice mountain'  },
    {image:'/gallery/mountain3.webp', title: 'Mountain', description: 'Close up of a blue eye'  },
    {image:'/gallery/mountain2.webp', title: 'Mountain', description: 'View of Mountain'  },
    {image:'/gallery/mountain1.webp', title: 'Mountain', description: 'View of zion'  },
  ]

  // only files in app have access to server-side environment variables
  // for that reason we must pass the .env.local keys as props from here
  const props = {
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    mapId: process.env.MAP_ID
  }

  return (
  <>
    <Hero1/>
    <main className="main">
      
    </main>
  </>
  );
}

export default Home;