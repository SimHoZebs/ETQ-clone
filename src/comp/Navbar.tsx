import { Icon } from "@iconify/react";
import { useEffect, useState } from "preact/hooks";

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  let timer: null | number = null;

  function onScroll() {
    setScrolling(true);

    if (document.documentElement.scrollTop !== 0) {
      setAtTop(false);
    } else {
      setAtTop(true);
    }

    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      console.log("yo");
      setScrolling(false);
    }, 300);
  }

  return (
    <nav
      class={`fixed left-0 top-0 m-1 flex w-[calc(100%-0.5rem)] items-center justify-between py-1 px-4 lg:(px-8 py-4 m-2) ${
        atTop ? "" : ""
      } ${
        (scrolling && !atTop) || (!scrolling && atTop)
          ? ""
          : "duration-1000 opacity-0"
      }`}
    >
      <button class="flex h-8 w-8 items-center py-1 lg:hidden">
        <Icon icon="mdi:menu" width="36" height="36" />
      </button>

      <div class="flex gap-x-4 items-center">
        <h1 class="text-3xl font-black">Company</h1>
        <div class="<lg:hidden flex gap-x-4 self-center">
          <button>Shop All</button>
          <button>Permanent Collection</button>
          <button>Shoecare</button>
        </div>
      </div>

      <div class="flex gap-x-4">
        <div class="flex gap-x-4 <lg:hidden">
          <button>Search</button>
          <button>Help</button>
          <button>My Account</button>
        </div>
        <button class="h-6 w-6 rounded-full bg-black text-xs text-white">
          0
        </button>
      </div>
      <div
        class={`absolute top-0 left-0 -z-10 h-full w-full duration-150 ${
          atTop ? "" : "bg-white opacity-95"
        }`}
      ></div>
    </nav>
  );
};

export default Navbar;
