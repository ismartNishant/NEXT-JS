import { notFound } from "next/navigation";
export default function ReviewDetail({ params,

}: {
    params: {
        productid: string,
        reviewsid: string
    }
}) {
    if (parseInt(params.reviewsid) > 1000) {
        notFound();
        // throw Error("Review not found this time"); ------------- for error.tsx
    };

    return (
        <> 
            <h1>Review {params.reviewsid} for Product {params.productid}  </h1>
        </>
    );
}