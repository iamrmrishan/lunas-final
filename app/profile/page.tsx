import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { AwardsReceived } from "@/components/awards-received";
import { MailList } from "@/components/post-list";
import { mails } from "@/components/data";
import { DropdownMenuRadioGroupDemo } from "@/components/mobile-profile-post-dropdown";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-start justify-start">
      <div className="grid grid-cols-6 gap-2 w-full">
        <div className="col-span-6 md:col-span-4 lg:col-span-4">
          <section className="container flex flex-col gap-6 py-8 md:py-12 lg:py-20">
            <div className="mx-auto flex flex-col gap-10 rounded-lg border">
              <div className="flex flex-col gap-6">
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="questions">Questions</TabsTrigger>
                    <TabsTrigger value="comments">Comments</TabsTrigger>
                    <TabsTrigger value="saved">Saved</TabsTrigger>
                    <TabsTrigger value="questions">Questions</TabsTrigger>
                    <TabsTrigger value="comments">Comments</TabsTrigger>
                    <TabsTrigger value="saved">Saved</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <MailList items={mails} />
                  </TabsContent>
                  <TabsContent value="password">
                    Change your password here.
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        </div>
        <div className="col-span-6 md:col-span-2 lg:col-span-2">
          <section className="container flex flex-col gap-6 py-8 md:py-12 lg:py-20">
            <div className="mx-auto flex flex-col gap-10 p-5 rounded-lg border">
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
