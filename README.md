# 🎓 Groq AI English Grammar Tutor

Bu uygulama, React ve Node.js kullanarak **"Unit 7.2 Adverb Clauses: Cause and Effect"** konusunu interaktif bir şekilde öğreten yapay zeka tabanlı bir platformdur.

---

## 🛠️ Kurulum ve Çalıştırma

Projeyi ayağa kaldırmak için terminale aşağıdaki komutları sırasıyla giriniz:

### 1. Bağımlılıkları Yükle
Aşağıdaki komut projenin çalışması için gerekli tüm kütüphaneleri yükler:
$ npm install

### 2. Ortam Değişkenlerini Ayarla
Ana dizinde (package.json'ın yanında) `.env` dosyası oluşturun ve Groq API anahtarınızı girin:
GROQ_API_KEY=gsk_your_api_key_here

### 3. Uygulamayı Başlat
Hem Frontend hem Backend'i aynı anda tek terminalden çalıştırmak için:
$ npm start

* **Frontend Erişimi:** http://localhost:3005
* **Backend Erişimi:** http://localhost:5000

---

## 📦 Proje Paket Bilgileri

| Paket          | Görevi                                           |
| :------------- | :----------------------------------------------- |
| groq-sdk       | Llama-3.1 modellerine yüksek hızda erişim sağlar. |
| express        | API isteklerini karşılayan sunucu altyapısı.     |
| concurrently   | İstemci ve sunucuyu tek terminalde yönetir.      |
| axios          | Frontend-Backend arası veri transferi sağlar.    |
| dotenv         | Gizli anahtarları (.env) güvenlice yükler.       |

---

## 📝 Örnek Sorgular (AI Teacher)
Yapay zekaya şunları sorarak ders çalışmaya başlayabilirsiniz:
* "What is the difference between 'due to' and 'because of'?"
* "Can you give me 3 sentences using 'since' as a cause?"
* "Give me a multiple-choice question about Unit 7.2."

---

## 🚀 Manuel Test (API Request)

Backend'in çalışıp çalışmadığını doğrudan terminalden test etmek için aşağıdaki komutu kullanabilirsiniz:

(Windows PowerShell):
Invoke-RestMethod -Uri "http://localhost:5000/api/chat" -Method Post -ContentType "application/json" -Body '{"prompt":"Explain because in one sentence."}'

(CMD / Terminal):
curl -X POST http://localhost:5000/api/chat -H "Content-Type: application/json" -d "{\"prompt\": \"Explain because in one sentence.\"}"