
import nodemailer from "nodemailer";

async function sendTestEmail() {
  const transporter = nodemailer.createTransport({
    host: "gbtech.in",      // SMTP host from cPanel
    port: 465,              // SSL port
    secure: true,           // true for port 465
    auth: {
      user: "aymaan.mulla@gbtech.in",
      pass: "" // app password / smtp password
    }
  });

  await transporter.sendMail({
    from: "aymaan.mulla@gbtech.in",
    to: "aymaanm816@gmail.com", // your test recipient
    subject: "Test Email via cPanel SMTP",
    text: "This is a test email sent from my server via cPanel SMTP!"
  });

  console.log("Email sent successfully!");
}

sendTestEmail().catch(console.error);

//Test-NetConnection gbtech.in -Port 587 OR 465
/*
| Field                   | Value                                                   |
| ----------------------- | ------------------------------------------------------- |
| Host                    | gbtech.in                                               |
| Port                    | 465                                                     |
| Secure                  | true (SSL/TLS)                                          |
| Auth                    | Yes                                                     |
| Username                | [aymaan.mulla@gbtech.in](mailto:aymaan.mulla@gbtech.in) |
| Password                | email account password                                  |
| Requires authentication | Yes                                                     |

The analogy (high-level)

| Web                     | Email                   |
| ----------------------- | ----------------------- |
| SSL / TLS               | SPF / DKIM / DMARC      |
| Proves website identity | Proves sender identity  |
| Prevents spoofing       | Prevents email spoofing |
| Builds browser trust    | Builds inbox trust      |


Even if your SMTP code works:
| Issue            | Result      |
| ---------------- | ----------- |
| New IP           | Spam folder |
| No DKIM          | Spam        |
| No SPF           | Spam        |
| No DMARC         | Spam        |
| No reputation    | Spam        |
| No feedback loop | Spam        |
| Shared VPS IP    | Blocked     |


*/ 