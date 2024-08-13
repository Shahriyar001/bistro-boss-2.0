const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div>
      <img src={image} alt="" />
      <div>
        <h3>{name}---------</h3>
        <p>{recipe}</p>
      </div>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;
