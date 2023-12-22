const CardData = ({ data }) => {
  return (
    <div className="card">
      <h2>{data?.title}</h2>
      <p>{data?.content}</p>
      <p>{data?.author}</p>
      <p>{data?.date}</p>
    </div>
  );
};

export default CardData;
