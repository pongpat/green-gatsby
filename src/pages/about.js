import React from "react"
import { Link } from 'gatsby'

const About = () => (
<div>
    <h1>ทดลองสร้างหน้า About Page</h1>
    โดยทำการสร้างไฟล์ชื่อ about.js ขึ้นมาในโฟลเดอร์ src/about.js
    <br/>
    <Link to="/">ลิงก์กลับหน้าแรก</Link>
    <br/>
    (ก่อนจะใส่ลิงก์ได้พบว่าต้อง import Link from gatsby เพิ่มเข้ามาก่อน)
</div>
)
export default About