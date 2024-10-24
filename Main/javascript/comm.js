const communities = [
    { name: "Web Dev Enthusiasts", category: "Tech", description: "A community for web developers.", members: 300 },
    { name: "AI Innovators", category: "Tech", description: "Exploring AI and Machine Learning.", members: 250 },
    { name: "Fitness Geeks", category: "Sports", description: "Discuss fitness tips and sports.", members: 500 },
    { name: "Art Lovers", category: "Art", description: "Share your love for painting, sculpture, and more.", members: 150 }
];

function renderCommunities(list) {
    const communityList = document.getElementById("communityList");
    communityList.innerHTML = '';
    list.forEach((community, index) => {
        const communityItem = document.createElement("li");
        communityItem.classList.add("community-item");
        communityItem.innerHTML = `
            <h2>${community.name}</h2>
            <p>Category: ${community.category} | Members: ${community.members}</p>
            <div class="community-info">
                <p>${community.description}</p>
                <button class="join-btn" onclick="joinCommunity('${community.name}')">Join Community</button>
            </div>
        `;
        communityItem.onclick = () => toggleInfo(index);
        communityList.appendChild(communityItem);
    });
}

function toggleInfo(index) {
    const info = document.querySelectorAll('.community-info')[index];
    info.style.display = info.style.display === 'block' ? 'none' : 'block';
}

function searchCommunities() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filtered = communities.filter(c => c.name.toLowerCase().includes(query));
    renderCommunities(filtered);
}

function sortCommunities() {
    const sortBy = document.getElementById('sortSelect').value;
    const sorted = [...communities].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    renderCommunities(sorted);
}

function filterByCategory(category) {
    const filtered = category === 'All' ? communities : communities.filter(c => c.category === category);
    renderCommunities(filtered);
}

function home() {
    window.location.href = 'Homepage.html';
}

function joinCommunity(name) {
    alert(`Request to join ${name} has been sent!`);
}

document.addEventListener('DOMContentLoaded', () => renderCommunities(communities));
