import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { Store } from '../utils/Store';


const Success = () => {
  
  const router = useRouter();
  const { id } = router.query;


  const { state } = useContext(Store);
  const { userInfo } = state;

  const paymentSuccess = async () => {
        try {
            await axios.put(
              `/api/orders/${id}/pay`,
              id,
              {
                headers: { authorization: `Bearer ${userInfo.token}` },
              },

              
            );
           
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        paymentSuccess();
    });
  
  return (
    <div>
      <div>
        
        <h2>Thank you for your order!</h2>
        <p>Check your email inbox for the receipt.</p>
        <p>
          If you have any questions, please email
          <a href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success