import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div className="">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p className="py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos
            hic rem error voluptatum, quasi harum natus dignissimos dolorum
            maxime cupiditate beatae consequatur sapiente ad ipsam voluptatibus
            minus, nemo vero quos deleniti consectetur. Illum quia eaque
            pariatur? Ipsam accusamus dolore in quam labore temporibus
            consequatur dignissimos maxime deserunt perferendis nisi
            voluptatibus alias, beatae quis, nesciunt, quo sit harum impedit ut
            molestias sint omnis. Molestias omnis iusto est sequi mollitia quasi
            veritatis exercitationem perferendis explicabo quas hic consectetur
            ex ratione illum obcaecati ab vitae incidunt a atque, commodi totam
            quibusdam voluptatem! Cum voluptates architecto adipisci dicta modi
            ipsam consequatur repellendus harum.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">Lorem ipsum dolor </h3>
              <p className="py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">Lorem ipsum dolor </h3>
              <p className="py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center uppercase p-3">
          <p className="py-2">get and additional 10% 0ff</p>
          <p className="py-4">12 hours left</p>
          <p className="b bg-slate-900 text-white py-3">book now and safe</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-4">
            <label className=" uppercase">destination</label>
            <select className="border  py-2 px-1 rounded-md capitalize">
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
              <option>option four</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label className=" uppercase">check-in</label>
            <input
              type="date"
              className="border py-2 px-1 rounded-md capitalize"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className=" uppercase">check-out</label>
            <input
              type="date"
              className="border  py-2 px-1 rounded-md capitalize"
            />
          </div>
          <button className="w-full mt-2 uppercase">
            rates & availabilities
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
