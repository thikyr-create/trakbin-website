import { Hero } from "@/components/home/Hero";
import { EcosystemProducts } from "@/components/home/EcosystemProducts";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LivingSystem } from "@/components/home/LivingSystem";
import { PhotoGallery } from "@/components/home/PhotoGallery";
import { Problem } from "@/components/home/Problem";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Capabilities } from "@/components/home/Capabilities";
import { FieldIntelligence } from "@/components/home/FieldIntelligence";
import { AudienceCards } from "@/components/home/AudienceCards";
import { FutureVision } from "@/components/home/FutureVision";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CollectionStory } from "@/components/home/CollectionStory";

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionStory />
      
      {/* New Ecosystem Sections */}
      <EcosystemProducts />
      <HowItWorks />
      
      {/* Original Sections */}
      <LivingSystem />
      <PhotoGallery />
      <Problem />
      <Ecosystem />
      
      {/* New Capabilities Section */}
      <Capabilities />
      
      {/* Original Sections */}
      <FieldIntelligence />
      <AudienceCards />
      
      {/* New Vision Section */}
      <FutureVision />
      
      {/* Original CTA */}
      <FinalCTA />
    </>
  );
}