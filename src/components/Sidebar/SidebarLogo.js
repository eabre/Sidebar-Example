import { useRouter } from "react/router";
import { FaBug } from "react-icons/fa";

export default function SidebarLogo() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-orange-500 
        hover:bg-opacity-10 
        cursor-pointer
    "
    >
      <FaBug size={28} color="white"></FaBug>
    </div>
  );
}
