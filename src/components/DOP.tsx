'use client'
import Image, { StaticImageData } from 'next/image'
import {useState, useRef, useEffect, LegacyRef} from 'react';
import {anderson, christian, duncan, godwin, olson} from '../../public/dop/dop.js'
import React from 'react'

interface People {
  image: StaticImageData,
  alt: string,
  fname: string,
  lname: string,
  title: string,
  bio: string
}

const DOP = () => {
  const [type, setType] = useState('square')
  const [open, setOpen] = useState('modal')
  const [modalPerson, setModalPerson] = useState(0)
  const modalRef = useRef<HTMLDivElement>();

  const people: People[] = [
    {image: anderson, alt: 'Dr. Anderson', fname: 'Chad W.', lname: 'Anderson', title: 'M.D., FAAO', bio: `Dr. Anderson is a leading eye surgeon with expertise in the latest surgical and medical ${<a href='/treatments'>treatments</a>} for eye disease including treatment for: Cataracts, Glaucoma, Macular Degeneration and Diabetes.

After graduating Magna Cum Laude from Southern Utah University, Dr. Anderson received his medical degree from Loma Linda University school of Medicine in California where he received the Macpherson Society Research Fellowship Award. He then completed a Research Fellowship in Ophthalmic Pathology at the University of Utah Medical Center. During his surgical residency in Ophthalmology at the University of Kentucky, he received the Outstanding Resident Teaching Award, The Outstanding Resident Research Award, and served as Chief Resident. In 1995 he established Mountain Eye Clinic in Cedar City and serves as Medical Director.

Since joining the medical staff of Valley View Medical Center, Dr. Anderson has served as Chief of Surgery (97-98), Chief of Staff (98-99), and is currently serving as Credentials Committee chairman and delegate to the Utah Medical Association.

Dr. Anderson is Board Certified as a member of the American Academy of Ophthalmology. In his free time he enjoys his family, scuba diving, skiing and cycling.`},
    {image: christian, alt: 'Dr. Christian', fname: 'Rory J.', lname: 'Christian', title: 'O.D.', bio: `Dr. Duncan practices surgical and medical ophthalmology in our practice. With expertise in the latest medical and surgical ${<a href='/treatments'>treatments</a>} for eye diseases including: Cataracts, Glaucoma, Macular Degeneration, Diabetes and Pediatric Strabismus surgery.

After graduating Summa Cum Laude from Southern Utah University, Dr. Duncan received his medical degree from Pennsylvania State University College of Medicine where he received the Dr. Irwin L. Baird Memorial Award and The Berman Memorial Scholarship in Ophthalmology. He served his residency at University of Texas health Center at San Antonio Department of Ophthalmology. Where he was chief of Staff before joining Mountain Eye Institute.`},
    {image: duncan, alt: 'Dr. Duncan', fname: 'Clinton', lname: 'Duncan', title: 'M.D.', bio: `Dr. Duncan practices surgical and medical ophthalmology in our practice. With expertise in the latest medical and surgical ${<a href='/treatments'>treatments</a>} for eye diseases including: Cataracts, Glaucoma, Macular Degeneration, Diabetes and Pediatric Strabismus surgery.

After graduating Summa Cum Laude from Southern Utah University, Dr. Duncan received his medical degree from Pennsylvania State University College of Medicine where he received the Dr. Irwin L. Baird Memorial Award and The Berman Memorial Scholarship in Ophthalmology. He served his residency at University of Texas health Center at San Antonio Department of Ophthalmology. Where he was chief of Staff before joining Mountain Eye Institute.`},
    {image: godwin, alt: 'Dr. Godwin', fname: 'Joseph', lname: 'Godwin', title: 'ABOC', bio: `Joseph L. Godwin has been certified by the American Board of Opticians since 1988. He began pursuing his career in the Optical industry after enlisting in the US Army in 1983. In 1986 He began eye wear manufacturing for Lens Crafters in Brea, Ca. He supervised an optical retail store: “Eyes on Laguna” in Laguna Beach, Ca. till 1990 and optical manufacturing for Drs Cohen and Cohen in Downey, Ca. until 1994. He relocated to beautiful Southern Utah for employment with Ronald L. Snow M.D. in St George, Utah in 1994. He has been the optical manager for Chad W Anderson M.D. since 2008.

Joseph is a Certified Optician with an expertise in providing you with the correct prescription and the correct frames for all ages. He is a Certified Optician with an expertise in providing you with the correct prescription and the correct frames for all ages.`},
    {image: olson, alt: 'Dr. Olson', fname: 'C. Kelly', lname: 'Olson', title: 'O.D., MBA', bio: `Dr. Olson retired from the U.S. Army after a 30-year distinguished career, achieving the rank of Colonel. He and his wife, Valarie, have returned to their roots by coming home to Southern Utah.

Originally from Fillmore, Dr. Olson graduated Summa Cum Laude from Southern Utah University where he earned the R. Kenneth Benson Award, SUU’s highest student award. He earned his optometry degree at Southern California College of Optometry and then completed an MBA and Optometric residency at Northeastern State University. Dr. Olson is excited to serve our practice using his advanced training and vast experience with specialty contact lenses including scleral lenses.

Dr. Olson enjoys doing a variety of activities with his family in beautiful Southern Utah. Some of these include camping, backpacking, fishing, woodworking, pickleball and just being together.`},
  ]

  useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === 'Escape') {
        setOpen('modal');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen('modal');
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const openModal = (index: number) => {
    setModalPerson(index)
    setOpen('modal active')
  }

  return (
    <>
      <div className='dop component'>
        {type === 'round' ?
          people.length && people.map((person, index) => {
            return <div className='person round' key={index} onClick={() => openModal(index)}>
              <div className="image-wrapper">
                <Image src={person.image} alt={person.alt} width={212} height={265} />
              </div>
              <p>{person.fname} {person.lname},</p>
              <p>{person.title}</p>
              <p className='info'>i</p>
            </div>
          })
          :
          people.length && people.map((person, index) => {
            return <div className='person square' key={index} onClick={() => openModal(index)}>
              <div className="image-wrapper">
                <Image src={person.image} alt={person.alt} width={212} height={265} />
              </div>
              <div className="details">
                <div className="name-and-title">
                  <p>{person.fname} {person.lname},</p>
                  <p>{person.title}</p>
                </div>
                <p className='info'>i</p>
              </div>
            </div>
          })
        }
        <div className={open} ref={modalRef as LegacyRef<HTMLDivElement>}>
          <div className="modal-content">
            <div className='person'>
              <Image src={people[modalPerson].image} alt={people[modalPerson].alt} width={212} height={265} />
              <div className="name-and-title">
                <p>{people[modalPerson].fname} {people[modalPerson].lname},</p>
                <p>{people[modalPerson].title}</p>
              </div>
            </div>
            <p className="bio">{people[modalPerson].bio}</p>
          </div>
          <a id='close' onClick={() => setOpen('modal')}></a>
        </div>
      </div>
    </>
  )
}

export default DOP;