-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "u_email" TEXT NOT NULL,
    "u_pwd" TEXT NOT NULL,
    "rds_id" TEXT NOT NULL,
    "rds_pwd" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "CourseCount" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "CoursePool" (
    "course_name" TEXT NOT NULL,
    "available_seat" INTEGER NOT NULL,
    "student_inneed" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_u_email_key" ON "User"("u_email");

-- CreateIndex
CREATE UNIQUE INDEX "User_rds_id_key" ON "User"("rds_id");

-- CreateIndex
CREATE UNIQUE INDEX "CoursePool_course_name_key" ON "CoursePool"("course_name");
