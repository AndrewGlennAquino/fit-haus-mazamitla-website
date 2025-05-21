import "./Hours.css";

function Hours() {
  return (
    <>
      <section className="hours-container" id="hours">
        <h1>Hours</h1>

        <div className="hours-content">
          <div>
            <h1>Sunday-Thursday:</h1>
            <h1>06:00 AM - 10:00 PM</h1>
          </div>

          <div>
            <h1>Friday-Saturday:</h1>
            <h1>06:00 AM - 8:00PM</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hours;
