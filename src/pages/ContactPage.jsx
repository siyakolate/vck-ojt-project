const ContactPage = () => {
  return(
    <div className="main-container">
    <div className="page-container" style={{overflow:"auto"}}>
    
       
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

        
          <h2>General Enquiries</h2>
          <p>
            <b>Vivekanand College Main Campus</b><br/>
          [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai,<br/> Maharashtra 400071]
             <br/>India</p>
          <p>Phone: *+91 12345 67890*<br/>
             Email: *info@vivekanandcollege.edu*<br/>
             Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
        
          <h2>Admissions Office</h2>
          <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br/>
             Phone: +91 98765 43210<br/>
             Email: admissions@vivekanandcollege.edu</p>
       
          <h2>Student Support Services</h2>
          <p>For current student support, academic advising, or general assistance:<br/>
             Phone: +91 87654 32109<br/>
             Email: studentsupport@vivekanandcollege.edu</p><br/>
       
          <h2>Find Us on the Map</h2>
          <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
          <a 
            href="https://www.google.com/maps/place/Vivekanand+College/@16.7123502,74.2360348,17z" 
            target="_blank" 
            rel="noopener noreferrer"
           >
            View on Google Maps
          </a>
        
          <h2>Send Us a Message</h2>
           <form className="contact-form">
             Name:<input type="text" placeholder="Your Name" name="name" required /><br/>
            Email: <input type="email" placeholder="Your Email" name="email" required /><br/>
            Subject: <input type="text" placeholder="Subject" name="subject" /><br/>
             Message:<input type="text" placeholder="Your Message" name="message" required></input><br/>
             <button type="submit">Send Message</button>
          </form>
        
  
     
    </div>
    </div>
  )
}
export default ContactPage;