import React from 'react';
import SectionHeader from './SectionHeader';
import CodeBlock from './CodeBlock';
import InfoCard from './InfoCard';

const pyCode = `import smrion

# Initialize the persistent memory interface
client = smrion.Client(api_key="sk_live_...", environment="production")

# Inject context into a specific memory thread
response = client.memory.inject(
    session_id="usr_8921x",
    context="User prefers functional programming paradigms."
)

print(f"Memory synced: {response.status}")`;

const jsCode = `import { Smrion } from '@smrion/sdk';

const smrion = new Smrion({ apiKey: process.env.SMRION_KEY });

// Retrieve contextual memory for a prompt
const context = await smrion.memory.retrieve({
  sessionId: 'usr_8921x',
  query: 'How should I structure my new project?'
});

console.log(context.text);`;

export default function DocContent() {
  return (
    <div className="flex-1 max-w-4xl w-full">
      <SectionHeader 
        badge="Documentation / Getting Started"
        title="Introduction to SMRION"
        description="Learn how to integrate the persistent memory layer into your LLM infrastructure."
      />
      
      <div className="space-y-12">
        <section id="statefulness-problem" className="scroll-mt-32">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
            The Statefulness Problem
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Traditional large language models operate in a vacuum. Once a session ends, the context is destroyed. SMRION solves this by acting as a high-velocity, persistent memory proxy that injects relevant state dynamically before the prompt reaches the model.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed">
            By leveraging our proprietary Vector Sync architecture, SMRION delivers stateful intelligence with sub-25ms latency globally.
          </p>
        </section>

        <section id="quickstart-integration" className="scroll-mt-32">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">
            Quickstart Integration
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6">
            Integrating SMRION takes less than 5 minutes. Select your preferred SDK below.
          </p>
          
          <CodeBlock language="python" code={pyCode} />
          <CodeBlock language="javascript" code={jsCode} />
        </section>

        <section id="best-practices" className="scroll-mt-32">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
            Best Practices
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6">
            To ensure optimal retrieval precision, adhere to the following memory structuring guidelines:
          </p>
          
          <ul className="space-y-4">
            {[
              "Use deterministic Session IDs across all touchpoints.",
              "Group associative memories with explicit tags.",
              "Periodically run the prune() method to decay irrelevant data."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 glass-panel p-4 rounded-xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span className="font-body text-on-surface-variant">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <InfoCard title="Rate Limits" type="info">
          Production clusters are capped at 5,000 requests per second per node. If you require higher throughput, please contact enterprise support to provision dedicated neural nodes.
        </InfoCard>

        <InfoCard title="Performance Tip" type="tip">
          Pre-warming your memory cluster before high-traffic events can reduce initial retrieval latency by up to 40%. Use the <code>cluster.warm()</code> method.
        </InfoCard>
      </div>
    </div>
  );
}
