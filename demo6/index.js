Notification.requestPermission().then(permission => {
  if (permission === "granted") {
    const notification = new Notification("DevC Marrakech", {
      body: "Hola!",
      icon:
        "https://media.licdn.com/dms/image/C4E0BAQEbZg6Ty_eCmg/company-logo_400_400/0?e=1577923200&v=beta&t=NGE2Fca5jItWeUYf7wu9M4nM39TY7AI-yDdYsqRm81M"
    });
  }
});
