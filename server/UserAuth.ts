"use server";
// npm pcakage
import { redirect } from "next/navigation";
import { load } from "cheerio";
import { cookies } from "next/headers";
import { writeFileSync } from "fs";
import jwt from "jsonwebtoken";

// custom
import FilterImage from "@/utils/image-processing/filterImage";
import scanCaptcha from "@/utils/image-processing/segmentedOCR";
import AuthClass from "@/utils/AuthAPI";

// constants
const rootImagePath = "./captcha/";

// Fetch for get Captcha image
const fetchCaptcha = () =>
  fetch("https://rds3.northsouth.edu/index.php/captcha", {
    method: "get",
    headers: {
      Accept: "image/avif,image/webp,*/*",
      "Accept-Language": "en-US,en;q=0.5",
      "Sec-Fetch-Dest": "image",
      "Sec-Fetch-Mode": "no-cors",
      "Sec-Fetch-Site": "same-origin",
    },
    referrer: "https://rds3.northsouth.edu/index.php/common/login/preLogin",
    mode: "cors",
  });

const RDS_UserAuth = async (formdata: FormData) => {
  let data: { rds_id: string } | any;
  const cookieStore = await cookies();
  try {
    const token = cookieStore.get("jwt")?.value;
    if (token) data = jwt.verify(token, process.env.SECRET_KEY || "Not");
    else redirect("/");

  } catch (error) {
    redirect("/");
  }
  const user_id = data.rds_id,
    user_pwd = formdata.get("rds_pwd")?.toString();


  if (!user_id || !user_pwd || user_id.length != 7) redirect("/playground");
  const userData = new AuthClass({
    u_id: user_id,
    pwd: user_pwd,
    csrf_cookie_name: "",
    phpSessionId: "",
  });

  //////// CAPTCHA DOWNLOADED
  const res = await fetchCaptcha();
  const imageBuffer = Buffer.from(await res.arrayBuffer());
  const imgPATHS = await FilterImage(imageBuffer, rootImagePath);

  ///////// CSRF TOKEN & PHPSESSION ASSIGNED
  const rdsCookies = res.headers.getSetCookie();
  userData.csrf_cookie_name = rdsCookies[1].split(";")[0].split("=")[1];
  userData.phpSessionId = rdsCookies[0].split(";")[0].split("=")[1];

  ////// PRELOGIN /////////
  const preFetchPage = await userData.preLoginFetch();
  // writeFileSync(rootImagePath + "/test.html", preFetchPage);
  const user_eid = load(preFetchPage)(`input[name="username"]`)
    .attr("value")
    ?.toString();

  if (!user_eid) redirect("/playground");
  userData.enUID = user_eid;

  ////////// OCR CAPTCHA ///////////////////////////
  try {
    while (userData.captcha?.length != 4)
      userData.captcha = await scanCaptcha(imgPATHS);
  } catch (error) { }

  ////////// LOGIN ///////////////////////////
  let loginPage = await userData.loginFetch();

  ///////// USERNAME EXTRACTION //////////////

  writeFileSync(`${rootImagePath}/login.html`, loginPage);
  const $ = load(loginPage);
  let userName = $(".white").text();

  if (userName.length == 0) redirect("/playground");


  ////////////// RDS COOKIES ///////////////////////
  const mySess = {
    csrf_cookie_name: userData.csrf_cookie_name,
    PHPSESSID: userData.phpSessionId,
  };

  //////////////  REAL COOKIES //////////////
  cookieStore.set("csrf_cookie_name", mySess.csrf_cookie_name);
  cookieStore.set("PHPSESSID", mySess.PHPSESSID);
  cookieStore.set("username", btoa(userName));
  redirect("/playground/selectcourse");
};

export default RDS_UserAuth;
