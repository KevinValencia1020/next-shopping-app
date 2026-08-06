BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED');
ALTER TABLE "public"."orders" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "orders" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "public"."OrderStatus_old";
ALTER TABLE "orders" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;


ALTER TABLE "categories" DROP CONSTRAINT "categories_parentId_fkey";

ALTER TABLE "discounts" DROP CONSTRAINT "discounts_productId_fkey";

ALTER TABLE "payment_methods" DROP CONSTRAINT "payment_methods_userId_fkey";

ALTER TABLE "reviews" DROP CONSTRAINT "reviews_productId_fkey";

ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userId_fkey";

ALTER TABLE "transactions" DROP CONSTRAINT "transactions_orderId_fkey";

ALTER TABLE "transactions" DROP CONSTRAINT "transactions_paymentMethodId_fkey";

ALTER TABLE "user_preferences" DROP CONSTRAINT "user_preferences_userId_fkey";

ALTER TABLE "addresses" DROP COLUMN "postalCode",
ADD COLUMN     "label" TEXT NOT NULL;

ALTER TABLE "categories" DROP COLUMN "parentId";

ALTER TABLE "discounts" DROP COLUMN "isActive",
DROP COLUMN "name",
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "orders" DROP COLUMN "discount",
DROP COLUMN "notes",
ADD COLUMN     "paymentMethod" TEXT NOT NULL,
ADD COLUMN     "paymentStatus" TEXT NOT NULL DEFAULT 'approved',
ADD COLUMN     "shipping" DECIMAL(10,2) NOT NULL DEFAULT 0;

ALTER TABLE "product_images" DROP COLUMN "altText";

ALTER TABLE "products" ADD COLUMN     "specs" JSONB NOT NULL DEFAULT '{}';

ALTER TABLE "users" DROP COLUMN "isActive",
ADD COLUMN     "failedLoginAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lockedUntil" TIMESTAMP(3);
DROP TABLE "payment_methods";
DROP TABLE "reviews";
DROP TABLE "transactions";
DROP TABLE "user_preferences";

CREATE TABLE "favorites" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "search_history" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "categoryId" TEXT,
    "productId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "search_history_pkey" PRIMARY KEY ("id")
)
CREATE UNIQUE INDEX "favorites_userId_productId_key" ON "favorites"("userId", "productId");

ALTER TABLE "discounts" ADD CONSTRAINT "discounts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "discounts" ADD CONSTRAINT "discounts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "favorites" ADD CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "favorites" ADD CONSTRAINT "favorites_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "search_history" ADD CONSTRAINT "search_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "search_history" ADD CONSTRAINT "search_history_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
