import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { productid: string }

}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iphone ${params.productid}`)
        }, 100)
    })

    return {
        title: `Product ${title}`
    }
}



export default function ProductDetail({ params,

}: {
    params: { productid: string }
}) {
    return (
        <>
            <h1>Product Details about {params.productid} </h1>
        </>
    );
}