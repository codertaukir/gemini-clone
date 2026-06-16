# Gemini Clone 

Hey! This is a full-stack-looking, fully responsive **Google Gemini Clone** built using **React.js** and Vite. It connects directly with Google's official `@google/genai` SDK to fetch real-time AI responses using the `gemini-2.5-flash` model. 

Mainly made this project to clean up my frontend layouts, practice Context API for global state management, and understand how to securely handle third-party SDKs on the client side.

---

##  Tech Stack & Tools

* **Frontend:** React.js (Functional Components, Hooks)
* **Build Tool:** Vite (Super fast bundling)
* **Styling:** Custom CSS (Handcrafted layout, sidebar animations)
* **Icons:** `react-icons` (GiHamburgerMenu, FaPlus, FiMessageSquare, IoClose)
* **API Integration:** Official `@google/genai` SDK
* **Model Used:** `gemini-2.5-flash`

---

##  Key Features Inside

1. **Collapsible Sidebar:** Smooth state-controlled toggle (`extand` state) that minimizes the sidebar into a clean icon-only navigation bar.
2. **Context-Driven Architecture:** All states (`input`, `prevData`, `loading`, `showResult`) are globally managed inside a custom React Context provider to avoid prop-drilling.
3. **Smart History Log:** Your recent prompt history automatically appends to the sidebar. It includes a duplicate checker (`prev.includes`) so things don't get messy if you query the same thing twice.
4. **String Truncation:** Clean text logic in the sidebar that caps long questions using word splits (`item.split(" ")`) and appends a clean `...` without breaking the text blocks.
5. **Secure Environment Variables:** Uses Vite’s standard `import.meta.env` system to make sure private API keys stay hidden on the frontend.

---

##  Project Structure Snapshot

```text
GEMINI-CLONE/
  ├── node_modules/
  ├── src/
  │   ├── components/
  │   │   └── Sidebar/
  │   │       ├── Sidebar.jsx
  │   │       └── sidebar.css
  │   ├── context/
  │   │   └── UserContext.jsx
  │   ├── gemini.js         # Core API setup and model calls
  │   ├── main.jsx
  │   └── App.jsx
  ├── .env                 # Root level env configurations (Hidden)
  ├── .gitignore           # Making sure node_modules & keys don't leak
  ├── package.json
  └── vite.config.js