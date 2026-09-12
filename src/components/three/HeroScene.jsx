import CanvasWrapper from "./CanvasWrapper";
import NodeNetwork from "./NodeNetwork";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function HeroScene() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <CanvasWrapper camera={{ position: [0, 0, 7], fov: 42 }}>
        <NodeNetwork mobile={isMobile} />
      </CanvasWrapper>
    </div>
  );
}
