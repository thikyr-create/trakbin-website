import { Hero } from "@/components/home/Hero";
import { CollectionStory } from "@/components/home/CollectionStory";
import { LivingSystem } from "@/components/home/LivingSystem";
import { PhotoGallery } from "@/components/home/PhotoGallery";

import { Ecosystem } from "@/components/home/Ecosystem";
import { EcosystemProducts } from "@/components/home/EcosystemProducts";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AudienceCards } from "@/components/home/AudienceCards";
import { FieldIntelligence } from "@/components/home/FieldIntelligence";
import { FutureVision } from "@/components/home/FutureVision";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionStory />
      <LivingSystem />
      <EcosystemProducts />
      <HowItWorks />
      <PhotoGallery />
      
      <Ecosystem />
      
      
      
      <FieldIntelligence />
      
      <FinalCTA />
    </>
  );
}