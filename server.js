// server.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware để xử lý JSON request
app.use(express.json());

// Dữ liệu mẫu (mock data)
let users = [
  { id: 1, name: "Nguyễn Văn A", email: "a@example.com" },
  { id: 2, name: "Trần Thị B", email: "b@example.com" },
];

// GET /api/users - Lấy danh sách người dùng
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET /api/users/:id - Lấy người dùng theo ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// POST /api/users - Tạo người dùng mới
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /api/users/:id - Cập nhật người dùng theo ID
app.put("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  res.json(user);
});

// DELETE /api/users/:id - Xóa người dùng theo ID
app.delete("/api/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send("User not found");

  users.splice(userIndex, 1);
  res.status(204).send();
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
