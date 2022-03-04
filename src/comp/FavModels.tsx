import { useRef, useState } from "preact/hooks";
import data from "../data";
import Left from "../icons/Left";
import Right from "../icons/Right";

const FavSection = () => {
  const favSectionRef = useRef<HTMLDivElement>(null);
  const [currIndex, setCurrIndex] = useState(0);

  function scrollTo(scrollAmount: -2 | -1 | 1 | 2) {
    if (!favSectionRef.current) return;
    let targetIndex = currIndex + scrollAmount;

    targetIndex =
      targetIndex < 0 || targetIndex === favSectionRef.current.children.length
        ? currIndex
        : targetIndex;

    setCurrIndex(targetIndex);
    favSectionRef.current.children[targetIndex].scrollIntoView({
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <section class=" flex flex-col px-4 lg:px-8 relative">
      <button
        class="disabled:hidden absolute left-4 top-1/2 md:hidden rounded-1 border border-gray-100 bg-gray-100 opacity-70 p-2"
        onClick={() => scrollTo(-1)}
        disabled={currIndex === 0}
      >
        <Left />
      </button>

      <button
        class="absolute right-4 top-1/2 rounded-1 md:hidden border border-gray-100 bg-gray-100 opacity-70 p-2 disabled:hidden"
        onClick={() => scrollTo(1)}
        disabled={
          favSectionRef.current
            ? currIndex === favSectionRef.current.children.length - 1
              ? true
              : false
            : false
        }
      >
        <Right />
      </button>

      <div class="flex flex-row items-center justify-between">
        <h2 class="text-2xl">Our favorite models</h2>
        <div class="flex gap-x-2">
          <button
            class="rounded-1 border <md:hidden border-gray-300 p-2 disabled:opacity-40 duration-200"
            onClick={() => scrollTo(-2)}
            disabled={currIndex === 0}
          >
            <Left />
          </button>

          <button
            class="rounded-1 <md:hidden border border-gray-300 p-2 duration-200 disabled:opacity-40"
            onClick={() => scrollTo(2)}
            disabled={
              favSectionRef.current
                ? currIndex === favSectionRef.current.children.length - 2
                  ? true
                  : false
                : false
            }
          >
            <Right />
          </button>
        </div>
      </div>

      <div
        class="flex touch-pan-x gap-x-4 overflow-hidden scroll-smooth duration-200"
        ref={favSectionRef}
      >
        {[...Array(4)].map((num, i) => (
          <figure
            key={i}
            class="md:(min-w-[33%]) flex min-w-[60%] flex-col pt-4 text-sm"
          >
            <img class="" src={data.favs} alt="" />
            <h4 class="pt-1 text-base font-bold text-emerald-600">
              Example text {i}
            </h4>
            <figcaption>Example description {i}</figcaption>
            <figcaption>$999</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default FavSection;
