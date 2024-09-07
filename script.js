// Fetch IPv4 Address using ipify service
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    document.getElementById('ipv4Address').innerText = `IPv4: ${data.ip}`;
})
.catch(error => {
    document.getElementById('ipv4Address').innerText = 'Error fetching IPv4 address';
    console.error('Error fetching the IPv4 address:', error);
});

// Fetch IPv6 Address using ipify service
fetch('https://api64.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    document.getElementById('ipv6Address').innerText = `IPv6: ${data.ip}`;
})
.catch(error => {
    document.getElementById('ipv6Address').innerText = 'Error fetching IPv6 address';
    console.error('Error fetching the IPv6 address:', error);
});
