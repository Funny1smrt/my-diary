# 📝 My Diary – персональний щоденник

**My Diary** — це вебдодаток, який дозволяє користувачам:
- планувати щоденні задачі 🗂️
- відстежувати витрати і доходи 💰
- вести нотатки 🧠
- мати особистий акаунт 🔐
- зберігати все в хмарі (Firebase)

## 🚀 Технології

- React + Vite
- Firebase (Auth + Firestore)
- Tailwind CSS
- React Router
- Context API + кастомні hooks

## 📦 Структура проєкту


## 🔐 Аутентифікація

- Firebase Auth (email/пароль)
- Приватні маршрути захищені через `PrivateRoute`
- Контекст `AuthContext` для глобального доступу до `user`

## 📌 Задачі

- CRUD: створення, редагування, видалення
- Категорії, дедлайни, статуси
- Збереження в Firebase

## 💰 Фінанси

- Витрати та доходи з категоріями
- Автоматичний розрахунок залишку
- Візуалізація через графіки (Recharts)

## 📝 Нотатки

- Markdown-підтримка
- Локальне або хмарне збереження

## 🌐 Запуск локально

```bash
npm install
npm run dev
