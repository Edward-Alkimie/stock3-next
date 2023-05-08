/*
  Warnings:

  - You are about to drop the `Chart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Chart";

-- CreateTable
CREATE TABLE "chart" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "graphNumber" INTEGER NOT NULL,
    "graphLine" TEXT NOT NULL,
    "graphLineColor" TEXT NOT NULL,

    CONSTRAINT "chart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chart_username_key" ON "chart"("username");
