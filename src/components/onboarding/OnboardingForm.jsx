import React, { useState } from 'react';
import FormSection from './FormSection';
import InputField from './InputField';
import OptionSelector from './OptionSelector';
import SliderInput from './SliderInput';
import CardSelector from './CardSelector';
import CTASection from './CTASection';

const ROLES = [
  'AI Researcher',
  'Software Engineer',
  'Product Strategist',
  'Creative Director',
  'Student'
];

const USE_CASE_OPTIONS = [
  { label: 'Personal', value: 'personal', icon: 'person_pin' },
  { label: 'Development', value: 'development', icon: 'code' },
  { label: 'Research', value: 'research', icon: 'biotech' },
  { label: 'Business', value: 'business', icon: 'business_center' }
];

export default function OnboardingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'AI Researcher',
    contextFrequency: 'Constantly',
    frustrationLevel: 5,
    hallucinationFrequency: 'Often',
    useCases: ['personal'],
    preferences: {
      speedVsAccuracy: 75,
      personalizationVsSimplicity: 40
    }
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePreferenceChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, [field]: Number(value) }
    }));
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    console.log('--- ONBOARDING DATA SUBMITTED ---');
    console.log(JSON.stringify(formData, null, 2));
    // Ready for API integration
  };

  return (
    <div className="relative w-full max-w-4xl px-6 py-12 md:py-24 flex flex-col gap-16 mx-auto z-10">
      
      {/* Background Glow inside main container area (Optional: could be moved to Page level) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      {/* Hero Branding */}
      <header className="text-center space-y-4">
        <p className="font-label text-xs uppercase tracking-[0.4em] text-primary/80">
          Beta Access Phase 1
        </p>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface">
          Neural Onboarding.
        </h1>
        <p className="text-on-surface-variant max-w-xl mx-auto font-body text-lg leading-relaxed">
          Configure your cognitive environment. Help us build the ultimate long-term memory layer for artificial intelligence.
        </p>
      </header>

      <form className="space-y-12" onSubmit={handleSubmit}>
        
        {/* Section 1: Basic Info */}
        <FormSection icon="person" title="Identity & Role">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField 
              label="Full Name" 
              placeholder="John Doe" 
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <InputField 
              label="Email Address" 
              type="email"
              placeholder="john@example.com" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <div className="md:col-span-2 space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 px-1">
                Primary Role
              </label>
              <select 
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
                className="w-full bg-surface-container-lowest border-none text-on-surface focus:ring-1 focus:ring-primary py-3 px-4 rounded-lg transition-all duration-200 appearance-none"
              >
                {ROLES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
        </FormSection>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent my-12"></div>

        {/* Section 2: AI Experience */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 px-1">
            <span className="material-symbols-outlined text-primary text-xl" data-icon="psychology">
              psychology
            </span>
            <h2 className="font-headline text-xl font-bold tracking-tight">Cognitive Friction</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="glass-panel p-6 rounded-xl border border-outline-variant/10 space-y-4 transition-all duration-200">
              <p className="text-sm font-medium text-on-surface">How often do you remind AI of context?</p>
              <OptionSelector 
                options={['Constantly', 'Daily', 'Weekly', 'Rarely']}
                selected={formData.contextFrequency}
                onChange={(val) => handleInputChange('contextFrequency', val)}
                styleType="segmented"
              />
            </div>

            <div className="glass-panel p-6 rounded-xl border border-outline-variant/10 space-y-8 transition-all duration-200">
              <p className="text-sm font-medium text-on-surface">How frustrating is it when AI forgets context?</p>
              <div className="px-2">
                <input 
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={formData.frustrationLevel}
                  onChange={(e) => handleInputChange('frustrationLevel', Number(e.target.value))}
                  className="w-full accent-primary transition-all duration-200"
                />
                <div className="flex justify-between mt-4 font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50">
                  <span>Smooth</span>
                  <span>Painful</span>
                  <span>Extremely Frustrating</span>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-outline-variant/10 space-y-4 transition-all duration-200">
              <p className="text-sm font-medium text-on-surface">How often does AI hallucinate?</p>
              <OptionSelector 
                options={['Rarely', 'Sometimes', 'Often', 'Very Often']}
                selected={formData.hallucinationFrequency}
                onChange={(val) => handleInputChange('hallucinationFrequency', val)}
                styleType="grid"
              />
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent my-12"></div>

        {/* Section 3: Use Case Bento Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 px-1">
            <span className="material-symbols-outlined text-primary text-xl" data-icon="grid_view">
              grid_view
            </span>
            <h2 className="font-headline text-xl font-bold tracking-tight">Primary Use Cases</h2>
          </div>
          <CardSelector 
            options={USE_CASE_OPTIONS}
            selectedOptions={formData.useCases}
            onChange={(val) => handleInputChange('useCases', val)}
          />
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent my-12"></div>

        {/* Section 4: Preferences */}
        <FormSection icon="tune" title="System Tuning">
          <div className="space-y-10">
            <SliderInput 
              min={0} max={100} step={1}
              value={formData.preferences.speedVsAccuracy}
              onChange={(e) => handlePreferenceChange('speedVsAccuracy', e.target.value)}
              leftLabel="Prioritize Velocity"
              rightLabel="Maximum Accuracy"
              description="System will favor deep-tree verification over instant response generation."
            />
            <SliderInput 
              min={0} max={100} step={1}
              value={formData.preferences.personalizationVsSimplicity}
              onChange={(e) => handlePreferenceChange('personalizationVsSimplicity', e.target.value)}
              leftLabel="Broad Simplicity"
              rightLabel="Deep Personalization"
              description="Balance between universal reasoning and learned user patterns."
            />
          </div>
        </FormSection>

        {/* Section 5: Final CTA */}
        <CTASection onSubmit={handleSubmit} />

      </form>
    </div>
  );
}
