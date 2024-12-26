import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-black bg-opacity-0 sticky top-0 gap-4 w-screen h-14">
      <div className="text-2xl md:text-4xl font-bold mb-5 mt-2 flex items-center">
        <Link href="/" className="hover:underline">
          Top
        </Link>
      </div>
      <div className="text-2xl md:text-4xl font-bold mb-5 mt-2 flex items-center">
        <Link href="/" className="hover:underline">
          Article
        </Link>
      </div>
      <div className="text-2xl md:text-4xl font-bold mb-5 mt-2 flex items-center">
        <Link href="/" className="hover:underline">
          Novel
        </Link>
      </div>
    </div>
  );
};

export default Header;
