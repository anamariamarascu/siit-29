import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjVlZjkzNTk5YjlmMGQ4ZDE3M2Y5OSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzI5MTYxNDcsImV4cCI6MTY3MzE3NTM0N30.0Eh2VZaQHSFzfFkj1K4q2xi9M5QjJ3BlDNRe6zWJedQ"

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});