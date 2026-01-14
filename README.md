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

### Auth - EndPoints(Req/Res Data)

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
#### Req Data
--> { first_name, last_name, specialization, phone, email, password(min-4), licence_number}

#### Res Data
--> {"message": "Doctor registered successfully"}

| Method | Endpoint        | Description|
| ------ | --------------- | ---------- |
| POST   | /api/auth/login | Login user |

#### Req Data
--> { email, password(min-4) }

#### Res Data
--> {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NjcyZWU0OTllMWIwYWVhNmY2ZTdmZSIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTc2ODM4MTk2MSwiZXhwIjoxNzY4NDEwNzYxfQ.w5KRGomly7C7zTymvV4MD3j7WJKvjSMjgFH3VHNDf7E"}

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| Get    | /api/doctors/alldoctors | Return All Doctors |

#### Res Data
--> [
    {
        "id": "69672ee499e1b0aea6f6e7fe",
        "first_name": "John",
        "last_name": "Doe",
        "specialization": "Cardiologist",
        "email": "johndoe@example.com",
        "licence_number": "LIC-987654"
    },
    {
        "id": "6967712fc00a47eef409236c",
        "first_name": "amjad",
        "last_name": "khan",
        "specialization": "Cardiologist",
        "email": "amjad@example.com",
        "licence_number": "LIC-987655"
    }
]

| Method | Endpoint                 | Description  |
| ------ | ------------------------ | ------------ |
| Get    | /api/doctors/profile/:id | Doctor By ID |

#### Req Data
--> id of doctor

#### Res Data
--> {
    "_id": "6967712fc00a47eef409236c",
    "first_name": "amjad",
    "last_name": "niazi",
    "specialization": "Cardiologist",
    "phone": "+92-3244217097",
    "email": "amjad@example.com",
    "licence_number": "LIC-987655",
    "is_active": true,
    "created_at": "2026-01-14T10:34:23.473Z",
    "updated_at": "2026-01-14T10:35:01.406Z"
}

| Method | Endpoint                       | Description|
| ------ | ------------------------------ | ---------- |
| PUT    | /api/doctors/updateprofile/:id | Login user |

#### Req Data
--> {
  "first_name": "amjad",
  "last_name": "niazi",
  "specialization": "Cardiologist",
  "phone": "+92-3244217097",
  "email": "amjad@example.com"
}

#### Res Data
--> {"message": "Profile updated successfully"}

| Method | Endpoint                  | Description     |
| ------ | ------------------------- | --------------- |
| DELETE   | /api/doctors/delete/:id | Delete Doc/User |

#### Req Data
--> id of Doctor

#### Res Data
--> {"message": "Doctor deleted successfully"}

## 🤝 Contributing

Pull requests are welcome.

---

## 🧑‍💻 Author

**Amjad Khan**
amjadkhanniazi010@gmail.com

---