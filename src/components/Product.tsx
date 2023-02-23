import React, { useState } from "react"
import { IProduct } from "../model"

interface ProductProps {
    product: IProduct
}

export function Product ({ product }: ProductProps) {
    let [details, setDetails] = useState(false);
    let bgClasses = details ? "bg-blue-400" : "bg-yellow-400"
    let otherClasses = ["py-2 px-4 border", bgClasses]

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={product.image} alt={product.title} className='w-1/6' />
            <p>{ product.title }</p>
            <p className="font-bold">{ product.price }</p>
            <button className={otherClasses.join(' ')} onClick={() => setDetails(details = !details)}>
                {details ? "Hide details!" : "Show details"}
            </button>
            { details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span></p>
            </div> }
        </div>
    )
}