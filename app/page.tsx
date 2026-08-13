import { Hero } from "@/components/home/Hero";
import { PhotoGallery } from "@/components/home/PhotoGallery";
import { LivingSystem } from "@/components/home/LivingSystem";
import { Problem } from "@/components/home/Problem";
import { Ecosystem } from "@/components/home/Ecosystem";
import { FieldIntelligence } from "@/components/home/FieldIntelligence";
import { AudienceCards } from "@/components/home/AudienceCards";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PhotoGallery />
      <LivingSystem />
      <Problem />
      <Ecosystem />
      <FieldIntelligence />
      <AudienceCards />
      <FinalCTA />
    </>
  );
}