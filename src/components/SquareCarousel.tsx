import Link from "next/link";

export default function SquareCarousel() {
  return (
    <div className='slider'>
      <Link href='#slide-1' scroll={false}>
        1
      </Link>
      <Link href='#slide-2' scroll={false}>
        2
      </Link>
      <Link href='#slide-3' scroll={false}>
        3
      </Link>
      <Link href='#slide-4' scroll={false}>
        4
      </Link>
      <Link href='#slide-5' scroll={false}>
        5
      </Link>

      <div className='slides'>
        <div id='slide-1'>1</div>
        <div id='slide-2'>2</div>
        <div id='slide-3'>3</div>
        <div id='slide-4'>4</div>
        <div id='slide-5'>5</div>
      </div>
    </div>
  );
}
