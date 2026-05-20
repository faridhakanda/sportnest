import { getAllSportFacilities } from "@/lib/data";
import Image from "next/image";

export default async function Home() {
    const facilities = await getAllSportFacilities();
    console.log(facilities, 'new project!')
  return (
    <div>
        <h2>SportNest project for frontend!</h2>
        <p>{facilities.length}</p>
    </div>
  );
}
