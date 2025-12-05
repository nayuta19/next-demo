import Hero from "@/components/hero";
import homeSrc from "@/public/home.png";

export const metadata = {
  title: "Home ",
  description: "Welcome to the home page",
};
export default function Home() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Home" content="Welcome to our website" />
  );
}
