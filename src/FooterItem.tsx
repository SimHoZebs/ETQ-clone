interface Props extends JSX.HTMLAttributes<HTMLDivElement> {}

const FooterItem = (props: Props) => {
  return (
    <div>
      <h4 class="font-bold">Info</h4>
      <a href="/">Shipping Info</a>
      <a href="/">Shipping Info</a>
      <a href="/">Shipping Info</a>
      <a href="/">Shipping Info</a>
    </div>
  );
};

export default FooterItem;
