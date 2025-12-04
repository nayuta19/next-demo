import Hero from "@/components/hero";
import perfomanceSrc from "@/public/perfomance.png";
export const metadata = {
  title: "Perfomance ",
  description: "Welcome to the Perfomance page",
};
export default function Perfomance() {
  return <Hero imgUrl={perfomanceSrc} altTxt="Home" content="perfomance" />;
}
