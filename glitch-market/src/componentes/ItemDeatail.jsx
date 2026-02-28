function ItemDetail({item}){
    return(
        <div>
            <img src={item.url} alt={item.title} />
            <h2>{item.title}</h2>
            <h5>{item.price}</h5>
            <p>{item.description}</p>
        </div>
    );
}

export default ItemDetail;