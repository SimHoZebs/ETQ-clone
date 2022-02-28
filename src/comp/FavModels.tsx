import { useRef, useState } from "preact/hooks";
import data from "../data";
import { Icon } from "@iconify/react";

const FavModels = () => {
  const favItemsRef = useRef<HTMLDivElement>(null);
  const [currChildInView, setCurrChildInView] = useState(0);

  function scroll(dir: "left" | "right") {
    const dirDict = { left: -1, right: 1 };

    if (favItemsRef.current) {
      let nextInView: number;
      if (
        currChildInView + dirDict[dir] < 0 ||
        currChildInView + dirDict[dir] === favItemsRef.current.children.length
      ) {
        nextInView = currChildInView;
      } else {
        nextInView = currChildInView + dirDict[dir];
      }

      setCurrChildInView(nextInView);
      favItemsRef.current.children[nextInView].scrollIntoView({
        block: "nearest",
        inline: "center",
      });
    }
  }

  return (
    <section class=" flex flex-col px-4">
      <div class="flex flex-row items-center justify-between">
        <h2 class="text-2xl">Our favorite models</h2>
        <div class="flex gap-x-2">
          <button
            class="rounded-1 border border-gray-300 p-2"
            onClick={() => scroll("left")}
          >
            <Icon icon="akar-icons:chevron-left" />
          </button>

          <button
            class="rounded-1 border border-gray-300 p-2"
            onClick={() => scroll("right")}
          >
            <Icon icon="akar-icons:chevron-right" />
          </button>
        </div>
      </div>
      <div
        class="flex touch-pan-x gap-x-4 overflow-hidden scroll-smooth duration-200"
        ref={favItemsRef}
      >
        {[...Array(4)].map((num) => (
          <figure
            key={num}
            class="md:(min-w-[33%]) flex min-w-[60%] flex-col pt-4 text-sm"
          >
            <img class="" src={data.favs} alt="" />
            <h4 class="pt-1 text-base font-bold text-emerald-600">
              Example text {num}
            </h4>
            <figcaption>Example description {num}</figcaption>
            <figcaption>$999</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default FavModels;
