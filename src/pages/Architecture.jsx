import ArchitectureHero from '../components/architecture/ArchitectureHero'
import ProblemSection from '../components/architecture/ProblemSection'
import CorePipeline from '../components/architecture/CorePipeline'
import HybridRetrieval from '../components/architecture/HybridRetrieval'
import MemoryLoop from '../components/architecture/MemoryLoop'
import ModulesSection from '../components/architecture/ModulesSection'
import MetricsSection from '../components/architecture/MetricsSection'
import CTASection from '../components/architecture/CTASection'

export default function Architecture() {
  return (
    <main className="relative pt-24">
      <ArchitectureHero />
      <ProblemSection />
      <CorePipeline />
      <HybridRetrieval />
      <MemoryLoop />
      <ModulesSection />
      <MetricsSection />
      <CTASection />
    </main>
  )
}
