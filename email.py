import smtplib
email = "yjames1103@gmail.com"
receiver_email = input("RECEIVER EMAIL: ")
subject = input("SUBJECT: ")
message = input("MESSAGE: ")
text = f"Subject: {subject}\n\n{message}"

try:
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls() 
    server.login(email, "girdysblvyiclnlc")
    server.sendmail(email, receiver_email, text) 
    print("Email has been sent to " + receiver_email)
except Exception as e:
    print("An error occurred:", e)
finally:
    server.quit()
