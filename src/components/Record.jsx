import AddToCart from './AddToCart';

const Record = ({ data }) => {
  return (
    <div className='record'>
      <img src={data.cover} alt={data.title} />
      <AddToCart key={data._id} data={data} />
    </div>
  );
};

export default Record;
