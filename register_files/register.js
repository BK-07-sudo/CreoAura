// 1️⃣ Initialize Supabase (Replace with your actual credentials)
const SUPABASE_URL = "https://ehnctyhgjsdrummzyrdg.supabase.co"; // Replace with your Supabase Project URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVobmN0eWhnanNkcnVtbXp5cmRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNTkyMjIsImV4cCI6MjA1NzYzNTIyMn0.h0A-Uj16y_lh2N407yJd2l4pQDoVkR1Nh9sRdfpZG6M"; // Replace with your actual key

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); // ✅ Use 'window.supabase'

// 2️⃣ Restrict mobile number input to digits only and limit to 10 digits
document.getElementById("mobile").addEventListener("input", function (event) {
    this.value = this.value.replace(/\D/g, ""); // Remove non-digit characters
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10); // Limit to 10 digits
    }
});

// 3️⃣ Form submission handling
document.getElementById("registration-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.getElementById("gender").value;
    const mobile = document.getElementById("mobile").value.trim();
    const countryCode = document.getElementById("country-code").value.trim();
    const service = document.getElementById("services").value;

    // 4️⃣ Validation checks
    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Name should contain only letters and spaces.");
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email.");
        return;
    }
    if (!gender) {
        alert("Please select your gender.");
        return;
    }
    if (mobile.length !== 10) {
        alert("Mobile number should be exactly 10 digits.");
        return;
    }
    if (!service) {
        alert("Please select a service.");
        return;
    }
// Get current computer time in YYYY-MM-DD HH:MM:SS format
const created_at = new Date().toISOString().slice(0, 19).replace("T", " ");

// Store data in Supabase table "CreoAura"
const { data, error } = await supabase.from("CreoAura").insert([
    { name, email, gender, phone: countryCode + mobile, service, created_at }
]);

    

    if (error) {
        console.error("Error:", error.message);
        alert("Registration failed! Please try again.");
    } else {
        alert("Registration successful!");
        console.log("User Registered:", { name, email, gender, phone: countryCode + mobile, service });

        // Reset form
        document.getElementById("registration-form").reset();
    }
});
