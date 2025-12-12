# Hướng dẫn Deploy Portfolio lên Vercel

## 📋 Bước 1: Chuẩn bị dự án

### 1.1. Đảm bảo dự án đã push lên GitHub

```bash
# Kiểm tra trạng thái git
git status

# Nếu chưa có remote, thêm GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Commit và push code
git add .
git commit -m "Prepare for deployment"
git push -u origin main
```

### 1.2. Kiểm tra build local (tùy chọn nhưng khuyến nghị)

```bash
# Test build trước khi deploy
npm run build
```

Nếu build thành công, bạn có thể tiếp tục deploy.

---

## 🚀 Bước 2: Deploy lên Vercel

### Cách 1: Deploy qua Vercel Dashboard (Khuyến nghị)

#### 2.1. Đăng ký/Đăng nhập Vercel
1. Truy cập [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** hoặc **"Log In"**
3. Chọn đăng nhập bằng **GitHub** (khuyến nghị để tự động sync)

#### 2.2. Tạo Project mới
1. Sau khi đăng nhập, click **"Add New..."** → **"Project"**
2. Chọn repository GitHub của bạn
3. Click **"Import"**

#### 2.3. Cấu hình Project
Vercel sẽ tự động phát hiện Next.js và cấu hình:
- **Framework Preset**: Next.js (tự động)
- **Root Directory**: `./` (mặc định)
- **Build Command**: `npm run build` (tự động)
- **Output Directory**: `.next` (tự động)
- **Install Command**: `npm install` (tự động)

#### 2.4. Cấu hình Environment Variables
Click **"Environment Variables"** và thêm các biến sau (nếu có):

```
NEXT_PUBLIC_GTM=your_google_tag_manager_id
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
GMAIL_PASSKEY=your_gmail_app_password
EMAIL_ADDRESS=your_email@gmail.com
```

**Lưu ý:**
- Các biến bắt đầu bằng `NEXT_PUBLIC_` sẽ được expose ra client-side
- Các biến khác chỉ có ở server-side
- Nếu không dùng tính năng nào, có thể bỏ qua biến đó

#### 2.5. Deploy
1. Click **"Deploy"**
2. Đợi quá trình build hoàn tất (thường mất 2-5 phút)
3. Sau khi deploy xong, bạn sẽ nhận được URL: `https://your-project.vercel.app`

---

### Cách 2: Deploy qua Vercel CLI

#### 2.1. Cài đặt Vercel CLI
```bash
npm install -g vercel
```

#### 2.2. Đăng nhập
```bash
vercel login
```

#### 2.3. Deploy
```bash
# Deploy lần đầu (sẽ hỏi một số câu hỏi)
vercel

# Deploy production
vercel --prod
```

#### 2.4. Thêm Environment Variables qua CLI
```bash
vercel env add NEXT_PUBLIC_GTM
vercel env add TELEGRAM_BOT_TOKEN
# ... thêm các biến khác
```

---

## ⚙️ Bước 3: Cấu hình Domain tùy chỉnh (Tùy chọn)

1. Vào **Project Settings** → **Domains**
2. Thêm domain của bạn
3. Làm theo hướng dẫn để cấu hình DNS

---

## 🔄 Bước 4: Tự động Deploy khi có thay đổi

Vercel tự động deploy khi bạn:
- Push code lên branch `main` hoặc `master`
- Tạo Pull Request (sẽ tạo preview deployment)
- Merge Pull Request

---

## 🐛 Xử lý lỗi thường gặp

### Lỗi Build Failed

1. **Kiểm tra logs trong Vercel Dashboard**
   - Vào Project → Deployments → Click vào deployment failed → Xem logs

2. **Lỗi phổ biến:**
   - **Missing dependencies**: Đảm bảo tất cả dependencies trong `package.json`
   - **Environment variables**: Kiểm tra các biến môi trường đã được thêm chưa
   - **Build command**: Đảm bảo `npm run build` chạy thành công

3. **Test build local:**
   ```bash
   npm run build
   ```

### Lỗi Runtime

- Kiểm tra console trong browser
- Kiểm tra server logs trong Vercel Dashboard
- Đảm bảo tất cả API routes hoạt động đúng

---

## 📝 Checklist trước khi Deploy

- [ ] Code đã được push lên GitHub
- [ ] `npm run build` chạy thành công local
- [ ] Đã cấu hình tất cả Environment Variables cần thiết
- [ ] Đã test các tính năng chính (contact form, etc.)
- [ ] Đã kiểm tra responsive design
- [ ] Đã cập nhật thông tin cá nhân trong `utils/data/personal-data.js`

---

## 🎉 Hoàn thành!

Sau khi deploy thành công, portfolio của bạn sẽ có thể truy cập tại:
- **Production URL**: `https://your-project.vercel.app`
- **Preview URLs**: Mỗi branch/PR sẽ có URL riêng

---

## 📚 Tài liệu tham khảo

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI](https://vercel.com/docs/cli)


