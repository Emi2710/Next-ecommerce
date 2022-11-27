import Date from './date'
import { Rating } from '@mui/material';
import {
  Button,
  TextField,
  Typography,
} from '@mui/material';

export default function Comments({ comments = [] }) {

  
  return (
    <>
      <Typography component="h1" variant="h1" sx={{marginBottom: '40px'}}>
        Avis clients
      </Typography>
      <ul className='list-style-none'>
        {comments?.map((comment) => (
          <li key={comment._id}>
            <Typography sx={{fontWeight: 'bold'}}>
              {comment.name} (
              <Date dateString={comment._createdAt} />)
            </Typography>
            
            <Rating value={comment.rating} readOnly />
            <p>{comment.comment}</p>
            <hr/>
          </li>
        ))}
      </ul>
    </>
  )
}