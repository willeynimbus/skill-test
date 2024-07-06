import Image from "next/image";

function Navbar() {
  return (
    <nav className="m-2 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-row bg-white text-xl items-center font-extrabold gap-2">
        <Image
          src="/whatbytes_logo.jpg"
          alt="whatbytesLogo"
          width={50}
          height={50}
          className="bg-white rounded-md"
        />
        <h1 className="text-2xl">WhatBytes</h1>
      </div>

      <div className="flex items-center justify-between border-2 p-1 rounded-md shadow-md gap-2">
        <Image
          src="/ammmy.png"
          alt="logo"
          height={20}
          width={20}
          className="ml-auto rounded-xl"
        />
        <h3 className="font-extrabold">Aman Shukla</h3>
      </div>
    </nav>
  );
}

export default Navbar;
