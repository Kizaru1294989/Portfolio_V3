import { Globe } from "@/components/ui/globe";

export function GlobeDemo() {
  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
      <Globe className="w-full h-full object-cover opacity-90" />
    </div>
  );
}
