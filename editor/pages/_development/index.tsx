import { Function } from "coli/lib";

export default function DevelopmentPage() {
  const fun = new Function("Heading");
  return <div>{fun.exportAs()}</div>;
}
