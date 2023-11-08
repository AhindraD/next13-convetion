import React from 'react'

interface Props {
    params: {
        slug: string[];
    }
}
const ProductPage = ({ params: { slug } }: Props) => {
    return (
        <h1 className="my-2 font-semibold text-2xl">ProductPage {slug}</h1>
    )
}

export default ProductPage