import "./Kapcsolat.css";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Kapcsolat() {
  const [formData, setFormData] = useState({
    nev: "",
    email: "",
    uzenet: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_vid35dh", // SERVICE ID
        "template_qci4n2r", // TEMPLATE ID
        {
          from_name: formData.nev,
          from_email: formData.email,
          message: formData.uzenet,
          time: new Date().toLocaleString("hu-HU"),
        },
        "PgLTh3RqTLYOm5nHO" // PUBLIC KEY
      )
      .then(() => {
        setStatus("ok");
        setFormData({ nev: "", email: "", uzenet: "" });
      })
      .catch((err) => {
        console.error("Email error:", err);
        setStatus("error");
      });
  }

  return (
    <div className="section">
      <div className="container">
        <div className="section-title">Kapcsolat</div>

        <div className="contact-grid">
          {/* BAL OLDAL – info */}
          <div className="card contact-card">
            <h3>Elérhetőségek</h3>
            <div className="contact-list">
              <p>
                Telefon: <a href="tel:+36209540800">+36 20 954 0800</a>
              </p>
              <p>
                E-mail:{" "}
                <a href="mailto:dedvillkft@gmail.com">dedvillkft@gmail.com</a>
              </p>
              <p>Munkavégzés helye: Budapest és környéke</p>
            </div>
            <div className="map-box">
              Térképes előnézet (Google Maps iframe helye)
            </div>
          </div>

          {/* JOBB OLDAL – űrlap */}
          <div className="card contact-card">
            <h3>Írj nekünk</h3>

            <form onSubmit={onSubmit}>
              <div className="form-row">
                <label htmlFor="nev">Név</label>
                <input
                  id="nev"
                  name="nev"
                  required
                  value={formData.nev}
                  onChange={(e) =>
                    setFormData({ ...formData, nev: e.target.value })
                  }
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-row">
                <label htmlFor="uzenet">Üzenet</label>
                <textarea
                  id="uzenet"
                  name="uzenet"
                  required
                  value={formData.uzenet}
                  onChange={(e) =>
                    setFormData({ ...formData, uzenet: e.target.value })
                  }
                />
              </div>

              <button
                className="btn-primary"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Küldés..." : "Küldés"}
              </button>

              {status === "ok" && (
                <p className="form-status success">
                  Köszönjük! Az üzeneted elküldtük.
                </p>
              )}
              {status === "error" && (
                <p className="form-status error">
                  Hiba történt. Kérlek próbáld újra később.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
