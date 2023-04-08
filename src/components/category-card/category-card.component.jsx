import "./category-card.comopent.scss";

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <div className="category-container">
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }}></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryCard;
