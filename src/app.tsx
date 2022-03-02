import data from "./data";
import Footer from "./comp/Footer";
import Navbar from "./comp/Navbar";
import FavSection from "./comp/FavModels";
import IntroCard from "./comp/IntroCard";

export function App() {
  return (
    <div class="App font-lato relative flex flex-col gap-y-14 pb-9">
      <div class="relative flex h-[calc(100vh-60px)] flex-col justify-end overflow-hidden lg:h-screen">
        <Navbar />

        <div class="items-between lg:(flex w-full) gap-y-14 px-4 lg:h-full lg:px-0">
          <img
            class="absolute left-0 bottom-0 -z-10 h-full object-cover lg:hidden"
            src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Frame_64_1200x.png?v=1645111167"
            alt="Main item"
            height={1920}
            width={1080}
            sizes="100vw"
          />

          <img
            class="<lg:hidden w-2/3 object-cover"
            alt="Main item"
            height={2000}
            width={3000}
            sizes="100vw"
            src=" https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Frame_67_1920x.png?v=1645111168"
          />

          <div class="lg:(text-black justify-center) flex w-2/3 flex-col items-start gap-y-4 pb-4 text-white lg:px-10">
            <p class="font-bold">Just in:</p>
            <h2 class="text-2xl lg:text-3xl">
              New season's wardrobe essentials
            </h2>
            <p>Designed for any time and every occasion.</p>
            <button class="text-xs underline lg:text-base">Shop now</button>
          </div>
        </div>
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
