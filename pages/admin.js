import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import client from '../utils/client';


function Admin () {

    const [ordersData, setOrdersData] = useState({
    orders: []
  });

  const { orders } = ordersData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await client.fetch(`*[_type == "order"]`);

        setOrdersData({orders})
        console.log({orders})
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout title="Historique de commandes">
      <Typography component="h1" variant="h1">
        Historique de commandes
      </Typography>
     
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>DATE</TableCell>
                <TableCell>CLIENT</TableCell>
                <TableCell>TOTAL</TableCell>
                <TableCell>PAYÉ</TableCell>
                <TableCell>STATUT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order._id}>
                  <TableCell>{order._id}</TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>{order.userName}</TableCell>
                  <TableCell>€{order.totalPrice}</TableCell>
                  <TableCell>
                    {order.isPaid ? (<Typography sx={{backgroundColor: '#DDEEE5', color: '#4C9966', textAlign: 'center', borderRadius: '12px'}}>Payé</Typography>) : (<Typography sx={{backgroundColor: '#F1D2D2', color: '#994C4C', textAlign: 'center', borderRadius: '12px'}}>Impayé</Typography>)}
                  </TableCell>
                  <TableCell>
                    {order.isDelivered ? (<Typography sx={{backgroundColor: '#DDEEE5', color: '#4C9966', textAlign: 'center', borderRadius: '12px'}}>Livré</Typography>) : order.isSent ? (<Typography sx={{backgroundColor: '#F4BE97', color: '#A45635', textAlign: 'center', borderRadius: '12px'}}>Envoyé</Typography>) : (<Typography sx={{backgroundColor: '#F1D2D2', color: '#994C4C', textAlign: 'center', borderRadius: '12px'}}>En attente</Typography>)}
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
    </Layout>
  )
}

export default Admin