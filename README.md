<div align="center"> 
  <h1>NodeJS - Express - Postman - Example - Simple</h1>   
</div>   

<div algin="center"> &nbsp &nbsp
  <img src="https://img.beget.com/cp/plain/shared/xoKELFIyHKF4-V5ZaKBvDC7xhOoZJW71/logo_nodejs2x.png@.webp" width="250"/> &nbsp &nbsp
  <img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" width="250"/> &nbsp &nbsp
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" width="250"/>
</div>

#

<div align="center"> 
  <h1>Hướng Dẫn Sử Dụng</h1>   
</div>   

## B1: Tạo Folder: my-nodejs
## B2: Mở VSCode, Chọn File -> Open Folder -> Select Folder "my-nodejs" 
## B3: Mở Terminal -> New Terminal -> gõ lệnh: 'npm init-y'
## B4: Gõ lệnh: 'npm install express'
## B5: Tạo file server.js
## B6: Gõ lệnh 'node server.js' để chạy
## B7: Mở Postman
## B8: Tạo GET và nhập 'http://localhost:3000/api/users' và bấm Send để hiển thị danh sách.
## B9: Tạo POST và nhập 'http://localhost:3000/api/users' và Chuyển đến tab Headers, và thêm một header mới với key là Content-Type và giá trị là application/json. và bấm Send để thêm người dùng vào danh sách, và vào tab Body để chọn 'raw' và từ dropdown (list có mũi tên) chọn JSON. Trong phần nội dung Body, nhập dữ liệu JSON mà bạn muốn gửi.
## B10: Tạo PUT và nhập 'http://localhost:3000/api/users/3' (vì id=3) và Chuyển đến tab Headers, và thêm một header mới với key là Content-Type và giá trị là application/json. và bấm Send để cập nhật người dùng trong danh sách
## B11: Tạo DELETE và nhập 'http://localhost:3000/api/users/3' và bấm Send để xóa người dùng trong danh sách


- GET /api/users: Trả về danh sách tất cả người dùng.
- GET /api/users/:id: Trả về thông tin người dùng theo ID.
- POST /api/users: Thêm người dùng mới vào danh sách.
- PUT /api/users/:id: Cập nhật thông tin người dùng.
- DELETE /api/users/:id: Xóa người dùng theo ID.
