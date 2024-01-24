import Link from "next/link";

import Hero from "../components/layout/Hero";
import Header from "../components/layout/Header";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";


export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate amet laborum dolorem distinctio quaerat officia numquam iste. Nesciunt temporibus molestias quia! Officia totam vitae repellendus omnis rem harum nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate amet laborum dolorem distinctio quaerat officia numquam iste. Nesciunt temporibus molestias quia! Officia totam vitae repellendus omnis rem harum nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate amet laborum dolorem distinctio quaerat officia numquam iste. Nesciunt temporibus molestias quia! Officia totam vitae repellendus omnis rem harum nobis.
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
