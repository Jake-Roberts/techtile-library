import Image from "next/image";
import logo from '../../public/logo.webp'

const TopNav = () => {


  return (
    <header>
      <div className="infobar">
        <a href="tel:4355861131">(435) 586-1131</a>
        <a href="https://goo.gl/maps/vW9DfknEoBU2">1811 W. Royal Hunte Dr.</a>
      </div>
      <div className="topnav">
        <Image src={logo} alt="company logo" width={535} height={156} />
        <div className="navlinks">
          <a href="/about">About</a>
          <a href="/treatments">Treatments</a>
          <a href="/contact">Contact</a>
          <a href="/treatments">New Patient Form</a>
        </div>
        <a className="contact-btn" href="http://www.mypatientvisit.com/">Patient Portal</a>
      </div>
    </header>
  )
}

export default TopNav;