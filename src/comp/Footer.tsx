import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer class="flex flex-col gap-y-4 p-4 text-sm font-light">
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

      <FooterItem title="Contact" class="md:hidden">
        <a href="mailto:">Email us</a>
        <a href="tel:+31202256153">+31 (0) 20 22 56 153</a>
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

      <div class="<md:hidden flex flex-col gap-y-2 font-normal">
        <a href="mailto:">Email us</a>
        <a href="tel:+31202256153">+31 (0) 20 22 56 153</a>
      </div>

      <div class="gap-x-4 md:flex">
        <h4 class="font-bold md:font-normal">Newsletter</h4>
        <form class="flex w-full gap-x-4" action="">
          <input
            class="w-full max-w-sm border-b border-gray-400 outline-0"
            type="email"
            name=""
            id=""
          />
          <button class="" type="submit">
            Submit
            <hr class="border-black" />
          </button>
        </form>
      </div>

      <p>
        This site is a copy of a brilliant site{" "}
        <a class="underline" href="https://etq-amsterdam.com">
          {" "}
          etq.amsterdam.com
        </a>{" "}
        built as a submission for club application.
      </p>
    </footer>
  );
};

export default Footer;
