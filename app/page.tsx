import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="text-center text-3xl">khati Inc.</div>
      <Button>download</Button>
    </div>
  );
}
