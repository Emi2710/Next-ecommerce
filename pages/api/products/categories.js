import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Roues', 'Pièces de rechange', 'Accessoires', 'Consommables'];
  res.send(categories);
});

export default handler;


