import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed  text-white my-20">
      <div className="bg-slate-500 bg-opacity-60 py-8">
        <SectionTitle
          subheading="check it out"
          heading="Featured Item"
        ></SectionTitle>
        <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where i ger some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              exercitationem dicta voluptas voluptates ipsum explicabo suscipit
              consectetur repudiandae harum illum ut corporis unde blanditiis
              beatae praesentium necessitatibus repellat commodi nemo
              consequatur, placeat amet omnis maiores? Dolores facilis optio
              repellat, rem totam animi, ipsum placeat exercitationem, culpa
              omnis neque voluptatem quam.
            </p>
            <button className="btn btn-outline border-0 border-b-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
