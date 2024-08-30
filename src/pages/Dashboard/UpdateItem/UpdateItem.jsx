import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const UpdateItem = () => {
  const item = useLoaderData();
  const { register, handleSubmit } = useForm();
  console.log(item);
  return (
    <div>
      <SectionTitle
        heading="Updat an Item"
        subheading="Update Info"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit()}>
          <label className="form-control my-6 w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="lg:flex gap-6">
            {/* category */}

            <label className="form-control my-6 w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                className="select select-bordered w-full"
                defaultValue="default"
                {...register("category", { required: true })}
              >
                <option value="default" disabled>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* price  */}
            <label className="form-control my-6 w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div>
            {/* delails  */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="Details"
              ></textarea>
            </label>
          </div>
          <div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input my-6 form-control w-full max-w-xs"
            />
          </div>

          <button className="btn">
            Add Item <FaUtensils className="my-4" />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
