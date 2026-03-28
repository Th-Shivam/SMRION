<div align="center">
  <img src="public/favicon.svg" alt="SMRION Logo" width="120" height="120" />
  
  <br/>
  
  # **SMRION**
  
  **The Persistent Memory Infrastructure for Evolving AI.**
  
  <p align="center">
    <a href="#about">About</a> •
    <a href="#core-capabilities">Capabilities</a> •
    <a href="#system-architecture">Architecture</a> •
    <a href="#the-ecosystem">Ecosystem</a>
  </p>

  [![Status: Alpha](https://img.shields.io/badge/Status-V4.0.2_Alpha-8B5CF6?style=flat-square)](#)
  [![Architecture: Hybrid](https://img.shields.io/badge/Retrieval-Semantic_+_BM25-3B82F6?style=flat-square)](#)
</div>

---

## 🌌 The Stateless AI Problem

Modern AI models (like ChatGPT and other LLMs) are incredibly powerful, but they share a fatal flaw: **they are inherently stateless**. They do not retain memory across sessions, which drastically limits continuous personalization, long-term reasoning, and real-world usefulness. Every new session is a blank slate.

**SMRION** solves this. We act as an external memory layer that seamlessly stores, retrieves, and injects highly relevant contextual memory back into AI systems.

Just as a database provides persistent storage for traditional applications, **SMRION provides persistent memory for AI.**

---

## ⚡ Core Capabilities

- �� **Persistent Context:** Infinite memory span across every single user interaction.
- 🔐 **Isolated Memory Silos:** Strict, user-specific memory isolation for uncompromised privacy and security.
- 🎯 **Hybrid Retrieval Engine:** Combines semantic vectors with indexed keyword queries for high-precision recall.
- 💉 **Automated Context Injection:** Seamlessly patches relevant historical data directly into active LLM prompts.
- 📊 **Relevance Scoring:** Dynamically prioritizes information so the AI only sees what matters most right now.

---

## 🏗️ System Architecture

The core of SMRION relies on a **Hybrid Memory Retrieval Architecture**. We believe that purely relying on vector embeddings is prone to noise, and purely relying on structured search is too rigid. SMRION marries the two:

1. **Page Indexing (BM25 / Keyword):** Lightning-fast, vectorless retrieval that acts as a first-pass filter to instantly narrow down candidate memory chunks.
2. **Semantic Retrieval (RAG / Embeddings):** Deep contextual understanding that evaluates the filtered chunks to select only the most semantically relevant data.

### The Pipeline Flow

```mermaid
graph TD
    classDef primary fill:#131313,stroke:#d0bcff,stroke-width:2px,color:#e5e2e1;
    classDef secondary fill:#2a2a2a,stroke:#494454,stroke-width:1px,color:#cbc3d7;
    classDef accent fill:#d0bcff,stroke:#6d3bd7,stroke-width:2px,color:#131313;

    A[New Input Data / Chat]:::primary -->|Chunking & Metadata| B(Data Processing):::secondary
    B --> C[Page Indexing <br> BM25]:::secondary
    B --> D[Vector Embeddings <br> RAG]:::secondary
    
    E[User Query]:::primary --> F{SMRION Retrieval Engine}:::accent
    
    F -->|Stage 1: Fast Filter| C
    C -->|Candidate Chunks| G(Refined Matches):::secondary
    G -->|Stage 2: Contextual Rank| D
    D -->|Top-K Selected Memory| H[Context Injection]:::accent
    
    H --> I((Stateless LLM)):::primary
    I --> J[Intelligent, Personalized Response]:::primary
```

---

## 🪐 The Ecosystem (Dual-Layer Product)

SMRION is designed to accelerate AI evolution on both sides of the market.

### 1. Developer Infrastructure (B2B)
Developers can seamlessly integrate SMRION via REST API or **MCP (Model Context Protocol)** to bestow their autonomous agents or SaaS AI tools with long-term memory. 
- Eliminate token-limit constraints.
- Retain exact user preferences effortlessly over years of interactions.

### 2. End-User Companion (B2C)
For non-technical users (students, writers, professionals), SMRION manifests as a sleek **Browser Extension**. 
- Actively overlays on top of tools like ChatGPT.
- Silently captures, indexes, and retrieves meaningful context from past chats.
- Transforms an amnesiac chatbot into a truly continuous, evolving personal assistant.

---

## 🚀 Vision

**SMRION makes AI remember, learn over time, and become truly personalized.** It is not just a feature—it is the missing foundational layer of the modern AI stack.

<div align="center">
  <br/>
  <p><i>"From stateless models to evolving intelligence."</i></p>
</div>
