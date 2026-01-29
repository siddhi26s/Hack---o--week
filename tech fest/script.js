// ================= GET ELEMENTS =================
const form = document.getElementById("regForm");

const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");

const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm");

const strengthBar = document.getElementById("strengthBar");
const progressBar = document.getElementById("bar");

const photo = document.getElementById("photo");
const preview = document.getElementById("preview");

const terms = document.getElementById("terms");
const msg = document.getElementById("msg");

// ================= PROGRESS BAR =================
form.addEventListener("input", () => {

  let filled = 0;

  if(nameInput.value) filled++;
  if(email.value) filled++;
  if(phone.value) filled++;
  if(gender.value) filled++;
  if(password.value) filled++;
  if(confirmPass.value) filled++;

  let percent = (filled / 6) * 100;
  progressBar.style.width = percent + "%";

});

// ================= PASSWORD STRENGTH =================
password.addEventListener("input", () => {

  let p = password.value;
  let strength = 0;

  if(p.length >= 6) strength++;
  if(/[A-Z]/.test(p)) strength++;
  if(/[0-9]/.test(p)) strength++;
  if(/[@$!%*?&]/.test(p)) strength++;

  if(strength === 1){
    strengthBar.style.width = "25%";
    strengthBar.style.background = "red";
  }
  else if(strength === 2){
    strengthBar.style.width = "50%";
    strengthBar.style.background = "orange";
  }
  else if(strength === 3){
    strengthBar.style.width = "75%";
    strengthBar.style.background = "blue";
  }
  else if(strength === 4){
    strengthBar.style.width = "100%";
    strengthBar.style.background = "lime";
  }
  else{
    strengthBar.style.width = "0%";
  }

});

// ================= IMAGE PREVIEW =================
photo.addEventListener("change", () => {

  const file = photo.files[0];

  if(file){
    preview.src = URL.createObjectURL(file);
  }

});

// ================= SUBMIT =================
form.addEventListener("submit", (e) => {

  e.preventDefault();

  if(password.value !== confirmPass.value){
    alert("Passwords do not match!");
    return;
  }

  if(!terms.checked){
    alert("Please accept Terms & Conditions!");
    return;
  }

  msg.innerText = "🎉 Registration Successful!";
  msg.style.color = "#00ff88";

  form.reset();
  progressBar.style.width = "0%";
  strengthBar.style.width = "0%";
  preview.src = "";

});
// ===== TEAM FORM LOGIC =====

const ptype = document.getElementById("ptype");
const teamCountBox = document.getElementById("teamCountBox");
const teamCount = document.getElementById("teamCount");
const teamMembersDiv = document.getElementById("teamMembers");

ptype.addEventListener("change", ()=>{
  if(ptype.value === "team"){
    teamCountBox.style.display = "block";
  } 
  else{
    teamCountBox.style.display = "none";
    teamMembersDiv.innerHTML = "";
  }
});

teamCount.addEventListener("input", ()=>{
  teamMembersDiv.innerHTML = "";

  let n = teamCount.value;

  for(let i=1;i<=n;i++){
    teamMembersDiv.innerHTML += `
      <div class="member-box">
        <label>Member ${i} Name</label>
        <input type="text" required>

        <label>Member ${i} Section</label>
        <input type="text" required>
      </div>
    `;
  }
});