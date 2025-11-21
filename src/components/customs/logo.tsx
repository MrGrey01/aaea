import Image from "next/image";

export const Logo = () => {
  return (
    <div className="">
      <Image
        src="/assets/logo.png"
        alt="AAEA Logo"
        width={100}
        height={100}
        className=""
      />
    </div>
  );
};
