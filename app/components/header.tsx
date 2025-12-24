import Image from "next/image";
import Logo from "../../public/images/logo.svg";

export default function Header() {
  return (
    <div className="bg-blue-400/40 w-full p-6">
      <Image src={Logo} alt="Airbus Logo" width={190} priority />
    </div>
  );
}
