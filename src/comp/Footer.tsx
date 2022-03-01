import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer class="<lg:flex-col lg:(px-8 font-normal grid grid-cols-6 gap-x-6) flex gap-y-4 p-4 text-base text-sm font-light">
      <FooterItem title="About" class="col-span-2">
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

      <FooterItem title="Contact" class="md:hidden lg:block">
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

      <div class="<md:hidden flex flex-col gap-y-2 font-normal lg:hidden">
        <a href="mailto:">Email us</a>
        <a href="tel:+31202256153">+31 (0) 20 22 56 153</a>
      </div>
    </footer>
  );
};

export default Footer;
