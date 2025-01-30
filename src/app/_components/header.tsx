import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center items-center fixed min-w-full top-0 bg-header_color z-50 h-[10vh]">
      <div className="basis-2/3" />
      <div className="basis-1/12 text-1xl md:text-2xl font-bold my-auto flex items-center">
        <Link
          href="/"
          className="font-Ubuntu hover:underline text-center block w-full"
        >
          Top
        </Link>
      </div>
      <div className="basis-1/12 text-1xl md:text-2xl font-bold my-auto flex items-center">
        <Link
          href="/novel"
          className="font-Ubuntu hover:underline text-center block w-full"
        >
          Novel
        </Link>
      </div>
      <div className="basis-1/12 text-1xl md:text-2xl font-bold my-auto flex items-center">
        <Link
          href="/"
          className="font-Ubuntu hover:underline text-center block w-full"
        >
          Chair
        </Link>
      </div>
      <div className="basis-1/12 text-1xl md:text-2xl font-bold my-auto flex items-center">
        <Link
          href="/"
          className="font-Ubuntu hover:underline text-center block w-full"
        ></Link>
      </div>
    </div>
  );
};

export default Header;
