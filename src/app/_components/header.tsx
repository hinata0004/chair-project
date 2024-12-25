import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col bg-blue-200 sticky top-0 w-screen h-18">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5 mt-2 flex items-center">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
    </div>
  );
};

export default Header;
