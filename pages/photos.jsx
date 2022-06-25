import React from 'react'
import HeadInfo from '../components/HeadInfo';
import Image from 'next/image';
import photoStyles from '../styles/Photo.module.css';
import Link from 'next/link';
function Photos({photos}) {
  return (
    <div>
      <HeadInfo title="My Blog Photo"/>
        <h1>My Photos!</h1>
        <ul className={photoStyles.photo}>
          {photos.map(photo => (
            <li key={photo.id}>
              <Link href={`/photos/${photo.id}`}>
                <Image src={`${photo.thumbnailUrl}.png`} width={100} height={100} alt={photo.title}/>
              </Link>
              <span>{photo.title}</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10');
  const photos = await res.json();

  return {
    props: {
      photos
    }
  }
}

export default Photos;