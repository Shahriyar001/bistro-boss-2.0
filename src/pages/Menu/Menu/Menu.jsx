import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertimg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../../assets/menu/pizza-bg.jpg";
import saladimg from "../../../assets/menu/salad-bg.jpg";
import soupimg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle
        subheading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offerd menu items  */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items  */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertimg}
      ></MenuCategory>
      {/* Pizza menu items  */}
      <MenuCategory items={pizza} title="pizza" img={pizzaimg}></MenuCategory>
      {/* Salad menu items  */}
      <MenuCategory items={salad} title="salad" img={saladimg}></MenuCategory>
      {/* Soup menu items  */}
      <MenuCategory items={soup} title="soup" img={soupimg}></MenuCategory>
    </div>
  );
};

export default Menu;
