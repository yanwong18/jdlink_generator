const correctPasscode = "bug";

document.getElementById('validateBtn').addEventListener('click', function() {
    const userPasscode = document.getElementById('passcodeInput').value;
    if (userPasscode === correctPasscode) {
        document.getElementById('linkSection').style.display = 'block';
        document.getElementById('passcodeInput').style.display = 'none';
        document.getElementById('validateBtn').style.display = 'none';
    } else {
        alert("Incorrect passcode. Please try again.");
    }
});

document.getElementById('generateLinksBtn').addEventListener('click', function() {
    let jd_url = document.getElementById('jdUrlInput').value;
    let tp_url = 'https://shkpmalls.shkp.com/upload/check/checkInstallApp.jsp?';
    let param = 'tenantmodule?redirecturl=';
    let tp_deeplink = 'openSHKMall://tenantmodule?redirecturl=';

    // Generate EDM/Web link
    let edmLink = tp_url + encodeURIComponent(param + encodeURIComponent(jd_url));
    // Generate Deeplink
    let deeplink = tp_deeplink + encodeURIComponent(jd_url);

    // Display the generated links
    document.getElementById('generatedLink').innerText = edmLink;
    document.getElementById('generatedDeepLink').innerText = deeplink;
});