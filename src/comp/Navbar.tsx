import { useEffect, useState } from "preact/hooks";

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onScroll() {
    if (document.documentElement.scrollTop !== 0) {
      setAtTop(false);
    } else {
      setAtTop(true);
    }
  }

  return (
    <nav
      class={`fixed left-0 top-0 m-1 flex w-[calc(100%-0.5rem)] items-center justify-between p-1 px-4 lg:px-8 ${
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
  );
};

export default Navbar;
