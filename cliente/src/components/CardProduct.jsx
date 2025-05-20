export function CardProduct({img, nombre, precio, descripcion='Sin Descripcion'}) {
    return (
        <div className="card bg-base-100 w-72 shadow-sm">
            <figure className="h-48 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt= {nombre} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {nombre} </h2>
                <p>{descripcion}</p>
                <span className="text-lg font-semibold text-green-600"> {precio} $ </span>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Buy Now</button>
                </div>
            </div>
        </div>
    )
}