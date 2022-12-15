import NextLink from 'next/link';
import React from 'react';

export default function Footer ({footer}) {

  
  return (
    <div>
      <ul className='list-style-none'>
        <NextLink href={`/footer/${footer.slug.current}`} passHref >
          <a>{footer.title}</a>  
        </NextLink>
        
      </ul>
    </div>
  )
}
