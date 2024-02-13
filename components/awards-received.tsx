import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AwardsReceived() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Icons.mail color="blue"></Icons.mail>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Email Varified</p>
        </div>
      </div>
      <div className="flex items-center">
        <Icons.calendarHeart color="red"></Icons.calendarHeart>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">2 Years Club</p>
        </div>
      </div>
      <div className="flex items-center">
        <Icons.trophy color="green"></Icons.trophy>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">1000 Points</p>
        </div>
      </div>
    </div>
  );
}
