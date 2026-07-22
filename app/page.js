import SoftAurora from "@/component/SoftAurora";
import ClickSpark from "@/component/ClickSpark";

export default function Home() {
  return (

  <ClickSpark
    sparkColor="#ffffff"
    sparkSize={10}
    sparkRadius={20}
    sparkCount={8}
    duration={400}
  >
    <main className="relative w-full h-screen bg-black overflow-hidden">
      <SoftAurora
        speed={0.6}
        scale={1.5}
        brightness={1}
        color1="#f7f7f7"
        color2="#e100ff"
        noiseFrequency={2.5}
        noiseAmplitude={1}
        bandHeight={0.5}
        bandSpread={1}
        octaveDecay={0.1}
        layerOffset={0}
        colorSpeed={1}
        enableMouseInteraction
        mouseInfluence={0.25}
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          ARHAFi
        </h1>
      </div>
    </main>
  </ClickSpark>
  )
}
