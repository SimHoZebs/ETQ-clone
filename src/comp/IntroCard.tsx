import data from "../data";
import shoe from "../images/shoe.webp";

const IntroCard = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div class={`lg:(flex ${props.class}`}>
      <picture class="lg:(w-1/2 h-20vh) " alt="pic 2" width={814} height={1018}>
        <img srcset={shoe} />
      </picture>

      <div class="flex flex-col gap-y-2 justify-center lg:pl-8">
        <h3 class="font-bold">{data.intro.name}</h3>
        <p>{data.intro.desc}</p>

        <a class="underline lg:text-black" href="/">
          Read story
        </a>
      </div>
    </div>
  );
};

export default IntroCard;
