# 👨‍💼 Employee Management System (EMS)

A **React-based Employee Management System** to **create, assign, and track tasks** for employees.  
Tasks are stored in **localStorage** and counters update in real-time using React hooks.

---

## ✨ Features

- 📝 **Task Creation Form**  
  Add new tasks with title, date, category, and description.  
  Assign tasks to employees using their unique ID.

- ⚡ **Real-Time Task Counters (via `useEffect`)**  
  Automatically updates counts for:  
  - New Tasks  
  - Active Tasks  
  - Completed Tasks  
  - Failed Tasks  

- 🗑️ **Task Deletion**  
  Remove tasks instantly and counters recalculate automatically.

- 💾 **LocalStorage Persistence**  
  All employee data and tasks are saved in browser localStorage.  
  Data remains intact even after page refresh.

- 📊 **Employee Progress Dashboard**  
  Displays each employee’s task counts in a clean, tabular layout.  
  Easy to monitor work progress at a glance.

- 🔧 **Work in Progress**  
  Responsive design and advanced features (like task status updates, search filters, and role-based views) are still under development.  
  Future updates will include improved UI polish and mobile-friendly layouts.

---

## 🛠️ Technologies Used

- **React.js** – Component-based UI  
- **Context API** – Global state management  
- **Tailwind CSS** – Styling and layout  
- **JavaScript (ES6)** – Logic for task handling  
- **LocalStorage** – Persistent data storage  

---

## 🚀 How It Works

1. Admin fills the **Create Task Form**.  
2. On submit, a new task object is created with flags (`active`, `newTask`, `completed`, `failed`).  
3. The task is added to the selected employee’s `tasks` array.  
4. **Counters (`taskNumbers`)** are recalculated automatically inside `useEffect`.  
5. Updated employee data is saved to **localStorage**.  
6. The **AllTask Dashboard** instantly reflects the new counts.

---

## 🧩 React Concepts Used

- `useState` – Form inputs and local state  
- `useContext` – Accessing AuthContext for employees data  
- `useEffect` – Auto recalculation of counters when tasks change  
- Conditional rendering for task status  
- Array methods for logic (`map`, `filter`)  

---

## 🚀 Future Enhancements

- 📱 Mobile-friendly responsive design  
- 🔍 Employee search & filter  
- 🔑 Role-based dashboards (Admin vs Employee)  
- ✅ Task status update buttons  
- 📸 Screenshots & demo video  

---

## ▶️ Installation & Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/EMS.git
   cd EMS,
   npm install,
   npm start
