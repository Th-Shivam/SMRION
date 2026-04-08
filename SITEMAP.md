<div align="center">
  <img src="public/favicon.svg" alt="SMRION Logo" width="120" height="120" />
  
  <br/>
  
  # **SMRION Site Map**
  
  **Complete Navigation Guide & Resource Directory**
  
  <p align="center">
    <a href="#main-pages">Main Pages</a> •
    <a href="#documentation">Documentation</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#api-reference">API Reference</a> •
    <a href="#resources">Resources</a>
  </p>

  [![Pages: 15+](https://img.shields.io/badge/Pages-15+-8B5CF6?style=flat-square)](#)
  [![Status: Live](https://img.shields.io/badge/Status-Live-3B82F6?style=flat-square)](#)
</div>

---

## 🗺️ Navigation Overview

This sitemap provides a complete overview of all pages, sections, and resources available on the SMRION platform. Use this guide to quickly navigate to any part of our documentation, product information, or technical resources.

---

## 🏠 Main Pages

The core pages that define the SMRION platform and product offering.

### **Home** → `/`
**Product Overview & Key Features**

The landing page showcases SMRION's core value proposition: solving the stateless AI problem through persistent memory infrastructure. Features include:
- Hero section with interactive typing demo
- Memory lifecycle visualization
- Evolution timeline
- Memory stack architecture
- Interactive product demo

**Key Sections:**
- 🎯 Hero & Value Proposition
- 🔄 Lifecycle Visualization
- 📈 Evolution Timeline
- 🧠 Memory Stack Overview
- 🎮 Interactive Demo

---

### **Architecture** → `/architecture`
**System Design & Technical Deep-Dive**

Comprehensive technical documentation explaining SMRION's hybrid memory retrieval architecture, core pipeline, and system modules.

**Key Sections:**
- 🏗️ Architecture Hero
- ⚠️ Problem Statement (Stateless AI)
- ⚙️ Core Pipeline Flow
- 🔀 Hybrid Retrieval System (BM25 + Semantic)
- 🔁 Memory Loop Visualization
- 📦 System Modules
- 📊 Performance Metrics
- 🚀 Call-to-Action

**Technical Focus:**
- Page Indexing (BM25)
- Vector Embeddings (RAG)
- Hybrid Retrieval Strategy
- Neural Node Architecture

---

### **Documentation** → `/docs`
**API Guides & Integration Resources**

Central hub for all technical documentation, API references, and integration guides. Currently in development with placeholder content.

**Status:** 🚧 In Progress (Backend under construction)

**Planned Sections:**
- Getting Started Guides
- API Documentation
- Integration Tutorials
- Code Examples
- Best Practices

---

### **Beta Access** → `/onboarding`
**Join the Early Access Program**

Multi-step onboarding form for developers and organizations interested in joining SMRION's beta program.

**Form Sections:**
1. **Personal Information** (Name, Email, Organization)
2. **Role Selection** (Developer, Product Manager, Researcher, etc.)
3. **Use Case Selection** (Chatbots, Knowledge Management, etc.)
4. **System Preferences** (Memory retention, retrieval speed, etc.)
5. **Configuration Tuning** (Latency thresholds, context window size)

**Features:**
- Progressive form flow
- Card-based selection UI
- Slider inputs for tuning
- Real-time validation

---

## 📚 Documentation

Comprehensive guides and resources for integrating SMRION into your AI applications.

### **Getting Started**

#### **Introduction** → `/docs`
**What is SMRION and Why It Matters**

Foundational overview of SMRION's purpose, core concepts, and the problem it solves in the AI ecosystem.

**Topics Covered:**
- The Stateless AI Problem
- SMRION's Solution Approach
- Key Benefits & Use Cases
- Platform Overview

---

#### **Quickstart** → `/docs/quickstart`
**Get Up and Running in 5 Minutes**

Fast-track guide to integrate SMRION into your application with minimal setup.

**Quick Steps:**
1. API Key Generation
2. SDK Installation
3. Basic Configuration
4. First Memory Store
5. First Memory Retrieval

**Code Examples:**
- REST API calls
- SDK usage (Python, JavaScript, etc.)
- MCP integration

---

#### **Core Concepts** → `/docs/concepts`
**Fundamental Principles & Terminology**

Deep dive into the theoretical foundations and key concepts that power SMRION.

**Concepts Explained:**
- Memory Silos & Isolation
- Hybrid Retrieval (Semantic + Keyword)
- Context Injection
- Relevance Scoring
- Memory Lifecycle
- Vector Embeddings
- BM25 Indexing

---

## 🏗️ Architecture

Technical architecture documentation for developers and system architects.

### **Memory Loop** → `/docs/memory`
**Continuous Learning & Context Retention**

Detailed explanation of SMRION's memory loop mechanism that enables continuous learning and context accumulation.

**Architecture Components:**
- Input Processing
- Memory Storage
- Retrieval Triggers
- Context Injection
- Feedback Loop

**Diagrams:**
- Memory Loop Flow
- Data Pipeline
- Feedback Mechanism

---

### **Vector Sync** → `/docs/vector-sync`
**Semantic Embedding Synchronization**

Technical documentation on how SMRION manages vector embeddings and keeps them synchronized across distributed nodes.

**Topics:**
- Embedding Generation
- Vector Database Management
- Synchronization Protocols
- Consistency Guarantees
- Performance Optimization

---

### **Neural Nodes** → `/docs/nodes`
**Distributed Memory Node Architecture**

Overview of SMRION's distributed node architecture that enables scalable, fault-tolerant memory storage.

**Node Types:**
- Storage Nodes
- Retrieval Nodes
- Processing Nodes
- Gateway Nodes

**Features:**
- Load Balancing
- Fault Tolerance
- Data Replication
- Horizontal Scaling

---

## 🔌 API Reference

Complete API documentation for developers integrating SMRION.

### **Authentication** → `/docs/auth`
**API Keys, OAuth & Security**

Comprehensive guide to authenticating with SMRION's API and securing your integration.

**Authentication Methods:**
- API Key Authentication
- OAuth 2.0 Flow
- JWT Tokens
- Webhook Signatures

**Security Best Practices:**
- Key Rotation
- Rate Limiting
- IP Whitelisting
- Encryption Standards

---

### **Endpoints** → `/docs/api-endpoints`
**REST API Endpoint Reference**

Complete reference documentation for all SMRION REST API endpoints.

**Endpoint Categories:**

**Memory Operations:**
- `POST /memory/store` - Store new memory
- `GET /memory/retrieve` - Retrieve relevant memories
- `DELETE /memory/{id}` - Delete specific memory
- `PUT /memory/{id}` - Update memory metadata

**User Management:**
- `POST /users` - Create user silo
- `GET /users/{id}` - Get user details
- `DELETE /users/{id}` - Delete user silo

**Analytics:**
- `GET /analytics/usage` - Usage statistics
- `GET /analytics/performance` - Performance metrics

---

### **Webhooks** → `/docs/webhooks`
**Event-Driven Integrations**

Documentation for setting up webhooks to receive real-time notifications from SMRION.

**Available Events:**
- `memory.stored` - New memory stored
- `memory.retrieved` - Memory retrieved
- `memory.deleted` - Memory deleted
- `silo.created` - New user silo created
- `threshold.exceeded` - Usage threshold exceeded

**Webhook Configuration:**
- Endpoint Registration
- Payload Structure
- Signature Verification
- Retry Logic

---

## 📖 Resources

Additional resources, tools, and community links.

### **GitHub Repository** → `#` (External)
**Source Code & Contributions**

Access SMRION's open-source components, contribute to the project, and explore code examples.

**Repository Contents:**
- SDK Source Code
- Code Examples
- Integration Templates
- Issue Tracker
- Contribution Guidelines

---

### **Sitemap** → `/docs/sitemap`
**Complete Site Navigation Overview**

Interactive sitemap showing all pages and resources available on the SMRION platform (you are here!).

**Features:**
- Categorized Navigation
- Page Descriptions
- Quick Links
- Visual Organization

---

## 🎯 Quick Access Links

### For Developers
- [Quickstart Guide](/docs/quickstart) - Get started in 5 minutes
- [API Reference](/docs/api-endpoints) - Complete endpoint documentation
- [Authentication](/docs/auth) - Secure your integration
- [GitHub Repository](#) - Explore code examples

### For Product Teams
- [Architecture Overview](/architecture) - Understand the system
- [Core Concepts](/docs/concepts) - Learn key principles
- [Use Cases](/onboarding) - Explore applications
- [Beta Access](/onboarding) - Join the program

### For Researchers
- [Memory Loop](/docs/memory) - Continuous learning mechanism
- [Hybrid Retrieval](/docs/vector-sync) - Semantic + keyword search
- [Neural Nodes](/docs/nodes) - Distributed architecture
- [Performance Metrics](/architecture) - System benchmarks

---

## 🔍 Search Tips

**Finding Specific Information:**
- Use browser search (Ctrl+F / Cmd+F) on this page
- Navigate via the [table of contents](#navigation-overview)
- Check the [interactive sitemap](/docs/sitemap) for visual navigation
- Explore the [documentation hub](/docs) for detailed guides

---

## 📊 Site Statistics

| Metric | Count |
|--------|-------|
| **Main Pages** | 4 |
| **Documentation Pages** | 9 |
| **API Endpoints** | 10+ |
| **Code Examples** | 20+ |
| **Diagrams & Visuals** | 15+ |

---

## 🚀 Getting Started

New to SMRION? Follow this recommended path:

1. **Understand the Problem** → [Home](/) - Learn about stateless AI
2. **Explore the Solution** → [Architecture](/architecture) - See how SMRION works
3. **Read the Docs** → [Introduction](/docs) - Understand core concepts
4. **Try It Out** → [Quickstart](/docs/quickstart) - Build your first integration
5. **Join Beta** → [Beta Access](/onboarding) - Get early access

---

## 🆘 Need Help?

Can't find what you're looking for?

- 📧 **Contact Support** - [support@smrion.ai](mailto:support@smrion.ai)
- 💬 **Community Forum** - Join our developer community
- 🐛 **Report Issues** - [GitHub Issues](#)
- 📝 **Request Docs** - Suggest new documentation topics

---

## 🔄 Last Updated

**Version:** 4.0.2 Alpha  
**Last Updated:** April 2026  
**Status:** Active Development

---

<div align="center">
  <br/>
  <p><i>"Navigate with confidence. Build with clarity."</i></p>
  
  <br/>
  
  <a href="/">← Back to Home</a> •
  <a href="/docs">Documentation Hub</a> •
  <a href="/docs/sitemap">Interactive Sitemap</a>
</div>
