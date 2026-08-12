import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Ecosystem } from "@/components/home/Ecosystem";
import { PlatformOverview } from "@/components/home/PlatformOverview";
import { FieldIntelligence } from "@/components/home/FieldIntelligence";
import { Operations } from "@/components/home/Operations";
import { AudienceCards } from "@/components/home/AudienceCards";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Ecosystem />
      <PlatformOverview />
      <FieldIntelligence />
      <Operations />
      <AudienceCards />
      <FinalCTA />
    </>
  );
}