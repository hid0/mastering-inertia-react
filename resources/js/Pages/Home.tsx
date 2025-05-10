import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (
    <>
      <div className="h-screen flex-col flex items-center justify-center">
        <p className="text-3xl text-center text-fuchsia-950 font-extrabold">
          Hello World!
        </p>
        <div className="flex items-center space-x-2 p-4">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>
    </>
  );
}
