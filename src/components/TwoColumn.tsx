import Image from "next/image";
import mountain1 from "../../public/gallery/mountain1.webp";

const TwoColumn = () => {
  return (
    <section className='two-column component'>
      <div className='content'>
        <div className='img-wrapper'>
          <Image src={mountain1} alt='some mountain' />
        </div>
        <div className='text'>
          <p>
            Mountain Eye Institute is where Southern Utah goes for Eye Care!
            <br />
            <br />
            Our Southern Utah Eye Care services include: LASIK & other
            surgeries, checkups & prescriptions, and an Optical Center with
            expert help!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoColumn;
