export default function Docs({ params }: { params: { slug: string[] } }) {
    return (
        <>
            <h1>Product Details about {params.slug}</h1>
        </>
    );
}
