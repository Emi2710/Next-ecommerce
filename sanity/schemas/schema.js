// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import product from './documents/product';
import user from './documents/user';
import order from './documents/order';
import orderItem from './documents/orderItem';
import paymentResult from './documents/paymentResult';
import shippingAddress from './documents/shippingAddress';

import blockContent from './objects/blockContent';
import mainImage from './objects/mainImage';
import comment from './documents/comment';

export default createSchema({

  name: 'default',
  
  types: schemaTypes.concat([
   
    product,
    user,
    order,
    orderItem,
    paymentResult,
    shippingAddress,
    blockContent,
    mainImage,
    comment

  ]),
});
