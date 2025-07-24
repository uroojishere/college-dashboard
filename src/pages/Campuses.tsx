import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function Campuses() {
  const locations = [
    {
      name: "Melbourne Campus",
      address: "Level 10, 190 Queen St., Melbourne, VIC 3000",
    },
    {
      name: "Brisbane Campus",
      address: "Unit 3, 5 Carol Avenue, SPRINGWOOD, QLD 4127",
    },
    {
      name: "Melbourne Campus",
      address: "Level 10, 190 Queen St., Melbourne, VIC 3000",
    },
    {
      name: "Brisbane Campus",
      address: "Unit 3, 5 Carol Avenue, SPRINGWOOD, QLD 4127",
    },
  ];

  return (
    <div className="bg-white border rounded-lg p-6">
      <p className="text-lg font-semibold mb-4">Campuses & Locations</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations.map((location, index) => (
          <Card key={index} className="border rounded-lg shadow-sm">
            <CardContent className="flex items-start space-x-3 p-4">
              <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
              <div>
                <p className="font-semibold text-sm">{location.name}</p>
                <p className="text-sm text-muted-foreground">{location.address}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
