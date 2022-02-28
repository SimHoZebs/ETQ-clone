import { useState } from "preact/hooks";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const FooterItem = (props: Props) => {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible((prev) => !prev);
  }

  return (
    <div class={"flex flex-col gap-y-1 " + props.class}>
      <button onClick={toggleVisible} class="flex justify-between py-1">
        <h4 class="font-bold">{props.title}</h4>
        <p>+</p>
      </button>
      <div
        class={`overflow-hidden text-sm duration-300 ${
          visible ? "max-h-20 " : "max-h-0 delay-300 "
        }`}
      >
        <div
          class={`mb-2 flex flex-col gap-y-2 delay-300 duration-300 ${
            visible ? "text-black" : "text-white delay-[0ms]"
          }`}
        >
          {props.children}
        </div>
      </div>
      <hr class="border-gray-300"></hr>
    </div>
  );
};

export default FooterItem;
