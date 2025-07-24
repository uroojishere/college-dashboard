// src/components/IntroVideo.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function IntroVideo() {
  return (
    <Card className="rounded-lg border bg-white shadow-sm">
      <CardContent className="p-6 space-y-4">
        <p className="text-lg font-semibold">Introduction Video</p>
        <video
          controls
          className="w-full rounded-md border"
          poster="https://via.placeholder.com/1280x720.png?text=Video+Thumbnail"
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </CardContent>
    </Card>
  );
}
