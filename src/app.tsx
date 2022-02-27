import { useEffect, useState } from "preact/hooks";
import data from "./data";
import FooterItem from "./FooterItem";

export function App() {
  const [atTop, setAtTop] = useState(true);

  function onScroll() {
    if (document.documentElement.scrollTop !== 0) {
      setAtTop(false);
    } else {
      setAtTop(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div class="App font-lato relative flex flex-col gap-y-14 pb-9">
      <div class="relative flex h-[calc(100vh-60px)] flex-col justify-end overflow-hidden">
        <nav
          class={`fixed left-0 top-0 m-1 flex w-[calc(100%-0.5rem)] items-center justify-between p-1 px-4 ${
            atTop ? "" : ""
          }`}
        >
          <button class="flex h-6 w-6 flex-col justify-between py-1">
            <div class="h-[2px] w-full bg-black"></div>
            <div class="h-[2px] w-full bg-black"></div>
            <div class="h-[2px] w-full bg-black"></div>
          </button>
          <h1 class="text-3xl font-black">Company</h1>
          <button class="h-6 w-6 rounded-full bg-black text-xs text-white">
            0
          </button>
          <div
            class={`absolute top-0 left-0 -z-10 h-full w-full duration-150 ${
              atTop ? "" : "bg-white opacity-95"
            }`}
          ></div>
        </nav>

        <div class="gap-y-14 px-4">
          <img
            class="absolute left-0 bottom-0 -z-10 h-full w-full object-cover"
            src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Frame_64_1200x.png?v=1645111167"
            alt="Main item"
            height={1920}
            width={1080}
            sizes="100vw"
          />

          <div class="flex w-2/3 flex-col items-start gap-y-4 pb-4 text-white">
            <p class="font-bold">Just in:</p>
            <h2 class="text-2xl">New season's wardrobe essentials</h2>
            <button class="text-xs underline">Shop now</button>
          </div>
        </div>
      </div>

      <section class="grid grid-cols-2 gap-y-12 gap-x-4 px-4 text-sm font-light md:flex">
        <div class="col-span-2 md:col-auto ">
          <img src={data.intro.imgURL} alt="pic 2" />
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

      <section class="flex flex-col px-4">
        <h2 class="text-2xl">Our favorite models</h2>
        <div class="flex touch-pan-x gap-x-4 overflow-x-scroll">
          {[...Array(4)].map((num) => (
            <figure
              key={num}
              class="flex min-w-[60%] flex-col pt-4 text-sm"
              style={{ "-ms-overflow-style": "none" }}
            >
              <img class="" src={data.favs} alt="" />
              <h4 class="pt-1 text-base font-bold text-emerald-600">
                Example text
              </h4>
              <figcaption>Example description</figcaption>
              <figcaption>$999</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section class="px-4">
        {data.stores.map((store, index) => (
          <div key={index}>
            <img src={store.imgURL} alt="" />
            <h4 class="font-bold">{store.name}</h4>
            <p class="text-sm">{store.desc}</p>
          </div>
        ))}
      </section>

      <footer class="flex flex-col gap-y-4 p-4 font-light">
        <FooterItem title="About">
          <div>
            <span>
              Founded in 2010 in Amsterdam, ETQ derived under the mindset of
              eliminating over-accessorized branding and focusing primarily on
              letting the quality of the product speak for itself.{" "}
            </span>
            <a class="underline" href="/">
              Read more
            </a>
          </div>
        </FooterItem>

        <FooterItem title="Address">
          <a class="" href="/">
            Singel 465 <br />
            1012 WP Amsterdam <br />
            The Netherlands
          </a>
        </FooterItem>

        <FooterItem title="Contact">
          <a href="mailto:">Email us</a>
          <a href="tel:+31202256153">+31 (0)20 22 56 153</a>
        </FooterItem>

        <FooterItem title="Info">
          <a href="/">Shipping Info</a>
          <a href="/">Careers</a>
          <a href="/">Wholesale</a>
          <a href="/">Terms of Service</a>
        </FooterItem>

        <FooterItem title="Follow us">
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Pinterest</a>
        </FooterItem>

        <h4 class="font-bold">Newsletter</h4>
        <form class="flex w-full justify-between gap-x-4" action="">
          <input
            class="w-full border-b border-gray-400 outline-0"
            type="email"
            name=""
            id=""
          />
          <button class="" type="submit">
            Submit
            <hr class="border-black" />
          </button>
        </form>

        <p>
          This site is a copy of a brilliant site{" "}
          <a class="underline" href="https://etq-amsterdam.com">
            {" "}
            etq.amsterdam.com
          </a>{" "}
          built as a submission for club application.
        </p>
      </footer>
    </div>
  );
}
