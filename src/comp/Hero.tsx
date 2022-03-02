const Hero = () => {
  return (
    <div class="items-between lg:(flex w-full) gap-y-14 px-4 lg:h-full lg:px-0">
      <img
        class="absolute left-0 bottom-0 -z-10 h-full object-cover lg:hidden"
        src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Frame_64_1200x.png?v=1645111167"
        alt="Main item"
        height={1920}
        width={1080}
        sizes="100vw"
      />

      <img
        class="<lg:hidden w-2/3 object-cover"
        alt="Main item"
        height={2000}
        width={3000}
        sizes="100vw"
        src=" https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Frame_67_1920x.png?v=1645111168"
      />

      <div class="lg:(text-black justify-center) flex w-2/3 flex-col items-start gap-y-4 pb-4 text-white lg:px-10">
        <p class="font-bold">Just in:</p>
        <h2 class="text-2xl lg:text-3xl">New season's wardrobe essentials</h2>
        <p>Designed for any time and every occasion.</p>
        <button class="text-xs underline lg:text-base">Shop now</button>
      </div>
    </div>
  );
};

export default Hero;
