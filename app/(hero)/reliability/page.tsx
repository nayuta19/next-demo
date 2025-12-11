import Hero from "@/components/hero";
import reliabilitySrc from "@/public/reliability.png";
export const metadata = {
  title: "Reliability ",
  description: "Welcome to the reliability page",
};
export default function Home() {
  return (
    <Hero imgUrl={reliabilitySrc} altTxt="reliability" content="reliability" />
  );
}
