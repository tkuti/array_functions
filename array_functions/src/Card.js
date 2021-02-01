function Card({datas}) {
    return (
      <div className="card">
          <p>{datas.name}</p>
          <p>{datas.age}</p>
          <p>{datas.balance}</p>
          <p>{datas.currency}</p>
      </div>
    );
  }
  
  export default Card;