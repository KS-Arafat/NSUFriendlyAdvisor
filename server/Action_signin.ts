"use server";
import jwt from "jsonwebtoken";

import { prisma_client } from "@/utils/prisma_client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ServerAction_Signin = async (data: FormData) => {
  const uData = {
    email: data.get("email")?.toString() || "",
    password: data.get("password")?.toString() || "",
  };
  if (uData.email.length == 0 || uData.password.length == 0) return null;

  const dbres = await prisma_client.user.findFirst({
    where: {
      AND: [{ u_email: uData.email }, { u_pwd: uData.password }],
    },
    select: { rds_id: true, rds_pwd: true, CourseCount: true, priority: true },
  });

  if (!dbres) return null;

  const cookieStore = await cookies();
  const token = jwt.sign(
    {
      verified: true,
      rds_id: dbres.rds_id,
      rds_pwd: dbres.rds_pwd,
      courseCount: dbres.CourseCount,
      priority: dbres.priority,
    },
    process.env.SECRET_KEY || "notworking",
  );

  cookieStore.set("jwt", token);

  return redirect("/playground");
};

export default ServerAction_Signin;
