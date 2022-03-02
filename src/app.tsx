import data from "./data";
import Footer from "./comp/Footer";
import Navbar from "./comp/Navbar";
import FavSection from "./comp/FavModels";
import IntroCard from "./comp/IntroCard";
import Hero from "./comp/Hero";

export function App() {
  return (
    <div class="App font-lato relative flex flex-col gap-y-16 pb-9">
      <div class="relative flex h-[calc(100vh-60px)] flex-col justify-end overflow-hidden lg:h-screen">
        <Navbar />
        <Hero />
      </div>

      <section class="md:(flex) lg:(gap-x-8 px-8) grid grid-cols-2 gap-y-12 gap-x-4 px-4 text-sm font-light">
        <IntroCard class="col-span-2" />

        {[...Array(2)].map((num) => (
          <IntroCard />
        ))}
      </section>

      <FavSection />

      <section class="md:(flex gap-x-6) px-4 lg:px-8">
        {[...Array(2)].map((num) => (
          <div key={num}>
            <img src={data.store.imgURL} alt="" />
            <h4 class="mt-2 font-bold">{data.store.name}</h4>
            <p class="text-sm">{data.store.desc}</p>
          </div>
        ))}
      </section>

      <Footer />

      <div class="gap-x-4 px-4 lg:px-8 md:flex">
        <h4 class="font-bold md:font-normal">Newsletter</h4>
        <form class="flex w-full gap-x-4" action="">
          <input
            class="w-full max-w-sm border-b border-gray-400 outline-0 lg:max-w-xs"
            type="email"
            name=""
            id=""
          />
          <button class="" type="submit">
            Submit
            <hr class="border-black" />
          </button>
        </form>
      </div>

      <p class="px-4 lg:px-8">
        This site is a copy of a brilliant site{" "}
        <a class="underline" href="https://etq-amsterdam.com">
          {" "}
          etq.amsterdam.com
        </a>{" "}
        built as a submission for club application.
      </p>
    </div>
  );
}
