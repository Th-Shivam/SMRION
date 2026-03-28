import React from 'react';
import OnboardingForm from '../components/onboarding/OnboardingForm';

export default function Onboarding() {
  return (
    <div className="pt-24 pb-12 w-full min-h-screen flex flex-col items-center relative z-10">
      {/* Subtle, premium radial gradient glow behind the entire onboarding flow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] max-w-7xl h-[800px] bg-[radial-gradient(ellipse_at_top,_rgba(208,188,255,0.04)_0%,_transparent_60%)] pointer-events-none -z-10"></div>
      
      <OnboardingForm />
    </div>
  );
}
