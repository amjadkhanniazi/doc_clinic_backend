# 🏥 Clinika Backend API Documentation

A comprehensive clinic data management application backend for managing doctors, patients, appointments, and medical records.

---

## 🚀 Features

- **User Authentication** - Secure doctor authentication system
- **Patient Record Management** - Complete patient data management
- **Appointment Scheduling** - Book and manage appointments
- **Medical Records** - Digital health records with prescriptions
- **Public Services** - Advertise clinic services to the public

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB

---

## ▶️ Running the Project

**Production:**
```bash
npm start
```

**Development:**
```bash
npm run dev
```

---

## 📚 API Documentation

### Base URL
```
https://doc-clinic-backend.vercel.app
```

---

## 🔐 Authentication Endpoints

### Register Doctor

**Endpoint:** `POST /api/auth/register`

**Description:** Register a new doctor account

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "specialization": "Cardiologist",
  "phone": "+92-3001234567",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "licence_number": "LIC-123456"
}
```

**Validation Rules:**
- `password`: Minimum 4 characters
- All fields are required

**Response:**
```json
{
  "message": "Doctor registered successfully"
}
```

**Status Codes:**
- `201` - Created successfully
- `400` - Validation error
- `409` - Email already exists

---

### Login

**Endpoint:** `POST /api/auth/login`

**Description:** Authenticate doctor and receive JWT token

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Validation Rules:**
- `password`: Minimum 4 characters

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "id": "dfgrfg568h8t5"
}
```

**Status Codes:**
- `200` - Login successful
- `401` - Invalid credentials
- `400` - Validation error

---

## 👨‍⚕️ Doctor Endpoints

### Get All Doctors

**Endpoint:** `GET /api/doctors/alldoctors`

**Description:** Retrieve a list of all registered doctors

**Response:**
```json
[
  {
    "_id": "6967712fc00a47eef409236c",
    "first_name": "John",
    "last_name": "Doe",
    "specialization": "Cardiologist",
    "phone": "+92-3001234567",
    "email": "john.doe@example.com",
    "licence_number": "LIC-123456",
    "is_active": true,
    "created_at": "2026-01-14T10:34:23.473Z",
    "updated_at": "2026-01-14T10:35:01.406Z"
  }
]
```

**Status Codes:**
- `200` - Success
- `500` - Server error

---

### Get Doctor Profile

**Endpoint:** `GET /api/doctors/profile/:id`

**Description:** Retrieve a specific doctor's profile by ID

**URL Parameters:**
- `id` (string, required) - Doctor's unique identifier

**Example Request:**
```
GET /api/doctors/profile/6967712fc00a47eef409236c
```

**Response:**
```json
{
  "_id": "6967712fc00a47eef409236c",
  "first_name": "John",
  "last_name": "Doe",
  "specialization": "Cardiologist",
  "phone": "+92-3001234567",
  "email": "john.doe@example.com",
  "licence_number": "LIC-123456",
  "is_active": true,
  "created_at": "2026-01-14T10:34:23.473Z",
  "updated_at": "2026-01-14T10:35:01.406Z"
}
```

**Status Codes:**
- `200` - Success
- `404` - Doctor not found
- `500` - Server error

---

### Update Doctor Profile

**Endpoint:** `PUT /api/doctors/updateprofile/:id`

**Description:** Update doctor's profile information

**URL Parameters:**
- `id` (string, required) - Doctor's unique identifier

**Request Body:** (all fields optional)
```json
{
  "first_name": "John",
  "last_name": "Smith",
  "specialization": "Cardiologist",
  "phone": "+92-3009876543",
  "is_active": true
}
```

**Response:**
```json
{
  "message": "Profile updated successfully"
}
```

**Status Codes:**
- `200` - Updated successfully
- `404` - Doctor not found
- `400` - Validation error

---

### Delete Doctor

**Endpoint:** `DELETE /api/doctors/delete/:id`

**Description:** Delete a doctor account

**URL Parameters:**
- `id` (string, required) - Doctor's unique identifier

**Response:**
```json
{
  "message": "Doctor deleted successfully"
}
```

**Status Codes:**
- `200` - Deleted successfully
- `404` - Doctor not found
- `500` - Server error

---

## 🧑‍⚕️ Patient Management Endpoints

> ⚠️ **Authentication Required:** All patient routes require a valid JWT token in the `Authorization` header.
> 
> **Header Format:** `Authorization: Bearer <your_jwt_token>`

---

### Add New Patient

**Endpoint:** `POST /api/patients/addpatient`

**Description:** Register a new patient in the system

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Request Body:**
```json
{
  "first_name": "Ali",
  "last_name": "Khan",
  "date_of_birth": "1998-05-12",
  "gender": "Male",
  "phone": "+92-3001234567",
  "email": "ali.khan@example.com",
  "address": "House 10, Street 5, Model Town",
  "city": "Lahore",
  "state": "Punjab",
  "zip_code": "54000",
  "emergency_contact_name": "Ahmed Khan",
  "emergency_contact_phone": "+92-3007654321",
  "blood_group": "O+",
  "allergies": ["None"]
}
```

**Validation Rules:**
- `date_of_birth`: Format YYYY-MM-DD
- `gender`: Male/Female/Other
- `email`: Valid email format

**Response:**
```json
{
  "message": "Patient added successfully",
  "patient_id": "696885475ebee0796d868817"
}
```

**Status Codes:**
- `201` - Created successfully
- `400` - Validation error
- `401` - Unauthorized (missing/invalid token)
- `409` - Email already exists

---

### Get All Patients

**Endpoint:** `GET /api/patients/allpatients`

**Description:** Retrieve a list of all patients

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Response:**
```json
[
  {
    "_id": "696885475ebee0796d868817",
    "first_name": "Ali",
    "last_name": "Khan",
    "date_of_birth": "1998-06-15T00:00:00.000Z",
    "gender": "Male",
    "phone": "+92-3001234567",
    "email": "ali.khan@example.com",
    "city": "Lahore",
    "blood_group": "O+",
    "created_at": "2026-01-15T06:12:23.633Z"
  }
]
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `500` - Server error

---

### Get Patient Profile

**Endpoint:** `GET /api/patients/profile/:id`

**Description:** Retrieve a specific patient's detailed profile

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `id` (string, required) - Patient's unique identifier

**Example Request:**
```
GET /api/patients/profile/696885475ebee0796d868817
```

**Response:**
```json
{
  "_id": "696885475ebee0796d868817",
  "first_name": "Ali",
  "last_name": "Khan",
  "date_of_birth": "1998-06-15T00:00:00.000Z",
  "gender": "Male",
  "phone": "+92-3001234567",
  "email": "ali.khan@example.com",
  "address": "House 12, Street 5, Model Town",
  "city": "Lahore",
  "state": "Punjab",
  "zip_code": "54000",
  "emergency_contact_name": "Ahmed Khan",
  "emergency_contact_phone": "+92-3017654321",
  "blood_group": "O+",
  "allergies": ["Peanuts"],
  "created_at": "2026-01-15T06:12:23.633Z",
  "updated_at": "2026-01-15T06:12:23.633Z",
  "__v": 0
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `404` - Patient not found

---

### Update Patient Profile

**Endpoint:** `PUT /api/patients/updateprofile/:id`

**Description:** Update patient's information

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `id` (string, required) - Patient's unique identifier

**Request Body:** (all fields optional)
```json
{
  "phone": "+92-3009876543",
  "address": "New Address",
  "city": "Islamabad",
  "allergies": ["Peanuts", "Shellfish"],
  "blood_group": "A+"
}
```

**Response:**
```json
{
  "message": "Profile updated successfully"
}
```

**Status Codes:**
- `200` - Updated successfully
- `401` - Unauthorized
- `404` - Patient not found
- `400` - Validation error

---

### Delete Patient

**Endpoint:** `DELETE /api/patients/delete/:id`

**Description:** Remove a patient from the system

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `id` (string, required) - Patient's unique identifier

**Response:**
```json
{
  "message": "Patient deleted successfully"
}
```

**Status Codes:**
- `200` - Deleted successfully
- `401` - Unauthorized
- `404` - Patient not found

---

## 📅 Appointments/Bookings Endpoints

> ⚠️ **Authentication Required:** All booking routes require a valid JWT token in the `Authorization` header.

---

### Create New Appointment

**Endpoint:** `POST /api/bookings/new`

**Description:** Schedule a new appointment for a patient

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Request Body:**
```json
{
  "patient_id": "697123abc",
  "appointment_date": "2026-01-20",
  "appointment_time": "10:30",
  "duration_minutes": 30,
  "status": "scheduled",
  "reason_for_visit": "General checkup",
  "notes": "First time visit"
}
```

**Field Descriptions:**
- `appointment_date`: Format YYYY-MM-DD
- `appointment_time`: Format HH:MM (24-hour)
- `duration_minutes`: Duration in minutes (default: 30)
- `status`: scheduled | completed | cancelled | no-show

**Response:**
```json
{
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
```

**Status Codes:**
- `201` - Created successfully
- `400` - Validation error
- `401` - Unauthorized
- `409` - Time slot conflict

---

### Get Doctor's Appointments

**Endpoint:** `GET /api/bookings/doctor/:doctorId`

**Description:** Retrieve all appointments for a specific doctor

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `doctorId` (string, required) - Doctor's unique identifier

**Example Request:**
```
GET /api/bookings/doctor/6967712fc00a47eef409236c
```

**Response:**
```json
[
    {
        "_id": "6968ad4db7bd3f5816e56944",
        "patient_id": "696885475ebee0796d868817",
        "doctor_id": "6967712fc00a47eef409236c",
        "appointment_date": "2026-01-20T00:00:00.000Z",
        "appointment_time": "2026-01-20T14:30:00.000Z",
        "duration_minutes": 30,
        "status": "Scheduled",
        "reason_for_visit": "Regular health checkup",
        "notes": "Patient requested afternoon appointment",
        "created_at": "2026-01-15T09:03:09.514Z",
        "updated_at": "2026-01-15T09:03:09.514Z",
        "__v": 0
    }
]
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `404` - Doctor not found

---

### Update Appointment

**Endpoint:** `PATCH /api/bookings/update/:bookingId`

**Description:** Update appointment status, notes, or other details

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `bookingId` (string, required) - Booking's unique identifier

**Request Body:** (all fields optional)
```json
{
  "status": "completed",
  "notes": "Patient consulted successfully. Follow-up scheduled.",
  "appointment_time": "11:00"
}
```

**Response:**
```json
{
  "_id": "698xyz...",
  "status": "completed",
  "notes": "Patient consulted successfully. Follow-up scheduled.",
  "updated_at": "2026-01-15T10:00:00.000Z"
}
```

**Status Codes:**
- `200` - Updated successfully
- `401` - Unauthorized
- `404` - Booking not found
- `400` - Validation error

---

### Delete Appointment

**Endpoint:** `DELETE /api/bookings/delete/:bookingId`

**Description:** Cancel and remove an appointment

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `bookingId` (string, required) - Booking's unique identifier

**Response:**
```json
{
  "message": "Booking deleted successfully"
}
```

**Status Codes:**
- `200` - Deleted successfully
- `401` - Unauthorized
- `404` - Booking not found

---

## 🏥 Medical Records Endpoints

> ⚠️ **Authentication Required:** All medical record routes require a valid JWT token in the `Authorization` header.

---

### Create Medical Record

**Endpoint:** `POST /api/medical_records/new`

**Description:** Create a new medical record for a patient consultation

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Request Body:**
```json
{
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
    },
    {
      "medication_name": "Vitamin C",
      "dosage": "1000mg",
      "frequency": "Once daily",
      "duration": "7 days"
    }
  ]
}
```

**Response:**
```json
{
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
      "duration": "5 days",
      "_id": "699def..."
    }
  ],
  "created_at": "2026-01-15T09:30:00.000Z",
  "updated_at": "2026-01-15T09:30:00.000Z"
}
```

**Status Codes:**
- `201` - Created successfully
- `400` - Validation error
- `401` - Unauthorized
- `404` - Patient or booking not found

---

### Get Patient's Medical Records

**Endpoint:** `GET /api/medical_records/patient/:patientId`

**Description:** Retrieve all medical records for a specific patient

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `patientId` (string, required) - Patient's unique identifier

**Example Request:**
```
GET /api/medical_records/patient/697123abc
```

**Response:**
```json
[
    {
        "_id": "6969dd189886a3a40dba20c4",
        "patient_id": "696885475ebee0796d868817",
        "doctor_id": "6967712fc00a47eef409236c",
        "booking_id": "6968ad4db7bd3f5816e56944",
        "diagnosis": "Acute throat infection",
        "treatment_plan": "Rest and medication",
        "prescriptions": [
            {
                "medication_name": "Amoxicillin",
                "dosage": "500mg",
                "frequency": "Twice a day",
                "duration": "7 days",
                "instructions": "After meals",
                "start_date": "2026-01-15T00:00:00.000Z",
                "end_date": "2026-01-22T00:00:00.000Z"
            },
            {
                "medication_name": "Paracetamol",
                "dosage": "650mg",
                "frequency": "As needed",
                "duration": "5 days",
                "instructions": "Only if fever",
                "start_date": "2026-01-15T00:00:00.000Z",
                "end_date": "2026-01-20T00:00:00.000Z"
            }
        ],
        "created_at": "2026-01-16T06:39:20.760Z",
        "updated_at": "2026-01-16T06:39:20.760Z",
        "__v": 0
    }
]
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `404` - Patient not found

---

### Get Specific Medical Record

**Endpoint:** `GET /api/medical_records/:recordId`

**Description:** Retrieve a specific medical record by its ID

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `recordId` (string, required) - Medical record's unique identifier

**Example Request:**
```
GET /api/medical_records/699abc...
```

**Response:**
```json
{
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
      "duration": "5 days",
      "_id": "699def..."
    }
  ],
  "created_at": "2026-01-15T09:30:00.000Z",
  "updated_at": "2026-01-15T09:30:00.000Z"
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `404` - Record not found

---

### Update Medical Record

**Endpoint:** `PATCH /api/medical_records/update/:recordId`

**Description:** Update an existing medical record

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `recordId` (string, required) - Medical record's unique identifier

**Request Body:** (all fields optional)
```json
{
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
```

**Response:**
```json
{
  "_id": "699abc...",
  "patient_id": "697123abc",
  "doctor_id": "6967712fc00a47eef409236c",
  "booking_id": "698xyz...",
  "diagnosis": "Common cold - recovered",
  "treatment_plan": "Continue rest for 2 more days",
  "prescriptions": [
    {
      "medication_name": "Vitamin C",
      "dosage": "1000mg",
      "frequency": "Once a day",
      "duration": "7 days",
      "_id": "699ghi..."
    }
  ],
  "updated_at": "2026-01-16T10:00:00.000Z"
}
```

**Status Codes:**
- `200` - Updated successfully
- `401` - Unauthorized
- `404` - Record not found
- `400` - Validation error

---

### Delete Medical Record

**Endpoint:** `DELETE /api/medical_records/delete/:recordId`

**Description:** Permanently delete a medical record

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `recordId` (string, required) - Medical record's unique identifier

**Response:**
```json
{
  "message": "Medical Record deleted successfully"
}
```

**Status Codes:**
- `200` - Deleted successfully
- `401` - Unauthorized
- `404` - Record not found

---

### Delete Prescription from Record

**Endpoint:** `DELETE /api/medical_records/:recordId/prescription/:prescriptionIndex`

**Description:** Remove a specific prescription from a medical record

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**URL Parameters:**
- `recordId` (string, required) - Medical record's unique identifier
- `prescriptionIndex` (number, required) - Index of the prescription (0, 1, 2, etc.)

**Example Request:**
```
DELETE /api/medical_records/699abc.../prescription/0
```

**Response:**
```json
{
  "message": "Prescription deleted successfully"
}
```

**Status Codes:**
- `200` - Deleted successfully
- `401` - Unauthorized
- `404` - Record or prescription not found
- `400` - Invalid index

---

## 🔒 Authentication & Authorization

### JWT Token Usage

All protected routes require a valid JWT token obtained from the login endpoint.

**Header Format:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Token Expiration:** Tokens expire after 24 hours (configurable)

### Error Responses

**401 Unauthorized:**
```json
{
  "error": "Authentication required",
  "message": "No token provided or token expired"
}
```

**403 Forbidden:**
```json
{
  "error": "Access denied",
  "message": "You don't have permission to access this resource"
}
```

---

## ⚠️ Common Error Responses

### 400 Bad Request
```json
{
  "error": "Validation error",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### 404 Not Found
```json
{
  "error": "Resource not found",
  "message": "The requested resource does not exist"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error",
  "message": "An unexpected error occurred. Please try again later."
}
```

---

## 📝 Notes

- All timestamps are in ISO 8601 format (UTC)
- Date fields use YYYY-MM-DD format
- Time fields use HH:MM format (24-hour)
- Phone numbers should include country code
- All IDs are MongoDB ObjectId strings

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

**Contribution Guidelines:**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

---

## 👨‍💻 Author

**Amjad Khan**
***amjadkhanniazi010@gmail.com***

---

## 📄 License

This project is licensed under the MIT License.

---

## 📞 Support

For support, please contact the development team or open an issue in the repository.