type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto max-w-full">{children}</div>;
};

export default Container;
