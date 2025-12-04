import Hero from "@/components/hero";
import scaleSrc from "@/public/scale.png";
export const metadata = {
  title: "scale ",
  description: "Welcome to the scale page",
};
export default function Home() {
  return <Hero imgUrl={scaleSrc} altTxt="Home" content="scale" />;
}
