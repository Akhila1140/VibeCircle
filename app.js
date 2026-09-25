const pages = {
  home: {
    title: "Home",
    subtitle: "Meet people through moments, not followers.",
    html: `
      <div class="grid">
        <div>
          <div class="card">
            <div class="post-header">
              <div class="mini-avatar">A</div>
              <div><strong>Akhila</strong><div class="muted">2 hours ago</div></div>
            </div>
            <p style="margin-top:15px;">Just completed my AR project! 🥽 So excited to explore this field.</p>
            <div class="post-image">🥽 🤖</div>
            <div class="actions">
              <span>❤️ 24</span><span>💬 8</span><span>↗ Share</span>
            </div>
          </div>

          <div class="card">
            <div class="post-header">
              <div class="mini-avatar">R</div>
              <div><strong>Rahul</strong><div class="muted">5 hours ago</div></div>
            </div>
            <p style="margin-top:15px;">Anyone interested in joining the AI Hackathon this weekend?</p>
            <div class="actions"><span>❤️ 18</span><span>💬 6</span></div>
          </div>
        </div>

        <div>
          <div class="card">
            <h3>People You May Connect With</h3>
            ${personCard("R", "Rohit", "AI • Python • ML", "3 common interests")}
            ${personCard("P", "Priya", "Gaming • AR/VR • Design", "2 common interests")}
            ${personCard("S", "Siddharth", "Web Dev • Python • Cloud", "2 common interests")}
          </div>

          <div class="card">
            <h3>🎯 Today's Quest</h3>
            <p>Find someone with a common interest.</p>
            <p class="muted">Reward: +50 XP</p>
            <button class="primary" style="margin-top:10px" onclick="navigate('quests')">Start Quest</button>
          </div>
        </div>
      </div>
    `
  },

  explore: {
    title: "Explore",
    subtitle: "Find people who share your interests.",
    html: `
      <div class="card">
        <h3>People</h3>
        <div class="people-list">
          ${personCard("R","Rahul","AI • Python • ML","3 common interests", true)}
          ${personCard("S","Sneha","Gaming • AR/VR • Design","2 common interests", true)}
          ${personCard("K","Karthik","Web Dev • Python • Cloud","2 common interests", true)}
          ${personCard("D","Divya","Photography • Travel • Music","2 common interests", true)}
          ${personCard("A","Arjun","AI • Data Science • Python","2 common interests", true)}
        </div>
      </div>
    `
  },

  rooms: {
    title: "Moment Rooms",
    subtitle: "Temporary communities around real moments.",
    html: `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px">
        <h3>Active Rooms</h3>
        <button class="primary" onclick="alert('Create Room form can be connected to backend here.')">+ Create Moment</button>
      </div>
      <div class="room-list">
        ${roomCard("🤖","AI Hackathon Hyderabad","37 members","Expires in 12h","Let's discuss project ideas and form teams!","Tech")}
        ${roomCard("🎮","Gaming Buddies","21 members","Expires in 18h","Find your squad for multiplayer games.","Gaming")}
        ${roomCard("🥽","AR/VR Builders","18 members","Expires in 10h","Share ideas, learn and build together!","AR/VR")}
      </div>
    `
  },

  quests: {
    title: "Social Quests",
    subtitle: "Complete real-world challenges and earn XP.",
    html: `
      <div class="grid">
        <div>
          <div class="card quest">
            <h3>🎯 Find a Common Interest</h3>
            <p>Connect with someone who shares one of your interests.</p>
            <p class="muted">Reward: +50 XP</p>
            <div class="progress"><div></div></div>
            <button class="primary" onclick="alert('Quest started!')">Start</button>
          </div>
          <div class="card quest">
            <h3>💡 Share a Programming Tip</h3>
            <p>Help another user with one useful programming tip.</p>
            <p class="muted">Reward: +30 XP</p>
            <button class="secondary" onclick="alert('Quest started!')">Start</button>
          </div>
        </div>
        <div class="card">
          <h3>🏆 Your Progress</h3>
          <p><strong>120 XP</strong></p>
          <p class="muted">Level 2</p>
          <div class="progress"><div style="width:65%"></div></div>
          <p>Next level: 180 XP</p>
          <br>
          <h3>Badges</h3>
          <p>🌱 First Step &nbsp; 🤝 Connector &nbsp; 🎯 Quest Starter</p>
        </div>
      </div>
    `
  },

  messages: {
    title: "Messages",
    subtitle: "Chat with your connections.",
    html: `
      <div class="card room-chat">
        <h3>AI Hackathon Hyderabad</h3>
        <div class="message">Rahul: Anyone working on NLP?</div>
        <div class="message me">Akhila: Yes! I'm working on a chatbot project.</div>
        <div class="message">Priya: That's awesome! Can I join?</div>
        <div class="message me">Akhila: Sure! Welcome 😊</div>
        <div style="display:flex;gap:8px;margin-top:15px">
          <input id="chatInput" style="flex:1;padding:11px;border:1px solid #ddd;border-radius:9px" placeholder="Type a message...">
          <button class="primary" onclick="sendMessage()">Send</button>
        </div>
      </div>
    `
  },

  notifications: {
    title: "Notifications",
    subtitle: "Stay updated with your VibeCircle activity.",
    html: `
      <div class="card">
        ${notification("R","Rahul connected with you.","2 min ago")}
        ${notification("🟣","Your Moment Room has 10 new messages.","5 min ago")}
        ${notification("🎯","You completed today's quest! +50 XP","10 min ago")}
        ${notification("P","Priya liked your post.","15 min ago")}
        ${notification("K","Karthik sent you a message.","20 min ago")}
        ${notification("🏆","You reached Level 2! +100 XP","1 hour ago")}
      </div>
    `
  },

  profile: {
    title: "Profile",
    subtitle: "Your interests, moments and achievements.",
    html: `
      <div class="profile-card">
        <div class="profile-cover"></div>
        <div class="profile-body">
          <div class="profile-avatar">A</div>
          <h2 style="margin-top:10px">Akhila</h2>
          <p class="muted">@akhila</p>
          <p style="margin-top:10px">Dream • Code • Create</p>
          <div class="chips" style="margin-top:12px">
            <span>AI</span><span>AR/VR</span><span>Gaming</span><span>Python</span><span>Startups</span>
          </div>
          <div class="stats">
            <div class="stat"><strong>12</strong><small>Posts</small></div>
            <div class="stat"><strong>24</strong><small>Connections</small></div>
            <div class="stat"><strong>5</strong><small>Rooms</small></div>
            <div class="stat"><strong>120</strong><small>XP</small></div>
          </div>
          <button class="primary" style="margin-top:20px" onclick="alert('Edit Profile form can be connected here.')">Edit Profile</button>
        </div>
      </div>
    `
  }
};

function personCard(letter, name, interests, common, button = false) {
  return `
    <div class="person">
      <div class="person-info">
        <div class="mini-avatar">${letter}</div>
        <div>
          <strong>${name}</strong>
          <div class="muted">${interests}</div>
          <small style="color:#6246ea">👥 ${common}</small>
        </div>
      </div>
      ${button ? `<button class="primary" onclick="alert('Connection request sent!')">Connect</button>` : ""}
    </div>
  `;
}

function roomCard(icon, title, members, expiry, description, category) {
  return `
    <div class="card room">
      <div class="room-info">
        <div class="mini-avatar">${icon}</div>
        <div>
          <h3>${title}</h3>
          <p class="muted">${members} • ${expiry}</p>
          <p>${description}</p>
          <span class="tag">${category}</span>
        </div>
      </div>
      <button class="primary" onclick="navigate('messages')">Join</button>
    </div>
  `;
}

function notification(letter, text, time) {
  return `
    <div class="notification">
      <div class="mini-avatar">${letter}</div>
      <div><strong>${text}</strong><div class="muted">${time}</div></div>
    </div>
  `;
}

function navigate(page) {
  const data = pages[page];
  if (!data) return;

  document.getElementById("pageTitle").textContent = data.title;
  document.getElementById("pageSubtitle").textContent = data.subtitle;
  document.getElementById("appContent").innerHTML = data.html;

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.page === page);
  });

  history.pushState({page}, "", "#" + page);
  window.scrollTo({top: 0, behavior: "smooth"});
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  if (!input || !input.value.trim()) return;
  const msg = document.createElement("div");
  msg.className = "message me";
  msg.textContent = "Akhila: " + input.value;
  input.parentElement.parentElement.insertBefore(msg, input.parentElement);
  input.value = "";
}

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => navigate(item.dataset.page));
});

window.addEventListener("popstate", () => {
  const page = location.hash.replace("#", "") || "home";
  navigateWithoutHistory(page);
});

function navigateWithoutHistory(page) {
  const data = pages[page] || pages.home;
  document.getElementById("pageTitle").textContent = data.title;
  document.getElementById("pageSubtitle").textContent = data.subtitle;
  document.getElementById("appContent").innerHTML = data.html;
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.page === page);
  });
}

const initialPage = location.hash.replace("#", "") || "home";
navigateWithoutHistory(initialPage);
