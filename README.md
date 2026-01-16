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

--> { "_id": "6967712fc00a47eef409236c",
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

--> {
  "_id": "696885475ebee0796d868817",
    "first_name": "Amjad",
    "last_name": "Khan",
    "date_of_birth": "1998-06-15T00:00:00.000Z",
    "gender": "Male",
    "phone": "+92-300-1234567",
    "email": "amjad.khan@example.com",
    "address": "House 12, Street 5, Model Town",
    "city": "Lahore",
    "state": "Punjab",
    "zip_code": "54000",
    "emergency_contact_name": "Ali Khan",
    "emergency_contact_phone": "+92-301-7654321",
    "allergies": [
        "Peanuts"
    ],
    "created_at": "2026-01-15T06:12:23.633Z",
    "updated_at": "2026-01-15T06:12:23.633Z",
    "__v": 0
    }

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

## 📅 Bookings / Appointments Endpoints (Protected Routes)

> ⚠️ All booking routes require a valid JWT token in the `Authorization` header.

| Method | Endpoint          | Description                        |
| ------ | ----------------- | ---------------------------------- |
| POST   | /api/bookings/new | Create a new booking / appointment |

#### Req Data

--> {
"patient_id": "697123abc",
"appointment_date": "2026-01-20",
"appointment_time": "10:30",
"duration_minutes": 30,
"status": "scheduled",
"reason_for_visit": "General checkup",
"notes": "First time visit"
}

#### Res Data

--> {
"_id": "698xyz...",
"patient_id": "697123abc",
"doctor_id": "6967712fc00a47eef409236c",
"appointment_date": "2026-01-20",
"appointment_time": "10:30",
"duration_minutes": 30,
"status": "scheduled",
"reason_for_visit": "General checkup",
"notes": "First time visit",
"created_at": "2026-01-15T09:30:00.000Z"
}

---

| Method | Endpoint                       | Description                   |
| ------ | ------------------------------ | ----------------------------- |
| GET    | /api/bookings/doctor/:doctorId | Get all bookings for a doctor |

#### Req Data

--> id of doctor

#### Res Data

--> [
{
"_id": "698xyz...",
"patient_id": "697123abc",
"appointment_date": "2026-01-20",
"appointment_time": "10:30",
"status": "scheduled"
}
]

---

| Method | Endpoint                        | Description                   |
| ------ | ------------------------------- | ----------------------------- |
| PATCH  | /api/bookings/update/:bookingId | Update booking status / notes |

#### Req Data

--> {
"status": "completed",
"notes": "Patient consulted successfully"
}

#### Res Data

--> {
"_id": "698xyz...",
"status": "completed",
"notes": "Patient consulted successfully",
"updated_at": "2026-01-15T10:00:00.000Z"
}

---

| Method | Endpoint                        | Description      |
| ------ | ------------------------------- | ---------------- |
| DELETE | /api/bookings/delete/:bookingId | Delete a booking |

#### Req Data

--> id of booking

#### Res Data

--> {"message": "Booking deleted successfully"}

---

## 🏥 Medical Records Endpoints (Protected Routes)

> ⚠️ All medical record routes require a valid JWT token in the `Authorization` header.

| Method | Endpoint                  | Description              |
| ------ | ------------------------- | ------------------------ |
| POST   | /api/medical_records/new   | Create a new medical record |

#### Req Data

--> {
  "patient_id": "697123abc",
  "booking_id": "698xyz...",
  "diagnosis": "Common cold with mild fever",
  "treatment_plan": "Rest and hydration, take prescribed medications",
  "prescriptions": [
    {
      "medication_name": "Paracetamol",
      "dosage": "500mg",
      "frequency": "Three times a day",
      "duration": "5 days"
    }
  ]
}

#### Res Data

--> {
  "_id": "699abc...",
  "patient_id": "697123abc",
  "doctor_id": "6967712fc00a47eef409236c",
  "booking_id": "698xyz...",
  "diagnosis": "Common cold with mild fever",
  "treatment_plan": "Rest and hydration, take prescribed medications",
  "prescriptions": [
    {
      "medication_name": "Paracetamol",
      "dosage": "500mg",
      "frequency": "Three times a day",
      "duration": "5 days"
    }
  ],
  "created_at": "2026-01-15T09:30:00.000Z"
}

---

| Method | Endpoint                                | Description                           |
| ------ | --------------------------------------- | ------------------------------------- |
| GET    | /api/medical_records/patient/:patientId  | Get all medical records for a patient |

#### Req Data

--> id of patient

#### Res Data

--> [
  {
    "_id": "699abc...",
    "patient_id": "697123abc",
    "doctor_id": "6967712fc00a47eef409236c",
    "booking_id": "698xyz...",
    "diagnosis": "Common cold with mild fever",
    "treatment_plan": "Rest and hydration",
    "prescriptions": [...],
    "created_at": "2026-01-15T09:30:00.000Z"
  }
]

---

| Method | Endpoint                            | Description                  |
| ------ | ----------------------------------- | ---------------------------- |
| GET    | /api/medical_records/:recordId       | Get a specific medical record by ID |

#### Req Data

--> id of medical record

#### Res Data

--> {
  "_id": "699abc...",
  "patient_id": "697123abc",
  "doctor_id": "6967712fc00a47eef409236c",
  "booking_id": "698xyz...",
  "diagnosis": "Common cold with mild fever",
  "treatment_plan": "Rest and hydration",
  "prescriptions": [...],
  "created_at": "2026-01-15T09:30:00.000Z"
}

---

| Method | Endpoint                            | Description              |
| ------ | ----------------------------------- | ------------------------ |
| PATCH  | /api/medical_records/update/:recordId | Update a medical record |

#### Req Data

--> {
  "diagnosis": "Common cold - recovered",
  "treatment_plan": "Continue rest for 2 more days",
  "prescriptions": [
    {
      "medication_name": "Vitamin C",
      "dosage": "1000mg",
      "frequency": "Once a day",
      "duration": "7 days"
    }
  ]
}

#### Res Data

--> {
  "_id": "699abc...",
  "patient_id": "697123abc",
  "doctor_id": "6967712fc00a47eef409236c",
  "diagnosis": "Common cold - recovered",
  "treatment_plan": "Continue rest for 2 more days",
  "prescriptions": [...],
  "updated_at": "2026-01-16T10:00:00.000Z"
}

---

| Method | Endpoint                            | Description              |
| ------ | ----------------------------------- | ------------------------ |
| DELETE | /api/medical_records/delete/:recordId | Delete a medical record |

#### Req Data

--> id of medical record

#### Res Data

--> {"message": "Medical Record deleted successfully"}

---

| Method | Endpoint                                                           | Description                         |
| ------ | ------------------------------------------------------------------ | ----------------------------------- |
| DELETE | /api/medical_records/:recordId/prescription/:prescriptionIndex      | Delete a prescription from a record |

#### Req Data

--> id of medical record and index of prescription (0, 1, 2, etc.)

#### Res Data

--> {"message": "Prescription deleted successfully"}

---

## 🤝 Contributing

Pull requests are welcome.

---

## 🧑‍💻 Author

**Amjad Khan**

---
