import Image from "next/image";
import '../styles/index.scss'
import GoogleMap from "../components/GoogleMap";
import Gallery from "@/components/Gallery";
import DOP from "@/components/DOP";
import ContactUs from "@/components/Forms/ContactForm";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

const Home = () => {

  const galleryItems = [
    {image:'/mountain3.jpg', title: 'Eye1', description: 'Close up of a blue eye'  },
    {image:'/mountain2.jpg', title: 'Moutain', description: 'View of Mountain'  },
    {image:'/mountain1.jpg', title: 'Moutain', description: 'View of zion'  },
  ]
  // only files in app have access to server-side environment variables
  // for that reason we must pass the .env.local keys as props from here
  const props = {
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    mapId: process.env.MAP_ID
  }

  return (
    <main className="main">
      <TopNav />
      <Gallery items={galleryItems} />
      <GoogleMap {...props}/>
      <DOP />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default Home;