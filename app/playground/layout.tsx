import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
export default async function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwt")?.value;
    let data;
    if (token) data = jwt.verify(token, process.env.SECRET_KEY || "Not");
    // else redirect("/");
    console.log(data);
  } catch (error) {
    // redirect("/");
  }
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
