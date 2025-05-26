import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { Roboto } from "../ui/fonts";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwt")?.value;
    let data;
    if (token) data = jwt.verify(token, process.env.SECRET_KEY || "Not");
    // else redirect("/");
    
  } catch (error) {
    // redirect("/");
  }
  return (
    <html lang="en">
      <body className={Roboto.className + " bg-stone-700"}>{children}</body>
    </html>
  );
}
