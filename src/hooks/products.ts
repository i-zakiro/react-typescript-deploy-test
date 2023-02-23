import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../model";

export function useProducts () {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const addProduct = (product: IProduct) => {
      setProducts(prev => [...prev, product])
    }
  
    async function fetchProducts() {
      try {
        setLoading(true)
        let response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
        setProducts(response.data)
        setLoading(false)
      } catch (e: unknown) {
        let error = e as AxiosError
        setLoading(false)
        setError(error.message)
      }
    }
  
    useEffect(() => {
      fetchProducts()
    }, [])

    return { products, loading, error, addProduct }
}