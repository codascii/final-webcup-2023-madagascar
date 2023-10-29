import { useCallback, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    fetch('http://api-beta.houmadev.com/test/webcup-contact', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name,email,phoneNumber,message}).then(() => {
      setName('')
      setEmail('')
      setMessage('')
      setPhoneNumber('')
    })
    })
  }, [name, message, email,phoneNumber])

  return (
    <section className="contact__section bg__white pt-120 pb-120">
      <div className="container">
        <div className="section__header section__center pb__60">
          <h2>Prenez contact avec nous.</h2>
          <p>
          Remplissez le formulaire et notre équipe vous répondra dans les 24 heures.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="form_area">
              <form id="form" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="form-control">
                      <label htmlFor="Name">Nom</label>
                      <input
                        type="text"
                        id="Name"
                        placeholder="Enter Your Mane..."
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                      <small>{"Message d'erreur"}</small>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-control">
                      <label htmlFor="semail">Email</label>
                      <input
                        type="email"
                        id="semail"
                        placeholder="Enter Your Email..."
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <small>{"Message d'erreur"}</small>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-control">
                      <label htmlFor="phone">Telephone</label>
                      <input
                        type="number"
                        id="phone"
                        placeholder="Enter Your Number..."
                        required
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                      />
                      <small>{"Message d'erreur"}</small>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <label id="country">Pays</label>
                    <div className="select-wrapper">
                      <select>
                        <option value="1">Pays</option>
                        <option value="1">Mayotte</option>
                        <option value="1">La Reunion</option>
                        <option value="1">Madagascar</option>
                        <option value="1">Maurice</option>
                        <option value="1">Rodrigues</option>
                        <option value="1">Comores</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-control">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="10"
                        rows="5"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Enter Your Message..."
                      ></textarea>
                      <small>{"Message d'erreur"}</small>
                    </div>
                  </div>
                </div>
                <div className="submit__btn text-center mt-4">
                  <button type="submit" className="cmn--btn">
                    <span>Envoyez Message</span>
                  </button>
                </div>
                <div className="thank_you">
                  <p>Votre message a été envoyé avec succès !</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
