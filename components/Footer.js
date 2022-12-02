import NextLink from 'next/link';
import React from 'react';

export default function Footer ({footer}) {
  return (
    <div>
      <ul className='list-style-none'>
        <NextLink href={`/footer/${footer.slug.current}`} passHref>
          <li>{footer.title}</li>  
        </NextLink>
        
      </ul>
    </div>
  )
}
