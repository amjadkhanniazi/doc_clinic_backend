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

[https://doc-clinic-backend.vercel.app](https://doc-clinic-backend.vercel.app)

### Auth - EndPoints(Req/Res Data)

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |

#### Req Data

--> { first_name, last_name, specialization, phone, email, password(min-4), licence_number}

#### Res Data

--> {"message": "Doctor registered successfully"}

| Method | Endpoint        | Description |
| ------ | --------------- | ----------- |
| POST   | /api/auth/login | Login user  |

#### Req Data

--> { email, password(min-4) }

#### Res Data

--> {"token": "JWT_TOKEN"}

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| Get    | /api/doctors/alldoctors | Return All Doctors |

#### Res Data

--> []

| Method | Endpoint                 | Description  |
| ------ | ------------------------ | ------------ |
| Get    | /api/doctors/profile/:id | Doctor By ID |

#### Req Data

--> id of doctor

#### Res Data

--> {}

| Method | Endpoint                       | Description   |
| ------ | ------------------------------ | ------------- |
| PUT    | /api/doctors/updateprofile/:id | Update Doctor |

#### Res Data

--> {"message": "Profile updated successfully"}

| Method | Endpoint                | Description     |
| ------ | ----------------------- | --------------- |
| DELETE | /api/doctors/delete/:id | Delete Doc/User |

#### Res Data

--> {"message": "Doctor deleted successfully"}

---

## 🧑‍⚕️ Patient Management Endpoints (Protected Routes)

> ⚠️ All patient routes require a valid JWT token in the `Authorization` header.

| Method | Endpoint                 | Description       |
| ------ | ------------------------ | ----------------- |
| POST   | /api/patients/addpatient | Add a new patient |

#### Req Data

--> {
"first_name": "Ali",
"last_name": "Khan",
"date_of_birth": "1998-05-12",
"gender": "Male",
"phone": "+92-3001234567",
"email": "[ali@example.com](mailto:ali@example.com)",
"address": "Street 10",
"city": "Lahore",
"state": "Punjab",
"zip_code": "54000",
"emergency_contact_name": "Ahmed Khan",
"emergency_contact_phone": "+92-3007654321",
"blood_group": "O+",
"allergies": "None"
}

#### Res Data

--> {"message": "Patient added successfully"}

---

| Method | Endpoint                  | Description      |
| ------ | ------------------------- | ---------------- |
| GET    | /api/patients/allpatients | Get all patients |

#### Res Data

--> []

---

| Method | Endpoint                  | Description               |
| ------ | ------------------------- | ------------------------- |
| GET    | /api/patients/profile/:id | Get patient profile by ID |

#### Req Data

--> id of patient

#### Res Data

--> {}

---

| Method | Endpoint                        | Description            |
| ------ | ------------------------------- | ---------------------- |
| PUT    | /api/patients/updateprofile/:id | Update patient profile |

#### Res Data

--> {"message": "Profile updated successfully"}

---

| Method | Endpoint                 | Description    |
| ------ | ------------------------ | -------------- |
| DELETE | /api/patients/delete/:id | Delete patient |

#### Res Data

--> {"message": "Patient deleted successfully"}

---

## 🤝 Contributing

Pull requests are welcome.

---

## 🧑‍💻 Author

**Amjad Khan**
amjadkhanniazi010@gmail.com

---