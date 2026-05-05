const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

const grid = document.getElementById('portfolioGrid');

const projects = [
  { title: "Activity 1", file: "activities/activity1.html" },
  { title: "Activity 2", file: "activities/activity2.html" },
  { title: "Activity 3", file: "activities/activity3.html" },
  { title: "Activity 4", file: "activities/activity4.html" },
  { title: "Activity 4 v2", file: "activities/activity4v2.html" },
  { title: "Activity 5", file: "activities/ACTIVITY 5 KAYE/activity5/index.html" },
  { title: "Activity 7", file: "activities/activity7.html" },
  { title: "Activity 8", file: "activities/activity8.html" },
  { title: "Activity 9", file: "activities/activity9.html" },
  { title: "Activity 10", file: "activities/activity10.html" }
];

projects.forEach((project, index) => {
  const card = document.createElement('div');
  card.className = 'portfolio-card';

  const number = index + 1;
  const label = number < 10 ? `0${number}` : number;

  card.innerHTML = `
    <div class="card-number">${label}</div>
    <div class="card-title">${project.title}</div>
    <div class="card-desc">Web Development</div>
    <a class="card-btn" href="${project.file}" target="_blank">View</a>
  `;

  grid.appendChild(card);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 80);

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.portfolio-card').forEach(card => {
  observer.observe(card);
});

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.classList.add('animated');
      });

      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(cat => {
  skillObserver.observe(cat);
});