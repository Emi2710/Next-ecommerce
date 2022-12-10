import nc from 'next-connect';
//import bcrypt from 'bcryptjs';
import { signToken } from '../../../utils/auth';
import client from '../../../utils/client';

import Email from '../../../utils/emails/resetPassword';

const handler = nc();

handler.post(async (req, res) => {
  const user = await client.fetch(`*[_type == "user" && email == $email][0]`, {
    email: req.body.email,
  });
  if (user) {
    const token = signToken({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });

    await new Email(user, token).sendMagicLink();

    return res.status(200).json({
        success: true,
        message: 'Veuillez vérifier votre boîte mail.'
    })
    
  } else {
    return res.status(500).json({ 
        success: false,
        message: 'Il semble y avoir eu une erreur. Veuillez réessayer.'
    });
  }
});

export default handler;
