import { useEffect, useState } from "react"
import useHttp from "../../hooks/use-http"

const Submission = props => {
  const [orders, setOrders] = useState([])

  const { isLoading, error, sendRequest: fetchOrders } = useHttp()

  useEffect(() => {
    const transformOrders = ordersObj => {
      const loadedOrders = []

      for (const orderKey in ordersObj) {
        loadedOrders.push({
          id: orderKey,
          name: ordersObj[orderKey].name,
          address: ordersObj[orderKey].address,
          order: ordersObj[orderKey].order
        })
      }
      setOrders(loadedOrders)
    }

    fetchOrders (
      { url: 'https://food-order-app-db98e-default-rtdb.firebaseio.com/orders.json' },
      transformOrders
    )
  }, [fetchOrders])

  return (
      <div>
        <h1>Your order was submitted!</h1>
      </div>  
    )
}

export default Submission