import Hero from '../components/Hero'
import Lifecycle from '../components/Lifecycle'
import Evolution from '../components/Evolution'
import MemoryStack from '../components/MemoryStack'
import Demo from '../components/Demo'

export default function Landing() {
  return (
    <main className="relative pt-24">
      <Hero />
      <Lifecycle />
      <Evolution />
      <MemoryStack />
      <Demo />
    </main>
  )
}
