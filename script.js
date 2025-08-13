document.addEventListener('DOMContentLoaded', () => {
  const scheduleContainer = document.getElementById('schedule-container');
  const searchBar = document.getElementById('search-bar');
  let talks = [];

  fetch('/api/talks')
    .then(response => response.json())
    .then(data => {
      talks = data;
      renderSchedule(talks);
    });

  searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTalks = talks.filter(talk => {
      const inCategory = talk.categories.some(category => category.toLowerCase().includes(searchTerm));
      const inSpeaker = talk.speakers.some(speaker => speaker.toLowerCase().includes(searchTerm));
      return inCategory || inSpeaker;
    });
    renderSchedule(filteredTalks);
  });

  function renderSchedule(talksToRender) {
    scheduleContainer.innerHTML = '';

    if (talksToRender.length === 0) {
      scheduleContainer.innerHTML = '<p class="no-results">No talks found matching your search.</p>';
      return;
    }

    let currentTime = new Date();
    currentTime.setHours(10, 0, 0, 0); // Event starts at 10:00 AM

    talksToRender.forEach((talk, index) => {
      const startTime = new Date(currentTime);
      const endTime = new Date(startTime.getTime() + talk.duration * 60000);

      const talkElement = document.createElement('div');
      talkElement.classList.add('talk');
      talkElement.innerHTML = `
        <div class="talk-time">${formatTime(startTime)} - ${formatTime(endTime)}</div>
        <h2 class="talk-title">${talk.title}</h2>
        <div class="talk-speakers">${talk.speakers.join(', ')}</div>
        <div class="talk-categories">
          ${talk.categories.map(category => `<span class="talk-category">${category}</span>`).join('')}
        </div>
        <p class="talk-description">${talk.description}</p>
      `;
      scheduleContainer.appendChild(talkElement);

      currentTime = new Date(endTime.getTime() + 10 * 60000); // 10 minute transition

      if (index === 2) { // Lunch break after the 3rd talk
        const lunchStartTime = new Date(currentTime);
        const lunchEndTime = new Date(lunchStartTime.getTime() + 60 * 60000);
        const breakElement = document.createElement('div');
        breakElement.classList.add('break');
        breakElement.innerHTML = `
          <div class="talk-time">${formatTime(lunchStartTime)} - ${formatTime(lunchEndTime)}</div>
          <h2 class="talk-title">Lunch Break</h2>
        `;
        scheduleContainer.appendChild(breakElement);
        currentTime = lunchEndTime;
      }
    });
  }

  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
});