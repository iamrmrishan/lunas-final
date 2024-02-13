import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export default function HomePage() {
  return (
    <>
      <section className="space-y-6 pb-6 pt-6 md:pb-8 md:pt-10 lg:py-18">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow us on Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Where Every Opinion Counts: Discover the Best
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A Community-Driven Hub to Help You Discover the Best Products,
            Services, and Experiences Through Honest and Insightful Reviews, So
            You Can Make Informed Decisions That Truly Matter.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Browse Reviews
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Publish
            </Link>
          </div>
        </div>
      </section>
      <section
        id="statistics"
        className="container space-y-5 py-3 dark:bg-transparent md:py-3 lg:py-1"
      >
        <div className="grid w-full items-start gap-10 rounded-lg p-10 md:grid-cols-3">
          <div className="flex flex-col gap-4 text-center">
            <div>
              <h4 className="text-7xl font-bold">19</h4>
              <p className="text-sm font-medium text-muted-foreground">
                Reviews Published
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <div>
              <h4 className="text-7xl font-bold">19</h4>
              <p className="text-sm font-medium text-muted-foreground">
                Question Asked
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <div>
              <h4 className="text-7xl font-bold">19</h4>
              <p className="text-sm font-medium text-muted-foreground">
                Users Registered
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-4 dark:bg-transparent md:py-8 lg:py-3"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Top Review Categories</h3>
                <p className="text-sm text-muted-foreground">
                  Easily navigate through a curated selection of top-rated
                  products and services in various categories.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Comments Section</h3>
                <p className="text-sm text-muted-foreground">
                  Engage with a vibrant community of users through the comments
                  section, sharing experiences, insights, and recommendations.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Bookmarking and Favorites</h3>
                <p className="text-sm text-muted-foreground">
                  Save and organize reviews for quick reference in the future,
                  making it easy to revisit products or services of interest.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">User Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Discover products and services that have been highly
                  recommended by fellow community members.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Rating System</h3>
                <p className="text-sm text-muted-foreground">
                  Quickly assess the overall sentiment of a review with a clear
                  and concise rating system, providing at-a-glance insights.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Featured Reviews</h3>
                <p className="text-sm text-muted-foreground">
                  Spotlight exceptional reviews that offer exceptional insights,
                  helping users find the cream of the crop.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Project LUNAS also includes a full-featured rich text editor to
            create and publish reviews easily.
          </p>
        </div>
      </section>
    </>
  );
}
