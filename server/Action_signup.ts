"use server";
import { prisma_client } from "@/utils/prisma_client";
// import { prisma_client } from "@/utils/prisma_client";
import { error, log } from "console";
import { redirect } from "next/navigation";

type Type_User = {
  u_email: string | "";
  u_pwd: string | "";
  rds_id: string | "";
  rds_pwd: string | "";
};

const ServerAction_SignUp = async (data: FormData) => {
  const u_rpwd = data.get("u_rpwd")?.toString() || "";
  const udata: Type_User = {
    u_email: data.get("u_email")?.toString() || "",
    u_pwd: data.get("u_pwd")?.toString() || "",
    rds_id: data.get("rds_id")?.toString() || "",
    rds_pwd: data.get("rds_pwd")?.toString() || "",
  };

  if (
    udata.rds_id == "" ||
    udata.rds_pwd == "" ||
    udata.u_email == "" ||
    udata.u_pwd == "" ||
    u_rpwd == "" ||
    udata.u_pwd != u_rpwd
  )
    return null;

  const duplicate = await prisma_client.user.count({
    where: {
      OR: [{ u_email: udata.u_email }, { rds_id: udata.rds_id }],
    },
  });
  if (duplicate > 0) {
    error("Duplicate Found!!");
    return null;
  }
  await prisma_client.user
    .create({
      data: {
        ...udata,
        CourseCount: 2,
        priority: "3",
      },
    })
    .catch((err) => {
      return null;
    });

  return redirect("/signin");
};

export default ServerAction_SignUp;
