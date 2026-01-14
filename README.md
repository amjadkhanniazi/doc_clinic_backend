## 📄 Project Title

This is a backend for Clinika. Clinika is a Clinic data management application.

---

## 🚀 Features

* User Authentication - Doctors
* Patient Record Management
* Advertise to Public about the Services

---

## 🛠️ Tech Stack

* Node.js
* Express
* MongoDB

---


## ▶️ Running the Project

```bash
npm start
```

or for dev:

```bash
npm run start
```

---

## 📚 API Endpoints (example)


## Base URL
https://doc-clinic-backend.vercel.app

### Auth

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
#### Req Data
--> { first_name, last_name, specialization, phone, email, password(min-4), licence_number}

### Res Data
--> {"message": "Doctor registered successfully"}

| Method | Endpoint        | Description|
| ------ | --------------- | ---------- |
| POST   | /api/auth/login | Login user |

#### Req Data
--> { email, password(min-4) }

#### Res Data
--> {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NjcyZWU0OTllMWIwYWVhNmY2ZTdmZSIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTc2ODM4MTk2MSwiZXhwIjoxNzY4NDEwNzYxfQ.w5KRGomly7C7zTymvV4MD3j7WJKvjSMjgFH3VHNDf7E"}

## 🤝 Contributing

Pull requests are welcome.

---

## 🧑‍💻 Author

**Amjad Khan**
amjadkhanniazi010@gmail.com

---