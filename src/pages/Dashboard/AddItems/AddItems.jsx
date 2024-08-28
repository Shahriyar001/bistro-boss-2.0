import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
console.log(image_hosting_key);
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data.image[0].name);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosPublic.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          title: `${data.name} add Successfully`,
          showClass: {
            popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
          },
          hideClass: {
            popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
          },
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="add an item"
        subheading="What's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default AddItems;
