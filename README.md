![image](https://github.com/StuxVT/SonicGlyde-Discord-Malware/assets/100985218/8171e62f-5c13-40c0-9ce5-5647c7d9dcee)

# SonicGlyde-Discord-Malware

A few of my friends got hit by this malware. Decided to reverse it to see what is under the hood.

virus.7z includes an electron-based credential grabber which steals discord tokens and browser data
 - it also includes a decrypted copy of the grabber source, with hardcoded C2 info
 - password: `stux`

It is being distributed via a manual phishing in discord DMs using the stolen accounts. Linking users to: `https://sonicglyde.com/` to download a fake game which is the aforementioned malware.

C2 server appears to be a proxy for telegram bot based on screenshots sent by the criminal to victims.

Current sha256hash of "SonicGlyde.rar" hosted by the site: `C2950FB320332E9D0DD72BA024B3792A5A0476E87EA99BD3C607FA75102E2EA4`
Last checked: `1710592073` (epoch timestamp)
Verified no change in C2 or functionality. Likely changed due to discord CDN expiry.
One-Line change at top of file doesn't seem to change overall functionality: 
`process.env.ComSpec = 'C:\\Windows\\system32\\cmd.exe';`

New Installer version sha256: `4423C53D0CED4E3FACB3B1260690C261B9299081B502495418B2D0DBBB582D88`
New duvet user version being used for C2 callbacks: `7015858909`


## spam_c2.py Features

- Generates random user and system metadata.
- Simulates the posting of new injections, valid tokens, browser data, and additional malicious endpoints to the live C2.
- Simulates the following additional endpoints:
  - `2fa-enable`: Sending data when two-factor authentication is being enabled.
  - `2fa-disable`: Sending data when two-factor authentication is being disabled.
  - `password-change`: Sending data when the user's password is being changed.
  - `email-change`: Sending data when the user's email is being changed.
  - `discord-login`: Sending data when the user logs in to Discord.

## Requirements

- `requests ~= 2.31.0`

You can install the requirements with pip:

```bash
pip install -r requirements.txt
```

## Usage

To run the program, execute the `spam_c2.py` script:

```bash
python spam_c2.py
```

This will start the program, which will begin sending simulated data to the specified API, including the additional malicious endpoints.

## Disclaimer

This project is for educational purposes only. It is not intended to be used for malicious purposes. The user is responsible for their own actions. The simulated data generated by this program is designed to closely resemble the behavior of the malware, but it should not be used to cause harm or engage in any illegal activities.
