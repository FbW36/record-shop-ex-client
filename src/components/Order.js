const Order = ({ data }) => {
  const albumsList = data.records.map((record) => {
    const pricePerRecord = record.quantity * record.record.price;
    return (
      <div className='record'>
        <div className='cover'>
          <img src={record.record.cover}></img>
        </div>
        <div className='info'>
          <p>
            {record.quantity} x {record.record.title}
          </p>
          <p>{record.record.artist}</p>
          <p>{record.record.price} $</p>
        </div>
        <div className='price'>
          <p>TOTAL</p>
          <p>{parseFloat(pricePerRecord).toPrecision(5)} $</p>
        </div>
      </div>
    );
  });

  return (
    <div className='order'>
      <div className='general-info'>
        <p>{data.creationDateBeautified}</p>
        <p>{data.orderPrice} $</p>
      </div>
      <div className='albums'>{albumsList}</div>
    </div>
  );
};

export default Order;
