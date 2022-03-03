import { Icon } from "@iconify/react";
import { useEffect, useState } from "preact/hooks";

import data from "../data";

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  let timer: null | number = null;

  function onScroll() {
    setScrolling(true);
    setAtTop(document.documentElement.scrollTop !== 0 ? false : true);

    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setScrolling(false);
    }, 1000);
  }
  function openMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav
      class={`fixed left-0 top-0 z-10 m-1 w-[calc(100%-0.5rem)] py-1 lg:(px-8 py-4 m-2) ${
        atTop ? "" : ""
      } ${scrolling || atTop || menuOpen ? "" : "duration-1000 opacity-0"}`}
    >
      <div class="flex items-center justify-between w-full px-4 py-2">
        <button
          class="flex h-8 w-8 items-center py-1 lg:hidden"
          onClick={openMenu}
        >
          <Icon icon="mdi:menu" width="36" height="36" />
        </button>
        <div class="flex gap-x-4 items-center">
          <h1 class="text-3xl font-black pr-8">Logo</h1>

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
            atTop && !menuOpen ? "" : "bg-white opacity-95"
          }`}
        ></div>
      </div>

      <div
        class={`lg:hidden duration-200 bg-white flex flex-col overflow-hidden items-start ${
          menuOpen ? "max-h-screen" : "max-h-0 gap-y-0 p-0"
        }`}
      >
        {data.menu.map((item, i) => (
          <div key={i} class="w-full">
            <div class="flex justify-between items-center px-4 py-6">
              <button class="border-b duration-300 hover:(border-black) border-white">
                {item}
              </button>

              {item !== "Search" ? (
                item === "Shoecare" ? (
                  ""
                ) : (
                  <Icon icon="akar-icons:chevron-right" />
                )
              ) : (
                <Icon icon="mdi:magnify" />
              )}
            </div>
            <hr class="border-t w-full border-t-gray-200" />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
