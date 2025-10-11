import emailjs from "@emailjs/browser";

// Reusable EmailJS function
export const sendEmail = async ({ name, email, subject, message }) => {
  try {
    const templateParams = {
      user_name: name,
      user_email: email,
      subject: subject,
      message: message,
    };

    const result = await emailjs.send(
      "service_ihlgsmd", // Replace with your EmailJS Service ID
      "template_bs2hwdg", // Replace with your EmailJS Template ID
      templateParams,
      "CO5LuHuhKPhYtq896" // Replace with your EmailJS Public Key
    );

    console.log("Email sent successfully:", result.text);
    return { success: true, text: result.text };
  } catch (error) {
    console.error("Error sending email:", error.text || error);
    return { success: false, error: error.text || error };
  }
};
