import { Function } from "coli";

export default function DevelopmentPage() {
  const fun = new Function("Heading");
  return <div>{fun.exportAs()}</div>;
}
