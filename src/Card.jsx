function Card(props) {

  const { inCart, addToCart, removeFromCart, toShowDetails, hideDetails, showDetails, name, price, img } = props
  
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="" />
      </div>
      <div className="card__wrapper">
        <div className="card__main">
          <div className="card__main_left">
            <b>{name}</b>
            <b>{price}</b>
          </div>
          <div className="card__main_right">
            <div
              className="card__details"
              onClick={toShowDetails}
            >
              Детали
            </div>
          </div>
          { showDetails && <div className="card__details_roll-out">
            <div 
              className="card__details_close"
              onClick={hideDetails}> x </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            natus officia beatae odio harum minus aspernatur saepe vitae a
            corrupti.
          </div> }
        </div>
        <div className="card__hr"></div>
        <div className="card__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, perspiciatis.
        </div>
        <div 
          className={inCart ? "card__buy card__buy_disable" 
          : "card__buy card__buy_able"}
          onClick={addToCart}
        >
          {inCart ? "Уже в корзине" 
            : "Добавить в корзину"}
        </div>
        {inCart && (
          <div 
            className="card__remove-from"
            onClick={removeFromCart}
          >Удалить из корзины</div>
        )}
      </div>
    </div>
  )
};
export default Card;