import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        heading="add an item"
        subheading="What's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("name")} />
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("category")}
          >
            <option disabled selected>
              Select a category
            </option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="drinks">Drinks</option>
            <option value="dessert">Dessert</option>
            <option>Greedo</option>
          </select>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
