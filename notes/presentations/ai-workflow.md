---
theme: ./themes/dracula.json
author: Lalit Kumar
---

# AI as Your Co-Pilot 🤖

### A Practical Guide to Workflow Optimization

> Let's stop thinking of AI as a magic code writer and start using it as an intelligent assistant.

---

## 1. The Real Bottleneck isn't Typing 😫

* **Cognitive Load:** The hardest part isn't writing code; it's holding project context in our heads.

* **The "Grunt Work" Tax:** Time lost on repetitive tasks like writing boilerplate, debugging simple errors, or writing docs.

* **Automate Your Context:** Use context files to give your AI a "memory" for each project.
  * `GEMINI.md`: Provides rules and guidelines for the Gemini CLI.
  * `AGENTS.md`: A standard for providing context to agents like Cursor.

* **The Promise:** Offload this cognitive and repetitive work to focus on real problem-solving.

---

## 2. The Mindset Shift: From Generator to Assistant 🧠

* **Augment, Don't Replace:** This isn't about replacing your skills; it's about **augmenting** them so you can focus on higher-level problems.

* **Treat the AI like a brilliant junior developer:**
  * It's incredibly fast and knows a lot.
  * But it lacks deep project context.
  * Your role is to be the senior developer: **guide it and review its work.**

* **Change Your Goal:** The most effective prompt isn't **"Write code for me"**, but rather **"Help me understand this"**.

---

## 3. The Power of Context 📚

The quality of AI assistance is directly proportional to the quality of the context you provide.

### ⭐ Demo 1: Bad vs. Good Context

**Bad Context:** (In `UserProfile.jsx`)
> _"How do I add a loading state?"_
> Result: A generic, context-unaware answer.

**Good Context:**
> _"Looking at `@ApiService.js` and `@useAuthStore.js`, refactor `UserProfile.jsx` to show a loading spinner..."_
> Result: A solution perfectly integrated with your project's logic.

---

## 4. Customizing Your Assistant 🛠️

### Project-Specific Rules

You can teach the AI your team's standards on a per-project basis by creating rule files in a `.cursor/rules/` directory. It's like an `.eslintrc` for your AI.

### ⭐ Demo 2: Enforcing Standards

1. Create a rule file (e.g., `.cursor/rules/react-standards.mdc`) with your guidelines:

    ```text
    - All functions must have JSDoc comments.
    - Always use async/await instead of .then().
    - Use our custom `Button` component from `@/components/ui`.
    ```

2. Ask the AI to generate a new function.
3. The generated code will automatically adhere to your project's rules.

> **Note:** For rules you want in _every_ project, you can set them globally in the main Cursor settings.

### ⭐ Pro Tip: Fearless Refactoring with Checkpoints

Cursor automatically creates a "checkpoint" every time the AI modifies your code.

* **Automatic Safety Net:** Think of it as an AI-specific undo button.
* **Experiment Freely:** If the AI makes a mistake, you can instantly restore your files to the state they were in before the change.
* **Clean Git History:** These checkpoints are separate from Git, so your commit log stays clean.

---

## 5. Beyond the Editor: AI for Your Workflow 🚀

The **Gemini CLI** brings your AI assistant directly into your terminal.

### ⭐ Demo 3: Powerful Terminal Commands

1. **AI-Powered Git Commits:**

    ```bash
    git diff | gemini "Generate a concise commit message."
    ```

2. **Scripting & Automation:**

    ```bash
    gemini "Write a bash script to find and delete *.tmp files older than 3 days."
    ```

3. **Custom Commands with `.toml` files:**
    Create reusable commands in `.gemini/commands/`. For example, `git/commit.toml`:

    ```toml
    description = "Generate a commit message from git diff"
    prompt = "Generate a concise commit message for the following git diff:\n\n!{git diff}"
    ```

    Now you can just run: `gemini /git:commit`

4. **Enable Checkpoints for Safety:**
    You can enable checkpointing to save the state of your project before the CLI makes changes.

    ```bash
    # Enable for one session
    gemini --checkpointing

    # Or enable permanently in settings.json
    ```

    This allows you to undo any changes with the `/restore` command.

---

## 6. Supercharge Your Workflow with Spec-Driven Development 📝

**The Concept:** Move beyond generating code snippets to generating entire implementation plans. With Spec-Driven Development (SDD), you use AI to translate a high-level feature idea into a formal specification _before_ writing any code.

**The Impact:**

* **Clarity:** Ensures you and the AI agree on what to build.
* **Automation:** Automates the creation of technical specs, plans, and tasks.
* **Alignment:** Creates a clear contract for development.

**Start with `/specify`:** Describe your feature in natural language.

```text
/specify Build a feature that allows users to upload a profile picture. It should handle image resizing to 200x200 and upload to a specified cloud storage bucket.
```

> To learn more about the full workflow, including the `/plan` and `/tasks` commands, visit the [github/spec-kit](https://github.com/github/spec-kit) repository.

---

## 7. Advanced Customization: MCP Servers 🧠

For ultimate customization, the Gemini CLI can connect to **Model Context Protocol (MCP) Servers**. These are external services that provide new tools and capabilities to the AI.

Some powerful MCP tools include:

* **`context7`**: Provides access to up-to-date documentation for thousands of libraries and packages.
* **`server-sequential-thinking`**: Enables the AI to perform complex, multi-step reasoning and problem-solving.
* **`crash`**: A tool for structured, iterative reasoning, allowing the AI to break down, plan, and execute complex tasks with a high degree of control.

> **Note:** Be mindful of the tools and context you provide. Adding too much can negatively impact the model's performance and focus.

---

## 8. Key Takeaways ✅

* **Think Assistant, Not Autopilot:** Guide and review.
* **Master the Art of Context:** Use `@`-mentions to provide relevant files.
* **Customize Your Tools:** Use project rules, custom commands, and even MCP servers.
* **Automate Everything Else:** Use CLI tools and Spec-Driven Development.

> **CRITICAL REMINDER:** Always verify the AI's output. You are ultimately responsible for the code you commit.

---

## 9. Resources & Advanced Topics 💡

* **[Cursor](https://cursor.sh)**: An AI-first code editor designed for pair-programming with artificial intelligence.
* **[Gemini CLI](https://github.com/google-gemini/gemini-cli)**: A command-line interface that brings the power of Google's Gemini models to your terminal for scripting and automation.
* **[spec-kit](https://github.com/github/spec-kit)**: A reference for Spec-Driven Development, enabling AI-powered project planning and task generation.
* **[Agents.md Examples](https://agents.md/)**: Explore practical examples of the `AGENTS.md` specification for providing context to AI agents.
* **[Cursor Rules Documentation](https://cursor.com/docs/context/rules)**: Official documentation on how to create and use rules to customize Cursor's behavior.
* **[Cursor AGENTS.md Integration](https://cursor.com/docs/context/rules#agentsmd)**: Learn how to use `AGENTS.md` files specifically within the Cursor environment.
* **[Community Cursor Rules on GitHub](https://github.com/search?q=.cursor%2Frules+language%3AMarkdown&ref=opensearch&type=code&l=Markdown)**: Discover and draw inspiration from open-source `.cursor/rules` files shared by the community.
* **[Community Gemini Commands on GitHub](https://github.com/search?q=.gemini%2Fcommands+language%3Atoml&ref=opensearch&type=code)**: Find examples of custom Gemini commands that can be adapted as rules in Cursor.
* **[AWS Model-Context-Protocol (MCP)](https://github.com/awslabs/mcp)**: The official AWS implementation of the Model Context Protocol for integrating AWS services.
* **[fastmcp](https://github.com/jlowin/fastmcp)**: A lightweight server implementation for creating and hosting your own custom MCP tools locally.
* **[MCP Servers Collection](https://github.com/modelcontextprotocol/servers)**: A curated list of community-contributed MCP servers to extend your AI's capabilities.
* **[MCP Servers Directory](https://mcpservers.org/)**: A searchable directory for discovering available MCP servers.
* **Advanced Topic - Local Models**: For maximum security and offline use, you can explore running models on your own machine using tools like **Ollama** or **LM Studio**.

---

## Questions? 💬

---

## Thank You! 🙏

