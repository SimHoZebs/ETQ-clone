import data from "./data";
import Footer from "./comp/Footer";
import Navbar from "./comp/Navbar";
import FavModels from "./comp/FavModels";

export function App() {
  return (
    <div class="App font-lato relative flex w-screen flex-col gap-y-14 pb-9 ">
      <div class="relative flex h-[calc(100vh-60px)] flex-col justify-end overflow-hidden lg:h-screen">
        <Navbar />

        <div class="items-between gap-y-14 px-4 lg:flex lg:h-full lg:w-full lg:px-0">
          <img
            class="absolute left-0 bottom-0 -z-10 h-full w-full object-cover lg:hidden"
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

          <div class="lg:(text-black justify-center) flex w-1/3 w-2/3 flex-col items-start gap-y-4 pb-4 text-white lg:px-10">
            <p class="font-bold">Just in:</p>
            <h2 class="text-2xl lg:text-3xl">
              New season's wardrobe essentials
            </h2>
            <p>Designed for any time and every occasion.</p>
            <button class="text-xs underline lg:text-base">Shop now</button>
          </div>
        </div>
      </div>

      <section class="grid grid-cols-2 gap-y-12 gap-x-4 px-4 text-sm font-light md:flex">
        <div class="col-span-2 md:col-auto ">
          <img src={data.intro.imgURL} alt="pic 2" />
          <img src="" alt="" />
          <div class="">
            <h3 class="font-bold">Modular Packaging</h3>
            <p>Unboxing like never before</p>
          </div>
          <a class="underline" href="/">
            Read story
          </a>
        </div>

        {[...Array(2)].map((num) => (
          <div key={num}>
            <img src={data.intro.imgURL} alt="pic 2" />
            <div>
              <h3 class="font-bold">{data.intro.name}</h3>
              <p>{data.intro.desc}</p>
            </div>
            <a class="underline" href="/">
              Read story
            </a>
          </div>
        ))}
      </section>

      <FavModels />

      <section class="md:(flex gap-x-6) px-4">
        {[...Array(2)].map((num) => (
          <div key={num}>
            <img src={data.store.imgURL} alt="" />
            <h4 class="mt-2 font-bold">{data.store.name}</h4>
            <p class="text-sm">{data.store.desc}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
