import { Href, Redirect } from "expo-router";

export default function Index() {
  const homeHref = "/home" as Href;

  return <Redirect href={homeHref} />;
}
