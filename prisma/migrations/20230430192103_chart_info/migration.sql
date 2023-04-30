-- CreateTable
CREATE TABLE "Chart" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "graphNumber" INTEGER NOT NULL,
    "graphLine" TEXT NOT NULL,
    "graphLineColor" TEXT NOT NULL,

    CONSTRAINT "Chart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chart_username_key" ON "Chart"("username");
