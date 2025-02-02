import { LineShadowText } from "@/src/components/ui/line-shadow-text";

function LineShadowTextDemo() {

  return (
    <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
      Ship
      <LineShadowText className="italic" >
        Fast
      </LineShadowText>
    </h1>
  );
}

export { LineShadowTextDemo };
