import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function Order() {
    const context = useContext(myContext);
    const {name} = context;
  return (
   <Layout>
    Order
    <h1>
        Name : {name}
    </h1>
    </Layout>
  )
}

export default Order
