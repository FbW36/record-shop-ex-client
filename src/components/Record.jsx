const Record = ({ data }) => {
  return (
    <div className='record'>
      <img src={data.cover} alt={data.title} />
    </div>
  );
};

export default Record;
