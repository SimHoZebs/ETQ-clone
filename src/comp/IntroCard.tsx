import data from "../data";

const IntroCard = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div class={`lg:flex ${props.class}`}>
      <img
        class="lg:w-1/2"
        src={data.intro.imgURL}
        alt="pic 2"
        width={814}
        height={1018}
      />

      <div class="flex flex-col justify-center gap-y-2 lg:pl-8">
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
