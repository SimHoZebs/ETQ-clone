import data from "./data";

export function App() {
  return (
    <div class="App font-lato flex flex-col gap-y-14">
      <div class="px-4 relative flex flex-col justify-end h-[calc(100vh-60px)] overflow-hidden">
        <nav class="flex w-full justify-between items-center fixed left-0 top-0 px-4">
          <button class="w-6 h-6 flex flex-col justify-between">
            <div class="bg-black h-[3px] w-full"></div>
            <div class="bg-black h-[3px] w-full"></div>
            <div class="bg-black h-[3px] w-full"></div>
          </button>
          <h1 class="text-4xl">Test</h1>
          <button class="rounded-full bg-black w-6 h-6 text-white text-xs">
            0
          </button>
        </nav>

        <img
          class="absolute left-0 bottom-0 -z-10 w-full h-full object-cover"
          src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Frame_64_1200x.png?v=1645111167"
          alt="Main item"
          height={1920}
          width={1080}
          sizes="100vw"
        />

        <div class="text-white flex flex-col gap-y-4 items-start w-2/3 pb-4">
          <p class="font-bold">Just in:</p>
          <h2 class="text-2xl">New season's wardrobe essentials</h2>
          <button class="underline text-xs">Shop now</button>
        </div>
      </div>

      <section class="px-4 grid gap-y-12 gap-x-4 grid-cols-2 font-light">
        <div class="text-sm col-span-2 ">
          <img src={data.intro[0].imgURL} alt="pic 2" />
          <div class="">
            <h3 class="font-bold">Modular Packaging</h3>
            <p>Unboxing like never before</p>
          </div>
          <a class="underline" href="/">
            Read story
          </a>
        </div>

        {data.intro.map((item, index) => (
          <div key={index} class="text-sm">
            <img src={item.imgURL} alt="pic 2" />
            <div>
              <h3 class="font-bold">Modular Packaging</h3>
              <p>Unboxing like never before</p>
            </div>
            <a class="underline" href="/">
              Read story
            </a>
          </div>
        ))}
      </section>

      <section>
        <h2 class="text-2xl">Our favorite models</h2>
        <div>
          <img src={data.favs} alt="" />
          <h4>Example text</h4>
          <p>Example description</p>
          <p>$999</p>
        </div>
      </section>

      <section>
        {data.stores.map((store, index) => (
          <div key={index}>
            <img src={store.imgURL} alt="" />
            <h4>{store.name}</h4>
            <p>{store.desc}</p>
          </div>
        ))}
      </section>

      <footer class="flex flex-col gap-2 px-4 font-light">
        <div class="">
          <h4 class="font-bold">About</h4>
          <span>
            Founded in 2010 in Amsterdam, ETQ derived under the mindset of
            eliminating over-accessorized branding and focusing primarily on
            letting the quality of the product speak for itself.
          </span>
          <a class="underline" href="/">
            Read more
          </a>
        </div>

        <div class="flex flex-col">
          <h4 class="font-bold">Address</h4>
          <a class="" href="/">
            Singel 465 <br />
            1012 WP Amsterdam <br />
            The Netherlands
          </a>
        </div>

        <div class="flex flex-col">
          <h4 class="font-bold">Contact</h4>
          <a href="mailto:">Email us</a>
          <a href="tel:+31202256153">+31 (0)20 22 56 153</a>
        </div>

        <div>
          <h4 class="font-bold">Info</h4>
          <a href="/">Shipping Info</a>
          <a href="/">Shipping Info</a>
          <a href="/">Shipping Info</a>
          <a href="/">Shipping Info</a>
        </div>

        <div>
          <h4 class="font-bold">Follow us</h4>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Pinterest</a>
        </div>
      </footer>
    </div>
  );
}
