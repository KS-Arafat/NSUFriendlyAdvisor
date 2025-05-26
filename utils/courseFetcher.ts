type AdvisingDataType = {
  csrf_cookie_name: string;
  phpSessionId: string;
  courses: string[];
};

class AdvisingClass {
  public csrf_cookie_name: string;
  public phpSessionId: string;
  public courses: string[];
  public authenticated?: boolean = false;
  private enc = encodeURIComponent;
  private readonly advisingURL: string =
    "https://rds3.northsouth.edu/index.php/students/advising";

  constructor({ phpSessionId, csrf_cookie_name, courses }: AdvisingDataType) {
    this.phpSessionId = this.enc(phpSessionId);
    this.csrf_cookie_name = this.enc(csrf_cookie_name);
    this.courses = courses;
  }

  private readonly generateHeader = () => {
    if (this.phpSessionId && this.csrf_cookie_name)
      return {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Sec-GPC": "1",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Content-Type": "application/x-www-form-urlencoded",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
        Cookie: `PHPSESSID=${this.phpSessionId}; csrf_cookie_name=${this.csrf_cookie_name}`,
      };
    throw new Error("phpSessionId and csrf_cookie_name haven't been set");
  };

  public advisingFetch = async () => {
    const response = await fetch(this.advisingURL, {
      credentials: "include",
      headers: this.generateHeader(),
      referrer: "https://rds3.northsouth.edu/index.php/students/advising",
      method: "GET",
      mode: "cors",
    });

    return await response.text();
  };
}

export default AdvisingClass;
