import nc from 'next-connect';
import { isAuth } from '../../../utils/auth';
import paypal from "@paypal/checkout-server-sdk";
// Creating an environment
let clientId = process.env.PAYPAL_CLIENT_ID;
let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

const handler = nc();
handler.use(isAuth);

handler.get(async (req, res) => {
  if (req.method === "POST") {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
          },
        },
      ],
    });
    const response = await client.execute(request);

    return res.json({ id: response.result.id });
  }
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

export default handler;
