import CategoryCard from "../category-card/category-card.component";
import "./directory.component.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryCard title={title} key={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
