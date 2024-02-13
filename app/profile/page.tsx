import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PublishForm from "@/components/publish-form";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { AwardsReceived } from "@/components/awards-received";

export default function ProfilePage() {
  const components: { title: string; description: string }[] = [
    {
      title: "Points",
      description: "1024",
    },
    {
      title: "Joined",
      description: "11/12/2024",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-start justify-start">
      <div className="grid grid-cols-6 gap-2 w-full">
        <div className="col-span-6 md:col-span-4 lg:col-span-4 m-5">
          <section className="container flex flex-col gap-6 py-8 md:py-12 lg:py-20">
            <div className="mx-auto flex flex-col gap-10 p- rounded-lg border">
              <div className="flex flex-col gap-6">
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="questions">Questions</TabsTrigger>
                    {/* <TabsTrigger value="comments">Comments</TabsTrigger>
                    <TabsTrigger value="saved">Saved</TabsTrigger> */}
                  </TabsList>
                  <TabsContent value="account">
                    Make changes to your account here.
                  </TabsContent>
                  <TabsContent value="password">
                    Change your password here.
                  </TabsContent>
                </Tabs>
                <ul className="flex flex-col gap-3 items-center text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center">
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
                  </li>
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Custom domain
                  </li>
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Dashboard Analytics
                  </li>
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Access to Discord
                  </li>
                  <li className="flex items-center">
                    <Icons.check className="mr-2 h-4 w-4" /> Premium Support
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div>
                  <h4 className="text-7xl font-bold">$19</h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    Billed Monthly
                  </p>
                </div>
                <Link
                  href="/login"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="mx-auto flex flex-col gap-4">
              <p className="text-center leading-normal text-muted-foreground sm:leading-7">
                Taxonomy is a demo app.{" "}
                <strong>You can test the upgrade and won't be charged.</strong>
              </p>
            </div>
          </section>
        </div>
        <div className="col-span-6 md:col-span-2 lg:col-span-2 m-5">
          <section className="container gap-6 py-8 md:py-12 lg:py-20">
            <div className="mx-auto flex flex-col gap-10 p-10 rounded-lg border">
              <div className="flex items-center flex-col gap-6">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <ul className="flex flex-col gap-3 items-center text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center">
                  <p className="text-center leading-normal text-muted-foreground sm:leading-7">
                    <strong>Snow White</strong>
                    <br></br>
                    I'm a passionate reviewer dedicated to uncovering the hidden
                    gems in entertainment and technology. With a keen eye for
                    detail and a love for the latest trends, I provide
                    insightful and honest reviews to guide your next favorite
                    find. Join me on a journey to discover what's worth your
                    time and attention.
                  </p>
                  <br></br>
                  <strong>snowwhite@gmail.com</strong>
                </ul>
              </div>
              <ul className="flex flex-col gap-3 items-center text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center">
                <li className="flex items-center">
                  <Icons.pointer className="mr-2 h-4 w-4" color="orange" />{" "}
                  <strong>1024 Points</strong>
                </li>
                <li className="flex items-center">
                  <Icons.pointer className="mr-2 h-4 w-4" color="orange" />
                  <strong>Joined 21/12/2024</strong>
                </li>
              </ul>
              <h4 className="text-3xl font-bold">Awards</h4>
              <AwardsReceived />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
